import React, { useEffect, useRef, useState } from 'react';
import { 
  Clock, 
  Users, 
  Zap, 
  Settings, 
  CheckCircle, 
  TrendingUp,
  Globe,
  Calendar
} from 'lucide-react';

const FlexibilityScalability: React.FC = () => {
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

  const capabilities = [
    {
      icon: Globe,
      title: "24/7 Global Coverage",
      description: "Fully operational around the clock with seamless global coverage",
      timeframe: "Always On",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Rapid Agent Deployment",
      description: "Launch up to 50 agents with full training and integration",
      timeframe: "< 2 weeks",
      color: "bg-green-500"
    },
    {
      icon: Zap,
      title: "Fast Training Programs",
      description: "Train new hires to meet campaign standards",
      timeframe: "< 5 days",
      color: "bg-yellow-500"
    },
    {
      icon: Settings,
      title: "Profile Modifications",
      description: "Implement client-requested profile changes",
      timeframe: "< 24 hours",
      color: "bg-purple-500"
    },
    {
      icon: CheckCircle,
      title: "QA Procedure Updates",
      description: "Adjust quality assurance procedures as needed",
      timeframe: "< 2 hours",
      color: "bg-red-500"
    },
    {
      icon: TrendingUp,
      title: "Headcount Scaling",
      description: "Scale team size up or down based on demand",
      timeframe: "< 72 hours",
      color: "bg-indigo-500"
    },
    {
      icon: Calendar,
      title: "Holiday Coverage",
      description: "No downtime on U.S. or Philippine holidays",
      timeframe: "Continuous",
      color: "bg-orange-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Flexibility & Scalability: <span className="text-[#E70051]">Adapting to Your Needs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This level of responsiveness makes us one of the most agile mid-sized BPOs on the market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl border-2 border-gray-100 hover:border-[#E70051]/30 p-6 transform hover:scale-105 transition-all duration-300 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms` 
              }}
            >
              <div className={`w-12 h-12 ${capability.color} rounded-lg flex items-center justify-center mb-4`}>
                <capability.icon className="w-6 h-6 text-white" />
              </div>
              
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {capability.title}
                </h3>
                <div className="inline-block bg-[#E70051]/10 text-[#E70051] text-xs font-bold px-3 py-1 rounded-full">
                  {capability.timeframe}
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlighted Features */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Operational Excellence */}
          <div className="bg-gradient-to-br from-[#E70051]/10 to-[#E70051]/5 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-[#E70051] rounded-xl flex items-center justify-center mr-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Operational Excellence</h3>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Fully operational 24/7</strong> with global coverage
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Launch up to 50 agents</strong> in less than 2 weeks
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Train new hires</strong> in under 5 days to meet campaign standards
                </span>
              </li>
            </ul>
          </div>

          {/* Rapid Response */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Rapid Response</h3>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Implement profile changes</strong> in under 24 hours
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Adjust QA procedures</strong> in under 2 hours
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Scale headcount</strong> up/down within 72 hours
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Conclusion */}
        <div className={`text-center mt-12 transform transition-all duration-1000 delay-900 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Unmatched Agility in BPO Operations
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We build shifts around your needs, ensuring no downtime on U.S. or Philippine holidays. 
              This level of responsiveness makes us one of the most agile mid-sized BPOs on the market, 
              ready to adapt and scale with your business requirements at a moment's notice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexibilityScalability;