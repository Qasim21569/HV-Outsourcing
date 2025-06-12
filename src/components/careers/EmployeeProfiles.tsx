import React, { useEffect, useRef, useState } from 'react';
import { 
  Users, 
  Globe, 
  MessageCircle, 
  Brain,
  Award,
  CheckCircle
} from 'lucide-react';

const EmployeeProfiles: React.FC = () => {
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

  const talentQualities = [
    {
      icon: Users,
      title: "Proven B2B Experience",
      description: "Even on B2C accounts, every agent has demonstrated B2B experience",
      color: "bg-blue-500"
    },
    {
      icon: Globe,
      title: "Fluent, Neutral-Accent English",
      description: "Verified by a C2 proficiency test—the highest level of English competency",
      color: "bg-green-500"
    },
    {
      icon: MessageCircle,
      title: "Complex Conversation Skills",
      description: "Demonstrated ability to engage in complex, unscripted conversations",
      color: "bg-purple-500"
    },
    {
      icon: Brain,
      title: "Problem Solvers, Not Script Readers",
      description: "Passed our custom-built screening system designed to find critical thinkers",
      color: "bg-orange-500"
    }
  ];

  const hierarchyLevels = [
    { title: "Chief Executive Officer", department: "Executive Leadership" },
    { title: "Chief Operating Officer", department: "Operations" },
    { title: "VP of Operations", department: "Operations Management" },
    { title: "Operations Manager", department: "Daily Operations" },
    { title: "Team Leaders", department: "Team Management" },
    { title: "Senior Agents", department: "Client Services" },
    { title: "Call Center Agents", department: "Front Line" }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Talent: <span className="text-[#E70051]">High-Caliber Professionals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our agents are not entry-level. We maintain the highest standards for talent 
            acquisition and professional development.
          </p>
        </div>

        {/* Talent Standards */}
        <div className={`bg-white rounded-2xl shadow-lg p-8 mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-8">
            <Award className="w-12 h-12 text-[#E70051] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Our Talent Standards
            </h3>
            <p className="text-gray-600">
              Every single one of our agents has:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {talentQualities.map((quality, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 p-6 bg-gray-50 rounded-xl transform transition-all duration-300 delay-${index * 100} ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
              >
                <div className={`w-12 h-12 ${quality.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <quality.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {quality.title}
                  </h4>
                  <p className="text-gray-600">
                    {quality.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* English Policy */}
          <div className="mt-8 bg-[#E70051]/10 rounded-xl p-6 text-center">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              English-Only Policy
            </h4>
            <p className="text-gray-700">
              English-only policy is enforced on the floor at all times with U.S.-born leadership on every shift.
            </p>
          </div>
        </div>

        {/* Corporate Hierarchy */}
        <div className={`transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Corporate Structure
            </h3>
            <p className="text-gray-600">
              Clear hierarchy with defined roles and advancement opportunities
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-4">
              {hierarchyLevels.map((level, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-300 ${
                    index === 0 
                      ? 'border-[#E70051] bg-[#E70051]/5' 
                      : index <= 2 
                      ? 'border-blue-200 bg-blue-50' 
                      : 'border-gray-200 bg-gray-50'
                  }`}
                  style={{
                    marginLeft: `${index * 20}px`,
                    maxWidth: `calc(100% - ${index * 20}px)`
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      index === 0 
                        ? 'bg-[#E70051]' 
                        : index <= 2 
                        ? 'bg-blue-500' 
                        : 'bg-gray-400'
                    }`}></div>
                    <span className="font-semibold text-gray-900">{level.title}</span>
                  </div>
                  <span className="text-sm text-gray-600">{level.department}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Clear Advancement</h4>
                <p className="text-sm text-gray-600">Defined promotion pathways</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Strong Leadership</h4>
                <p className="text-sm text-gray-600">Experienced management team</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Merit-Based Growth</h4>
                <p className="text-sm text-gray-600">Performance-driven promotions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeProfiles;