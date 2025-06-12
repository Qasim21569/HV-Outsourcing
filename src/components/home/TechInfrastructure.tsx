import React, { useEffect, useRef, useState } from 'react';
import { 
  Server,
  Shield,
  Wifi,
  Database,
  Lock,
  Cloud,
  Monitor,
  Cpu,
  HardDrive,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { gsap } from 'gsap';

const TechInfrastructure: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSpec, setHoveredSpec] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const techSpecs = [
    {
      id: 'fiber',
      icon: Wifi,
      title: '100+ Mbps Fiber',
      description: 'High-speed internet connectivity with redundant failover systems',
      color: 'from-blue-500 to-blue-600',
      highlight: 'Guaranteed 99.9% uptime'
    },
    {
      id: 'encryption',
      icon: Lock,
      title: 'AES-256 Encryption',
      description: 'Military-grade encryption for all data transmissions and storage',
      color: 'from-green-500 to-green-600',
      highlight: 'Bank-level security'
    },
    {
      id: 'compliance',
      icon: Shield,
      title: 'HIPAA, ISO 27001 Compliance',
      description: 'Certified compliance with industry security and privacy standards',
      color: 'from-purple-500 to-purple-600',
      highlight: 'Annually audited'
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud-based systems with automated backup and recovery',
      color: 'from-indigo-500 to-indigo-600',
      highlight: 'Zero data loss guarantee'
    },
    {
      id: 'monitoring',
      icon: Monitor,
      title: '24/7 System Monitoring',
      description: 'Real-time monitoring and alerting for all critical systems',
      color: 'from-[#E70051] to-[#B8003F]',
      highlight: '15-second response time'
    },
    {
      id: 'redundancy',
      icon: Database,
      title: 'Redundant Systems',
      description: 'Multiple backup systems ensure continuous operations',
      color: 'from-orange-500 to-orange-600',
      highlight: 'Triple redundancy'
    }
  ];

  const partners = [
    { name: 'AWS', category: 'Cloud Infrastructure' },
    { name: 'Microsoft', category: 'Productivity Suite' },
    { name: 'Salesforce', category: 'CRM Platform' },
    { name: 'Twilio', category: 'Communications' },
    { name: 'Zoom', category: 'Video Conferencing' },
    { name: 'Slack', category: 'Team Collaboration' }
  ];

  const TechSpecCard = ({ spec, index }: { spec: any, index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
      setHoveredSpec(spec.id);
      if (cardRef.current) {
        gsap.to(cardRef.current, {
          scale: 1.05,
          y: -10,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    const handleMouseLeave = () => {
      setHoveredSpec(null);
      if (cardRef.current) {
        gsap.to(cardRef.current, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    return (
      <div
        ref={cardRef}
        className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer relative overflow-hidden transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{ transitionDelay: `${index * 100 + 300}ms` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
        
        <div className="relative z-10">
          <div className={`w-16 h-16 bg-gradient-to-br ${spec.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
            <spec.icon className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E70051] transition-colors duration-300">
            {spec.title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed mb-4">
            {spec.description}
          </p>
          
          <div className={`inline-block px-3 py-1 bg-gradient-to-r ${spec.color} text-white text-xs font-semibold rounded-full transform transition-all duration-300 ${
            hoveredSpec === spec.id ? 'scale-105 shadow-lg' : 'scale-100'
          }`}>
            {spec.highlight}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#E70051]/5 rounded-full blur-3xl animate-subtle-float" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#FF6B9D]/5 rounded-full blur-3xl animate-subtle-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Technology & Infrastructure
          </h2>
          <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Built on <span className="text-[#E70051] font-semibold">enterprise-grade technology</span> with 
            military-level security and 99.9% uptime guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {techSpecs.map((spec, index) => (
            <TechSpecCard key={spec.id} spec={spec} index={index} />
          ))}
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
            <Server className="w-10 h-10 text-[#E70051] mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">99.9%</div>
            <div className="text-sm text-gray-600">Uptime SLA</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
            <Zap className="w-10 h-10 text-[#FF6B9D] mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">&lt;15s</div>
            <div className="text-sm text-gray-600">Response Time</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
            <HardDrive className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">3x</div>
            <div className="text-sm text-gray-600">Redundancy</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
            <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
            <div className="text-sm text-gray-600">Compliance</div>
          </div>
        </div>

        <div className={`transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Technology Partners</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{partner.name.substring(0, 2)}</span>
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{partner.name}</h4>
                <p className="text-xs text-gray-600">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-20 text-center transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E70051]/20 to-[#FF6B9D]/20 rounded-2xl" />
            <div className="relative z-10">
              <Cpu className="w-16 h-16 text-[#E70051] mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Enterprise-Ready Infrastructure</h3>
              <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
                Our technology stack is designed for scale, security, and reliability. 
                From startups to Fortune 500 companies, we deliver consistent performance.
              </p>
              <button className="bg-[#E70051] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B8003F] transform hover:scale-105 transition-all duration-300 btn-liquid-fill shadow-lg">
                Request Technical Specifications
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechInfrastructure; 