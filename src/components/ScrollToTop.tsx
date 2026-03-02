import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Memaksa browser kembali ke koordinat 0 (paling atas) dan 0 (paling kiri)
    window.scrollTo(0, 0);
  }, [pathname]); // Setiap kali 'pathname' berubah, kode di dalam ini akan jalan

  return null; // Komponen ini tidak merender apa-apa di UI
};

export default ScrollToTop;