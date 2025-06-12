import React, { useEffect, useRef, useState } from 'react';
import { Target, Eye, Award, Handshake, Heart, Shield, Rocket, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MissionVision: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const coreValues = [
    {
      icon: Award,
      title: "Results-Driven Excellence",
      description: "We measure our success by your success. Every action we take is focused on delivering measurable results that directly impact your bottom line.",
      color: "from-[#E70051] to-[#B8003F]",
      bgColor: "bg-[#E70051]/10",
      stats: "96% Quality Score"
    },
    {
      icon: Handshake,
      title: "Partnership Mindset",
      description: "We're not just a service provider—we're your strategic partner. Because we operate businesses ourselves, we understand your challenges intimately.",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      stats: "Long-term Partnerships"
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Built on integrity and open communication, we maintain the highest standards of security and transparency in all our operations.",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      stats: "100% Data Security"
    },
    {
      icon: Rocket,
      title: "Innovation & Growth",
      description: "We continuously evolve our processes and technology to stay ahead of industry trends and deliver cutting-edge solutions.",
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      stats: "Latest Technology"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // GSAP Animations for cards
    if (cardsRef.current) {
      gsap.fromTo(cardsRef.current.children,
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
        
        {/* Animated background elements */}
        <div className="absolute top-40 left-10 w-72 h-72 bg-[#E70051]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-20 right-1/3 w-48 h-48 bg-[#FF6B9D]/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(231, 0, 81, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(231, 0, 81, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center space-x-2 bg-[#E70051]/10 px-4 py-2 rounded-full mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Heart className="w-4 h-4 text-[#E70051]" />
            <span className="text-sm font-medium text-[#B8003F]">Mission & Vision</span>
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="text-gray-900">Our Guiding</span><br />
            <span className="bg-gradient-to-r from-[#E70051] to-[#FF6B9D] bg-clip-text text-transparent">
              Principles
            </span>
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Our core values and aspirations that drive everything we do, ensuring exceptional results 
            for our clients and partners.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          
          {/* Mission Card */}
          <div className={`group transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-10 h-full overflow-hidden hover:shadow-3xl transition-all duration-500">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E70051]/5 via-transparent to-[#FF6B9D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E70051] to-[#B8003F] rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 group-hover:text-[#E70051] transition-colors duration-300">Our Mission</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#E70051] to-[#FF6B9D] rounded-full mt-2" />
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  To be the most <strong className="text-[#E70051]">revenue-focused</strong> and{' '}
                  <strong className="text-[#E70051]">performance-driven</strong> outsourcing partner in the world. 
                  We aim to make our clients money—period.
                </p>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E70051]/10 group-hover:border-[#E70051]/30 transition-all duration-300">
                  <p className="text-gray-600 leading-relaxed">
                    By aligning our success with yours, we ensure mutual growth and loyalty. Our commitment 
                    goes beyond traditional KPIs—we focus on actual{' '}
                    <strong className="text-[#E70051]">revenue impact</strong> and long-term partnership success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className={`group transform transition-all duration-1000 delay-800 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-10 h-full overflow-hidden hover:shadow-3xl transition-all duration-500">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Our Vision</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2" />
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  To become the <strong className="text-blue-600">global standard</strong> in results-based 
                  outsourcing, offering unmatched speed, accountability, and long-term client success.
                </p>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                  <p className="text-gray-600 leading-relaxed">
                    We believe that <strong className="text-blue-600">client retention</strong> is the truest 
                    measure of BPO success. That's why we go beyond KPIs to become indispensable to your 
                    operations, creating lasting partnerships built on trust and results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className={`transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-[#E70051]">Values</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The foundational principles that guide our every decision and action
            </p>
          </div>
          
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 p-8 transition-all duration-500 cursor-pointer ${
                  activeCard === index ? 'scale-105 shadow-2xl' : 'hover:scale-102'
                }`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                        {value.title}
                      </h4>
                      <div className={`inline-block px-3 py-1 ${value.bgColor} text-gray-700 text-sm font-medium rounded-full`}>
                        {value.stats}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {value.description}
                  </p>
                  
                  {/* Interactive element */}
                  <div className={`h-1 bg-gradient-to-r ${value.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className={`mt-20 text-center transform transition-all duration-1000 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-[#E70051]/10 via-white to-[#FF6B9D]/10 rounded-3xl p-8 border border-[#E70051]/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E70051] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#E70051] mb-2">500+</div>
                <div className="text-gray-600 font-medium">Satisfied Clients</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF6B9D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#FF6B9D] mb-2">96%</div>
                <div className="text-gray-600 font-medium">Client Retention</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#B8003F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#B8003F] mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;