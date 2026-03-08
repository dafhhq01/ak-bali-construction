import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Clock, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        storyRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const valueCards = valuesRef.current?.querySelectorAll('.value-card');
      if (valueCards) {
        gsap.fromTo(
          valueCards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: valuesRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      const teamCards = teamRef.current?.querySelectorAll('.team-card');
      if (teamCards) {
        gsap.fromTo(
          teamCards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: teamRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      const statItems = statsRef.current?.querySelectorAll('.stat-item');
      if (statItems) {
        gsap.fromTo(
          statItems,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We never compromise on materials or craftsmanship. Every detail matters.',
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We work collaboratively, keeping you informed and involved throughout.',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We respect your time and deliver projects on schedule without cutting corners.',
    },
    {
      icon: Shield,
      title: 'Lasting Value',
      description: 'We build homes that stand the test of time, in quality and design.',
    },
  ];

  const team = [
    {
      image: '/images/team_founder.jpg',
      name: 'Michael Harrison',
      role: 'Founder & Principal',
      bio: 'With over 20 years in construction and design, Michael founded CV.Surya Sakti Konstruksi with a vision to bridge the gap between architectural ambition and build reality.',
    },
    {
      image: '/images/team_manager.jpg',
      name: 'Sarah Chen',
      role: 'Project Director',
      bio: 'Sarah oversees all projects with meticulous attention to timeline, budget, and quality. Her background in architecture informs every decision.',
    },
    {
      image: '/images/team_supervisor.jpg',
      name: 'David Rodriguez',
      role: 'Construction Supervisor',
      bio: 'David brings 25 years of hands-on construction experience. His expertise ensures every build meets our exacting standards.',
    },
  ];

  return (
    <div className="bg-[#F6F7F9] min-h-screen">
      {/* Hero */}
      <div ref={heroRef} className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="micro-label text-[#6D6D6D] mb-4 block">ABOUT US</span>
          <h1 className="heading-lg text-[clamp(38px,5vw,72px)] text-[#111] mb-4">
            BUILT WITH PURPOSE
          </h1>
          <p className="text-[#6D6D6D] max-w-2xl text-lg">
            Design-led construction for homes that feel as good as they look. 
            We've been building excellence since 2008.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div ref={storyRef} className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="micro-label text-[#6D6D6D] mb-4 block">OUR STORY</span>
              <h2 className="font-['Montserrat'] font-bold text-2xl lg:text-3xl text-[#111] mb-6">
                From Vision to Reality
              </h2>
              <div className="space-y-4 text-[#6D6D6D] leading-relaxed">
                <p>
                  CV.Surya Sakti Konstruksi Construction was founded in 2008 with a simple belief: 
                  that the built environment should elevate daily life. We saw too many 
                  projects where design vision was compromised during construction, 
                  and we set out to change that.
                </p>
                <p>
                  Over the past 15 years, we've grown from a small team to a full-service 
                  construction company, completing over 150 projects across the Bay Area. 
                  Throughout this growth, we've maintained our commitment to quality, 
                  transparency, and client partnership.
                </p>
                <p>
                  Today, we're proud to be the construction partner of choice for 
                  discerning homeowners and respected architects. Our work speaks 
                  for itself—in the details, the durability, and the delight of our clients.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/images/team_planning.jpg"
                alt="CV.Surya Sakti Konstruksi team planning"
                className="w-full h-full object-cover img-monochrome"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div ref={statsRef} className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '150+', label: 'Projects Completed' },
              { value: '15+', label: 'Years Experience' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '25+', label: 'Industry Awards' },
            ].map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <p className="text-4xl lg:text-5xl font-['Montserrat'] font-bold text-[#111] mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-[#6D6D6D]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div ref={valuesRef} className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="micro-label text-[#6D6D6D] mb-4 block">WHAT DRIVES US</span>
            <h2 className="heading-lg text-[clamp(24px,3vw,40px)] text-[#111]">
              OUR VALUES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="value-card text-center p-8 border border-[#111]/10 bg-white">
                <value.icon className="w-10 h-10 text-[#B28AF0] mx-auto mb-6" />
                <h3 className="font-['Montserrat'] font-semibold text-lg text-[#111] mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-[#6D6D6D]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div ref={teamRef} className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="micro-label text-[#6D6D6D] mb-4 block">THE PEOPLE</span>
            <h2 className="heading-lg text-[clamp(24px,3vw,40px)] text-[#111]">
              MEET OUR TEAM
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="team-card text-center">
                <div className="aspect-[3/4] overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover img-monochrome"
                  />
                </div>
                <h3 className="font-['Montserrat'] font-semibold text-lg text-[#111] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#B28AF0] text-sm mb-3">{member.role}</p>
                <p className="text-sm text-[#6D6D6D]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/images/poolside_terrace.jpg"
                alt="CV.Surya Sakti Konstruksi quality"
                className="w-full h-full object-cover img-monochrome"
              />
            </div>
            <div>
              <span className="micro-label text-[#6D6D6D] mb-4 block">WHY CV.Surya Sakti Konstruksi</span>
              <h2 className="font-['Montserrat'] font-bold text-2xl lg:text-3xl text-[#111] mb-6">
                The CV.Surya Sakti Konstruksi Difference
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Design Sensitivity',
                    description: 'We understand that construction is the realization of design intent. Every decision respects the architectural vision.',
                  },
                  {
                    title: 'Transparent Communication',
                    description: 'No surprises. Regular updates, clear timelines, and honest discussions about challenges and solutions.',
                  },
                  {
                    title: 'Craftsman Network',
                    description: "We've built relationships with the finest tradespeople, ensuring every aspect of your project meets our standards.",
                  },
                  {
                    title: 'Lasting Relationships',
                    description: 'Many of our clients return for additional projects. We measure success by the relationships we build.',
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <h3 className="font-['Montserrat'] font-semibold text-[#111] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#6D6D6D]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Info */}
      <div className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-['Montserrat'] font-semibold text-[#111] mb-2">
                Licensed & Insured
              </h4>
              <p className="text-sm text-[#6D6D6D]">
                California Contractor License #123456<br />
                Fully insured for your protection
              </p>
            </div>
            <div>
              <h4 className="font-['Montserrat'] font-semibold text-[#111] mb-2">
                Written Warranty
              </h4>
              <p className="text-sm text-[#6D6D6D]">
                All projects include comprehensive<br />
                warranty documentation
              </p>
            </div>
            <div>
              <h4 className="font-['Montserrat'] font-semibold text-[#111] mb-2">
                Professional Affiliations
              </h4>
              <p className="text-sm text-[#6D6D6D]">
                Member of National Association<br />
                of Home Builders
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 px-6 lg:px-12 bg-[#111]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg text-[clamp(24px,3vw,40px)] text-white mb-4">
            LET'S BUILD SOMETHING TOGETHER
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Ready to start your project? We'd love to hear from you.
          </p>
          <Link to="/contact" className="btn-accent">
            Get in Touch
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
