import React, { useEffect, useRef, useState } from 'react';
import { 
  Calendar,
  MapPin,
  Users,
  Building,
  Trophy,
  Globe,
  TrendingUp,
  Star
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CorporateOverview: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Timeline animation
          if (timelineRef.current) {
            const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
            gsap.fromTo(timelineItems,
              {
                opacity: 0,
                x: -50,
                scale: 0.8
              },
              {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.3,
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

  const milestones = [
    {
      year: '2019',
      title: 'HV Outsourcing Founded',
      description: 'Established with a vision to revolutionize the BPO industry through performance-driven solutions',
      icon: Building,
      color: 'from-blue-500 to-blue-600'
    },
    {
      year: '2020-2023',
      title: 'Rapid Growth & Expansion',
      description: 'Scaled operations, built our unique owner-operator model, and established enterprise partnerships',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600'
    },
    {
      year: 'Dec 2024',
      title: 'Flagship Call Center Launch',
      description: 'Opened our state-of-the-art flagship call center with 180+ operational seats and advanced technology',
      icon: Star,
      color: 'from-[#E70051] to-[#B8003F]'
    }
  ];

  const corporateStats = [
    {
      icon: Calendar,
      value: '5+',
      label: 'Years of Excellence',
      description: 'Since 2019'
    },
    {
      icon: Users,
      value: '200+',
      label: 'Team Members',
      description: 'Growing daily'
    },
    {
      icon: Globe,
      value: '24/7',
      label: 'Global Operations',
      description: 'Always available'
    },
    {
      icon: Trophy,
      value: '500+',
      label: 'Successful Projects',
      description: 'Delivered with excellence'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#E70051]/5 to-transparent opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6B9D]/10 rounded-full blur-3xl animate-subtle-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Corporate Overview & Origin Story
          </h2>
          <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            From ambitious startup to <span className="text-[#E70051] font-semibold">industry leader</span> — 
            our journey is built on innovation, excellence, and unwavering commitment to our clients.
          </p>
        </div>

        {/* Corporate Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {corporateStats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#E70051] to-[#FF6B9D] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-[#E70051] mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          <h3 className={`text-3xl font-bold text-center text-gray-900 mb-12 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Our Journey
          </h3>
          
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-[#E70051] to-[#FF6B9D]" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`timeline-item flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                style={{ opacity: 0 }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className={`w-12 h-12 bg-gradient-to-br ${milestone.color} rounded-lg flex items-center justify-center mb-4 ${
                      index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <milestone.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-[#E70051] mb-2">{milestone.year}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className={`w-6 h-6 bg-gradient-to-br ${milestone.color} rounded-full border-4 border-white shadow-lg`} />
                </div>
                
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-20 text-center transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-[#E70051] to-[#FF6B9D] rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 rounded-2xl" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Be Part of Our Story?</h3>
              <p className="text-xl mb-6 opacity-90">Join the companies that trust HV Outsourcing for their most critical operations.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#E70051] px-8 py-3 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 btn-liquid-fill">
                  Start Your Partnership
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#E70051] transform hover:scale-105 transition-all duration-300">
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateOverview; 