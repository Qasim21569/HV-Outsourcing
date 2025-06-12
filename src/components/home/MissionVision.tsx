import React, { useEffect, useRef, useState } from 'react';
import { 
  Flag,
  Eye,
  Brain,
  Compass,
  Target,
  Lightbulb,
  Heart,
  Shield
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MissionVision: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const missionIconRef = useRef<HTMLDivElement>(null);
  const visionIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate mission and vision icons
          if (missionIconRef.current && visionIconRef.current) {
            // Mission flag animation
            gsap.fromTo(missionIconRef.current,
              {
                scale: 0,
                rotation: -45,
                opacity: 0
              },
              {
                scale: 1,
                rotation: 0,
                opacity: 1,
                duration: 1.2,
                delay: 0.5,
                ease: "back.out(1.7)"
              }
            );
            
            // Vision eye/brain animation
            gsap.fromTo(visionIconRef.current,
              {
                scale: 0,
                rotation: 45,
                opacity: 0
              },
              {
                scale: 1,
                rotation: 0,
                opacity: 1,
                duration: 1.2,
                delay: 0.8,
                ease: "back.out(1.7)"
              }
            );
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const coreValues = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Transparent operations and ethical business practices in everything we do',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Exceeding expectations through continuous improvement and innovation',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Heart,
      title: 'Partnership',
      description: 'Building lasting relationships based on trust and mutual success',
      color: 'from-[#E70051] to-[#B8003F]'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pioneering new solutions and technologies to drive results',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E70051]/10 to-[#FF6B9D]/10 animate-gradient-shift" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#E70051]/10 rounded-full blur-3xl animate-subtle-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#FF6B9D]/10 rounded-full blur-3xl animate-subtle-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Mission & Vision
          </h2>
          <p className={`text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Driving the future of outsourcing through <span className="text-[#E70051] font-semibold">innovation</span>, 
            <span className="text-[#FF6B9D] font-semibold"> excellence</span>, and unwavering commitment to our partners.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group h-full">
              <div 
                ref={missionIconRef}
                className="w-20 h-20 bg-gradient-to-br from-[#E70051] to-[#B8003F] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 animate-pulse-glow"
              >
                <Flag className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
                To empower businesses with <span className="text-[#E70051] font-semibold">performance-driven outsourcing solutions</span> that 
                scale operations, drive growth, and deliver measurable results through our unique owner-operator expertise.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/5 rounded-lg p-4">
                  <Compass className="w-6 h-6 text-[#E70051] mx-auto mb-2" />
                  <div className="text-sm text-gray-300">Strategic</div>
                  <div className="text-sm text-gray-300">Partnership</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <Target className="w-6 h-6 text-[#FF6B9D] mx-auto mb-2" />
                  <div className="text-sm text-gray-300">Results</div>
                  <div className="text-sm text-gray-300">Focused</div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group h-full">
              <div 
                ref={visionIconRef}
                className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 animate-pulse-glow"
              >
                <div className="relative">
                  <Eye className="w-10 h-10 text-white" />
                  <Brain className="w-6 h-6 text-white absolute -top-1 -right-1 opacity-70" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
                To become the <span className="text-[#FF6B9D] font-semibold">global leader in intelligent outsourcing</span>, 
                setting new standards for quality, innovation, and client success while revolutionizing the BPO industry.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/5 rounded-lg p-4">
                  <Lightbulb className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-300">Innovation</div>
                  <div className="text-sm text-gray-300">Leader</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <Shield className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-300">Industry</div>
                  <div className="text-sm text-gray-300">Standard</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className={`transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-3xl font-bold text-center text-white mb-12">Our Core Values</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group text-center"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none'
                }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className={`mt-20 text-center transform transition-all duration-1000 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <blockquote className="text-2xl font-medium text-white mb-4 italic">
              "Excellence is not a destination, but a continuous journey of improvement, innovation, and dedication to our clients' success."
            </blockquote>
            <cite className="text-[#FF6B9D] font-semibold">— HV Outsourcing Leadership Team</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision; 