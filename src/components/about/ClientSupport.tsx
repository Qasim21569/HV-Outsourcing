import React, { useEffect, useRef, useState } from 'react';
import { 
  Phone, 
  Mail, 
  User, 
  MessageSquare, 
  BarChart, 
  Calendar,
  Clock,
  CheckCircle
} from 'lucide-react';

const ClientSupport: React.FC = () => {
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

  const supportFeatures = [
    {
      icon: Clock,
      title: "24/7 Customer Service",
      description: "Around-the-clock customer service by phone and email. No matter the hour, clients can reach a live agent for support, inquiries, or urgent needs.",
      color: "bg-blue-500"
    },
    {
      icon: User,
      title: "Dedicated Success Manager",
      description: "Each client is assigned a dedicated success manager with a direct phone number—no tickets, no queues. You'll always know who to call.",
      color: "bg-green-500"
    },
    {
      icon: MessageSquare,
      title: "Post-call & Ticket Surveys",
      description: "Automated surveys sent after every interaction to ensure quality and gather immediate feedback on service delivery.",
      color: "bg-purple-500"
    },
    {
      icon: BarChart,
      title: "Monthly Performance Reports",
      description: "Comprehensive monthly reports with detailed feedback sections to track progress and identify improvement opportunities.",
      color: "bg-orange-500"
    },
    {
      icon: Calendar,
      title: "Quarterly Strategy Sessions",
      description: "Optional quarterly strategy sessions to co-create improvements and align on evolving business objectives.",
      color: "bg-red-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Support & Feedback: <span className="text-[#E70051]">Partnership-Driven Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast support. Clear ownership. Continuous improvement—all built to make sure 
            you're heard, supported, and satisfied.
          </p>
        </div>

        {/* Main Support Promise */}
        <div className={`bg-gradient-to-r from-[#E70051]/10 to-purple-100 rounded-2xl p-8 mb-16 text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center mb-6">
            <Phone className="w-8 h-8 text-[#E70051] mr-3" />
            <Mail className="w-8 h-8 text-[#E70051]" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Always Available, Always Responsive
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We offer around-the-clock customer service by phone and email. No matter the hour, 
            clients can reach a live agent for support, inquiries, or urgent needs. Your success 
            is our priority, and we're here whenever you need us.
          </p>
        </div>

        {/* Support Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {supportFeatures.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-100 p-4 sm:p-6 transform hover:scale-105 transition-all duration-300 ${
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

        {/* Feedback Process */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Simple, Structured Feedback Process
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#E70051] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Automated Surveys</h4>
                  <p className="text-gray-600">Post-call and ticket surveys sent automatically to capture immediate feedback</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#E70051] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Monthly Reports</h4>
                  <p className="text-gray-600">Comprehensive performance reports with dedicated feedback sections</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#E70051] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Strategy Sessions</h4>
                  <p className="text-gray-600">Optional quarterly sessions to co-create improvements and plan ahead</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Our Support Promise
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Fast support</strong> - No waiting, no delays
                </span>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Clear ownership</strong> - Direct access to your success manager
                </span>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Continuous improvement</strong> - Always evolving to serve you better
                </span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-[#E70051]/10 rounded-lg">
              <p className="text-sm text-gray-700 italic text-center">
                "All built to make sure you're heard, supported, and satisfied"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSupport;