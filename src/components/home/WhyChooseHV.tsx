import React, { useEffect, useRef, useState } from 'react';
import { 
  Crown, 
  Users, 
  Code, 
  Lightbulb, 
  Target, 
  Award,
  Heart,
  Coffee,
  Gamepad2,
  Utensils,
  Activity
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CalendlyButton from '../CalendlyButton';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseHV: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Simplified GSAP animation for cards
          if (cardsRef.current.length > 0) {
            gsap.fromTo(cardsRef.current, 
              { 
                y: 30,
                opacity: 0
              },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
              }
            );
          }
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const differentiators = [
    {
      icon: Crown,
      title: "Owner-Operator Expertise",
      description: "We are the rare BPO that also owns and operates the very types of businesses we support. We've lived the pain points and solved them from both sides.",
      color: "from-purple-500 to-purple-600",
      shadowColor: "shadow-purple-500/30"
    },
    {
      icon: Users,
      title: "US-Born Leadership & Talent",
      description: "Every shift has U.S.-born leadership on the floor. Our clients never need to explain nuance—we already get it. Proudly U.S.-owned and culturally aligned.",
      color: "from-blue-500 to-blue-600",
      shadowColor: "shadow-blue-500/30"
    },
    {
      icon: Code,
      title: "In-House Dev Team",
      description: "One of the only BPOs with an in-house dev team that builds your tools—dashboards, CRMs, reports, and more.",
      color: "from-green-500 to-green-600",
      shadowColor: "shadow-green-500/30"
    },
    {
      icon: Lightbulb,
      title: "Scalable Solutions",
      description: "Launch up to 50 agents in less than 2 weeks with our proven scalability infrastructure and rapid deployment capabilities.",
      color: "from-orange-500 to-orange-600",
      shadowColor: "shadow-orange-500/30"
    },
    {
      icon: Target,
      title: "Customizable Recruitment",
      description: "Our custom-built screening system finds problem solvers, not script readers. Every agent passes our C2 proficiency test.",
      color: "from-red-500 to-red-600",
      shadowColor: "shadow-red-500/30"
    },
    {
      icon: Award,
      title: "Operational Excellence",
      description: "96% QA average score, 89% CSAT rating, and 32% lead conversion rate exceeding B2B industry benchmarks.",
      color: "from-indigo-500 to-indigo-600",
      shadowColor: "shadow-indigo-500/30"
    },
    {
      icon: Heart,
      title: "Employee-Centric Culture (HV is COOL)",
      description: "We've built a workplace people love. From Free Food Friday celebrations and creative break areas to video games and a full-size basketball hoop.",
      color: "from-pink-500 to-pink-600",
      shadowColor: "shadow-pink-500/30",
      isCulture: true
    }
  ];

  const CultureIcons = () => (
    <div className="flex justify-center space-x-4 mt-4 opacity-70">
      <Coffee className="w-5 h-5 text-pink-400" />
      <Gamepad2 className="w-5 h-5 text-pink-400" />
      <Utensils className="w-5 h-5 text-pink-400" />
      <Activity className="w-5 h-5 text-pink-400" />
    </div>
  );

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold gradient-text mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Why Choose HV Outsourcing?
          </h2>
          <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            We're not just another BPO. We're your strategic partner, bringing unique advantages 
            that <span className="text-[#E70051] font-semibold">set us apart</span> from the competition.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-[#E70051]/20 hover:-translate-y-1"
            >
              {/* Icon and Title */}
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg ${item.shadowColor} group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4 group-hover:text-[#E70051] transition-colors duration-300">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {item.description}
              </p>

              {/* Culture Icons for special card */}
              {item.isCulture && <CultureIcons />}
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-[#E70051] to-[#B8003F] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience the HV Difference?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join industry leaders who have transformed their operations with our proven solutions.
            </p>
            <CalendlyButton
              text="Get Started Today"
              variant="desktop"
              trackingLabel="Why Choose HV - Get Started Today"
              className="px-8 py-3 bg-white text-[#E70051] hover:bg-gray-100 font-semibold rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseHV;