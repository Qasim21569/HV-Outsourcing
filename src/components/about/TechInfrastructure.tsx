import React, { useEffect, useRef, useState } from 'react';
import { 
  Wifi, 
  Phone, 
  Shield, 
  CheckCircle, 
  Monitor, 
  Lock,
  Server,
  Globe
} from 'lucide-react';

const TechInfrastructure: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    return () => observer.disconnect();
  }, []);

  const techFeatures = [
    {
      icon: Wifi,
      title: "Connectivity",
      description: "100+ Mbps fiber with auto-failover + VLAN-secured networks",
      color: "bg-blue-500"
    },
    {
      icon: Phone,
      title: "Telephony",
      description: "Cloud-based systems with AI IVR, ACD, and omnichannel support (voice, SMS, chat, email)",
      color: "bg-green-500"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "AES-256 encryption, hybrid cloud/on-prem storage, daily backups, MFA enforced",
      color: "bg-red-500"
    },
    {
      icon: CheckCircle,
      title: "Compliance",
      description: "HIPAA, ISO 27001, PH Data Privacy Act, regular audits + 3rd-party penetration tests",
      color: "bg-purple-500"
    },
    {
      icon: Monitor,
      title: "Monitoring",
      description: "24/7 NOC, real-time alerts, weekly system audits",
      color: "bg-orange-500"
    },
    {
      icon: Lock,
      title: "Facility",
      description: "Biometric access, data center-grade server rooms, power redundancy",
      color: "bg-indigo-500"
    }
  ];

  const partners = [
    "Salesforce", "Genesys", "Five9", "Zoominfo", "Brighttree", "Alaya",
    "RingCentral", "Zoho", "NikoHealth", "Acumatica", "vtiger", "AdvancedMD"
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Tech & Infrastructure: <span className="text-[#E70051]">Always On, Always Secure</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reliable, secure, and scalable infrastructure built for healthcare-grade 
            operations and rapid client growth.
          </p>
        </div>

        {/* Tech Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techFeatures.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-100 p-6 transform hover:scale-105 transition-all duration-300 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms` 
              }}
            >
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Result Statement */}
        <div className={`bg-gradient-to-r from-[#E70051]/10 to-purple-100 rounded-2xl p-8 text-center mb-16 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center mb-4">
            <Server className="w-8 h-8 text-[#E70051] mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">The Result</h3>
          </div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Reliable, secure, and scalable infrastructure built for healthcare-grade operations 
            and rapid client growth. Our enterprise-level technology stack ensures 99.9% uptime 
            and complete data protection for all client operations.
          </p>
        </div>

        {/* Technology Partners */}
        <div className={`transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Technology & Partners
            </h3>
            <p className="text-gray-600">
              We integrate seamlessly with industry-leading platforms and tools
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-center justify-center mb-2">
                    <Globe className="w-6 h-6 text-[#E70051]" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechInfrastructure;