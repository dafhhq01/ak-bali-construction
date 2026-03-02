import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Palette, 
  Hammer, 
  TreePine, 
  ArrowRight, 
  Check,
  Ruler,
  Lightbulb,
  PenTool
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const serviceCards = servicesRef.current?.querySelectorAll('.service-detail');
      if (serviceCards) {
        gsap.fromTo(
          serviceCards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            scrollTrigger: {
              trigger: servicesRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      const processSteps = processRef.current?.querySelectorAll('.process-step');
      if (processSteps) {
        gsap.fromTo(
          processSteps,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: processRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Home,
      title: 'Custom Home Construction',
      description: 'From foundation to finish, we build homes tailored to your vision and lifestyle. Our team manages every aspect of the construction process with precision and care.',
      features: [
        'Ground-up new construction',
        'Architect collaboration',
        'Permit and code compliance',
        'Quality craftsmanship',
        'Project management',
        'Warranty and support',
      ],
      image: '/images/hero_house.jpg',
    },
    {
      icon: Palette,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with thoughtful design and expert craftsmanship. We breathe new life into homes while respecting their original character.',
      features: [
        'Whole-home renovations',
        'Kitchen transformations',
        'Bathroom updates',
        'Room additions',
        'Structural modifications',
        'Historic restoration',
      ],
      image: '/images/modern_interior.jpg',
    },
    {
      icon: Hammer,
      title: 'Interior Build & Finishing',
      description: 'Custom cabinetry, millwork, and finishes that elevate every room. Our attention to detail ensures a cohesive, high-end result throughout your home.',
      features: [
        'Custom cabinetry',
        'Built-in millwork',
        'Trim and molding',
        'Flooring installation',
        'Paint and finishes',
        'Hardware selection',
      ],
      image: '/images/minimal_living.jpg',
    },
    {
      icon: TreePine,
      title: 'Architectural Execution',
      description: 'Bring architect designs to life with precision and attention to detail. We specialize in executing complex architectural visions with technical excellence.',
      features: [
        'Architect partnership',
        'Technical execution',
        'Detail-oriented build',
        'Quality materials',
        'Timeline management',
        'Final walkthrough',
      ],
      image: '/images/concrete_texture.jpg',
    },
  ];

  const additionalServices = [
    {
      icon: Ruler,
      title: 'Design Consultation',
      description: 'Expert guidance to help refine your vision and plan your project effectively.',
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Strategic lighting plans that enhance architecture and create ambiance.',
    },
    {
      icon: PenTool,
      title: 'Material Selection',
      description: 'Curated material palettes that balance aesthetics, durability, and budget.',
    },
  ];

  return (
    <div className="bg-[#F6F7F9] min-h-screen">
      {/* Header */}
      <div ref={headerRef} className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="micro-label text-[#6D6D6D] mb-4 block">WHAT WE DO</span>
          <h1 className="heading-lg text-[clamp(38px,5vw,72px)] text-[#111] mb-4">
            OUR SERVICES
          </h1>
          <p className="text-[#6D6D6D] max-w-2xl text-lg">
            Comprehensive construction services delivered with design sensibility 
            and technical excellence. Every project receives our full attention 
            and commitment to quality.
          </p>
        </div>
      </div>

      {/* Main Services */}
      <div ref={servicesRef} className="pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-detail grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover img-monochrome"
                  />
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <service.icon className="w-10 h-10 text-[#B28AF0] mb-6" />
                <h2 className="font-['Montserrat'] font-bold text-2xl lg:text-3xl text-[#111] mb-4">
                  {service.title}
                </h2>
                <p className="text-[#6D6D6D] leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-[#6D6D6D]">
                      <Check className="w-4 h-4 text-[#B28AF0] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className="btn-ghost inline-flex">
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="micro-label text-[#6D6D6D] mb-4 block">COMPLEMENTARY</span>
            <h2 className="heading-lg text-[clamp(24px,3vw,40px)] text-[#111]">
              ADDITIONAL SERVICES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-8 border border-[#111]/10">
                <service.icon className="w-10 h-10 text-[#B28AF0] mx-auto mb-6" />
                <h3 className="font-['Montserrat'] font-semibold text-lg text-[#111] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[#6D6D6D]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process */}
      <div ref={processRef} className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="micro-label text-[#6D6D6D] mb-4 block">HOW WE WORK</span>
            <h2 className="heading-lg text-[clamp(24px,3vw,40px)] text-[#111]">
              OUR PROCESS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Consultation',
                description: 'We listen to your vision, understand your needs, and discuss possibilities for your project.',
              },
              {
                number: '02',
                title: 'Planning',
                description: 'Detailed plans, transparent quotes, and a clear timeline for your project.',
              },
              {
                number: '03',
                title: 'Construction',
                description: 'Expert craftsmanship with regular updates and quality checkpoints.',
              },
              {
                number: '04',
                title: 'Completion',
                description: 'A flawless finish with walkthrough, documentation, and warranty.',
              },
            ].map((step, index) => (
              <div key={index} className="process-step text-center">
                <span className="text-[#B28AF0] font-['Montserrat'] font-bold text-5xl mb-4 block">
                  {step.number}
                </span>
                <h3 className="font-['Montserrat'] font-semibold text-lg text-[#111] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6D6D6D]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 px-6 lg:px-12 bg-[#111]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg text-[clamp(24px,3vw,40px)] text-white mb-4">
            READY TO START YOUR PROJECT?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Let's discuss how we can bring your vision to life. 
            Schedule a consultation to get started.
          </p>
          <Link to="/contact" className="btn-accent">
            Request a Consultation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
