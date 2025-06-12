import React, { useEffect, useRef, useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Headphones, 
  Clock, 
  Users, 
  Award,
  Heart,
  Target
} from 'lucide-react';

const KeyDataInsights: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const dataPoints = [
    {
      icon: Phone,
      title: 'Outbound Dials',
      value: '40K+',
      period: '/day',
      description: 'Daily outbound connections',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-500'
    },
    {
      icon: MessageSquare,
      title: 'Sales Conversations',
      value: '750+',
      period: '/day',
      description: 'Quality sales interactions',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-500'
    },
    {
      icon: Headphones,
      title: 'Support Tickets',
      value: '300+',
      period: '/daily',
      description: 'Customer issues resolved',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-500'
    },
    {
      icon: Clock,
      title: 'Avg Ramp-up Time',
      value: '2-week',
      period: 'average',
      description: 'Fast agent deployment',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-500'
    },
    {
      icon: Users,
      title: 'Attrition Rate',
      value: '<5%',
      period: '',
      description: 'Industry-leading retention',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconBg: 'bg-red-500'
    },
    {
      icon: Award,
      title: 'QA Average Score',
      value: '96%',
      period: '',
      description: 'Quality assurance excellence',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconBg: 'bg-indigo-500'
    },
    {
      icon: Heart,
      title: 'CSAT Rating',
      value: '89%',
      period: '',
      description: 'Customer satisfaction',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconBg: 'bg-pink-500'
    },
    {
      icon: Target,
      title: 'Lead Conversion',
      value: '32%',
      period: '',
      description: 'Sales conversion rate',
      color: 'from-[#E70051] to-[#B8003F]',
      bgColor: 'bg-[#E70051]/10',
      iconBg: 'bg-[#E70051]'
    }
  ];

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

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#E70051]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6B9D]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center space-x-2 bg-[#E70051]/10 px-4 py-2 rounded-full mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Target className="w-4 h-4 text-[#E70051]" />
            <span className="text-sm font-medium text-[#B8003F]">Performance Metrics</span>
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="text-gray-900">Key Data</span><br />
            <span className="bg-gradient-to-r from-[#E70051] to-[#FF6B9D] bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Real-time performance metrics that showcase our operational excellence and 
            commitment to delivering measurable results.
          </p>
        </div>

        {/* Data Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {dataPoints.map((point, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 p-4 sm:p-6 transition-all duration-500 hover:scale-105 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{
                transitionDelay: `${600 + index * 100}ms`
              }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 ${point.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <point.icon className="w-6 h-6 text-white" />
              </div>

              {/* Value */}
              <div className="mb-2">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                  {point.value}
                </div>
                {point.period && (
                  <div className="text-sm text-gray-500 font-medium">
                    {point.period}
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {point.description}
              </p>

              {/* Bottom accent */}
              <div className={`mt-4 h-1 bg-gradient-to-r ${point.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-[#E70051]/10 via-white to-[#FF6B9D]/10 rounded-2xl p-8 border border-[#E70051]/10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Delivering Excellence <span className="text-[#E70051]">Every Day</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              These metrics represent our unwavering commitment to operational excellence 
              and our dedication to driving measurable results for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyDataInsights;