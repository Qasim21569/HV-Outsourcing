import React, { useEffect, useRef, useState } from 'react';
import { 
  Users, 
  Phone, 
  Target, 
  UserCheck,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign
} from 'lucide-react';

const OpenPositions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(0);
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

  const positions = [
    {
      title: "Call Center Team Leads",
      icon: Users,
      location: "Makati City, Philippines",
      type: "Full-time",
      salary: "Competitive",
      description: "Lead and mentor teams of call center agents, ensuring quality service delivery and performance targets.",
      responsibilities: [
        "Manage and coach teams of 10-15 agents",
        "Monitor call quality and provide feedback",
        "Ensure adherence to KPIs and service standards",
        "Conduct training sessions and team meetings",
        "Report on team performance and metrics"
      ],
      requirements: [
        "2+ years of team leadership experience",
        "Excellent English communication skills",
        "Strong coaching and mentoring abilities",
        "Experience with call center operations",
        "Bachelor's degree preferred"
      ],
      color: "bg-blue-500"
    },
    {
      title: "Call Center Agents (Outbound)",
      icon: Phone,
      location: "Makati City, Philippines",
      type: "Full-time",
      salary: "Base + Incentives",
      description: "Help businesses stand out online and reach customers effectively through strategic outbound calling campaigns.",
      responsibilities: [
        "Conduct outbound sales and lead generation calls",
        "Build relationships with prospects and clients",
        "Meet daily and monthly calling targets",
        "Update CRM systems with call outcomes",
        "Participate in ongoing training programs"
      ],
      requirements: [
        "Proven B2B sales or outbound calling experience",
        "C2 level English proficiency required",
        "Strong communication and persuasion skills",
        "Ability to handle objections professionally",
        "High school diploma minimum"
      ],
      color: "bg-green-500"
    },
    {
      title: "Quality Analyst",
      icon: Target,
      location: "Makati City, Philippines",
      type: "Full-time",
      salary: "Competitive",
      description: "Help attract and win new clients by ensuring service quality and driving steady growth for business operations.",
      responsibilities: [
        "Monitor and evaluate call quality",
        "Provide feedback and coaching to agents",
        "Develop quality improvement strategies",
        "Generate quality reports and analytics",
        "Collaborate with training teams"
      ],
      requirements: [
        "2+ years of QA experience in BPO/call center",
        "Strong analytical and evaluation skills",
        "Excellent attention to detail",
        "Experience with quality monitoring tools",
        "Bachelor's degree preferred"
      ],
      color: "bg-purple-500"
    },
    {
      title: "Hiring Manager",
      icon: UserCheck,
      location: "Makati City, Philippines",
      type: "Full-time",
      salary: "Competitive + Benefits",
      description: "Create targeted recruitment strategies that attract top talent and drive real results for our growing business.",
      responsibilities: [
        "Develop and execute recruitment strategies",
        "Screen and interview potential candidates",
        "Manage the entire hiring process",
        "Build talent pipelines for future needs",
        "Collaborate with department heads on staffing needs"
      ],
      requirements: [
        "3+ years of recruitment/HR experience",
        "Experience in BPO/call center hiring preferred",
        "Strong interviewing and assessment skills",
        "Knowledge of labor laws and regulations",
        "Bachelor's degree in HR or related field"
      ],
      color: "bg-orange-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Current <span className="text-[#E70051]">Open Positions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our growing team and be part of a company that values your growth, 
            contribution, and success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Position Cards */}
          <div className="lg:col-span-1 space-y-4">
            {positions.map((position, index) => (
              <div
                key={index}
                className={`cursor-pointer rounded-xl border-2 p-6 transition-all duration-300 ${
                  selectedPosition === index
                    ? 'border-[#E70051] bg-[#E70051]/5 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                } ${
                  isVisible 
                    ? 'translate-x-0 opacity-100' 
                    : '-translate-x-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms` 
                }}
                onClick={() => setSelectedPosition(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${position.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <position.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {position.salary}
                      </div>
                    </div>
                  </div>
                  
                  <ArrowRight className={`w-5 h-5 transition-transform ${
                    selectedPosition === index ? 'text-[#E70051] rotate-90' : 'text-gray-400'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* Position Details */}
          <div className={`lg:col-span-2 bg-gray-50 rounded-2xl p-8 transform transition-all duration-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 ${positions[selectedPosition].color} rounded-xl flex items-center justify-center mr-4`}>
                {React.createElement(positions[selectedPosition].icon, { className: "w-8 h-8 text-white" })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {positions[selectedPosition].title}
                </h3>
                <p className="text-gray-600">
                  {positions[selectedPosition].description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Responsibilities */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {positions[selectedPosition].responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#E70051] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Requirements
                </h4>
                <ul className="space-y-2">
                  {positions[selectedPosition].requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Apply Button */}
            <div className="mt-8 text-center">
              <button className="bg-[#E70051] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B8003F] transform hover:scale-105 transition-all duration-200">
                Apply for this Position
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;