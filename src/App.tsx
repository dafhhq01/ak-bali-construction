import { useEffect, useLayoutEffect } from 'react'; // Pakai useLayoutEffect agar lebih cepat
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

// 1. KOMPONEN SCROLL TO TOP YANG LEBIH KUAT
function ScrollToTop() {
  const { pathname } = useLocation();
  
  // Menggunakan useLayoutEffect karena ini berjalan SEBELUM browser mengecat layar
  useLayoutEffect(() => {
    // Mematikan fitur auto-restore scroll bawaan browser
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Eksekusi scroll ke atas secara instan
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    // Refresh ScrollTrigger beberapa kali untuk memastikan kalkulasi tepat 
    // setelah gambar/layout selesai loading
    const timer = setInterval(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Berhenti me-refresh setelah 1 detik (sudah cukup untuk loading rata-rata)
    const timeout = setTimeout(() => {
      clearInterval(timer);
    }, 1000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [pathname]);
  
  return null;
}

function App() {
  useEffect(() => {
    const setupGlobalSnap = () => {
      // Kita hanya jalankan Snap jika ada elemen yang di-pin
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      if (pinned.length === 0) return;

      const maxScroll = ScrollTrigger.maxScroll(window);
      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(
              r => value >= r.start - 0.02 && value <= r.end + 0.02
            );
            if (!inPinned) return value;

            const target = pinnedRanges.reduce(
              (closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value)
                  ? r.center
                  : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.1, max: 0.2 },
          delay: 0,
          ease: 'none',
        },
      });
    };

    const timer = setTimeout(setupGlobalSnap, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      
      <div className="relative min-h-screen flex flex-col">
        <div className="grain-overlay" />
        
        <Navigation />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;