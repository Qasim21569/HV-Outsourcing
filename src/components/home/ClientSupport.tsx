import React, { useEffect, useRef, useState } from 'react';
import { 
  Clock,
  UserCheck,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  BarChart3,
  Zap,
  Users,
  TrendingUp,
  Shield,
  CheckCircle
} from 'lucide-react';

const ClientSupport: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
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

  const supportFeatures = [
    {
      id: 'support-24-7',
      icon: Clock,
      title: '24/7 Client Support',
      description: 'Round-the-clock availability for all your operational needs',
      details: [
        'Dedicated support hotline with <2 minute response time',
        'Real-time chat support integrated into our dashboard',
        'Emergency escalation protocols for critical issues',
        'Multi-timezone coverage with native English speakers',
        'Proactive monitoring and issue prevention'
      ]
    },
    {
      id: 'success-manager',
      icon: UserCheck,
      title: 'Dedicated Success Manager',
      description: 'Your personal point of contact for strategic guidance',
      details: [
        'Assigned within 24 hours of contract signing',
        'Weekly performance reviews and optimization calls',
        'Strategic planning and capacity forecasting',
        'Direct line for escalations and special requests',
        'Industry expertise and best practice recommendations'
      ]
    },
    {
      id: 'feedback-system',
      icon: MessageCircle,
      title: 'Simple, Structured Feedback',
      description: 'Streamlined communication and feedback loops',
      details: [
        'Daily performance dashboards with real-time metrics',
        'Weekly detailed reports with actionable insights',
        'Monthly strategic review meetings',
        'Instant feedback system for quality improvements',
        'Custom reporting based on your specific KPIs'
      ]
    }
  ];

  const scalabilityMetrics = [
    {
      icon: Zap,
      metric: '2 weeks',
      label: 'Scaling Timeline',
      description: 'From decision to 50+ agents deployed'
    },
    {
      icon: Users,
      metric: '500+',
      label: 'Agent Capacity',
      description: 'Maximum scalable workforce'
    },
    {
      icon: TrendingUp,
      metric: '98%',
      label: 'Scaling Success Rate',
      description: 'Projects delivered on time'
    },
    {
      icon: BarChart3,
      metric: '24hrs',
      label: 'Performance Analysis',
      description: 'Real-time scaling optimization'
    }
  ];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-subtle-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-subtle-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Client Support & Flexibility
          </h2>
          <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Experience <span className="text-[#E70051] font-semibold">unparalleled support</span> and 
            <span className="text-blue-600 font-semibold"> lightning-fast scalability</span> that grows with your business needs.
          </p>
        </div>

        {/* Support Features with Accordions */}
        <div className={`mb-20 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Comprehensive Client Support</h3>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {supportFeatures.map((feature, index) => (
              <div 
                key={feature.id}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50"
              >
                <button
                  onClick={() => toggleAccordion(feature.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E70051]/20"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#E70051] to-[#B8003F] rounded-xl flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600 mt-1">{feature.description}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openAccordion === feature.id ? (
                      <ChevronUp className="w-6 h-6 text-[#E70051]" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {/* Accordion Content */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openAccordion === feature.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <ul className="space-y-3">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flexibility & Scalability Metrics */}
        <div className={`mb-16 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Flexibility & Scalability</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scalabilityMetrics.map((metric, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.metric}</div>
                <div className="text-lg font-semibold text-blue-600 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scalability Guarantee */}
        <div className={`transform transition-all duration-1000 delay-900 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 rounded-2xl" />
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Shield className="w-16 h-16 text-blue-200 mb-6" />
                  <h3 className="text-3xl font-bold mb-4">Scalability Guarantee</h3>
                  <p className="text-xl mb-6 opacity-95">
                    We guarantee the ability to scale your operations from 1 to 50+ agents 
                    within 2 weeks, with full performance metrics from day one.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span>No setup fees for scaling</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span>Immediate performance tracking</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span>Risk-free 30-day trial period</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                    <h4 className="text-2xl font-bold mb-6">Ready to Scale?</h4>
                    <div className="space-y-4">
                      <button className="w-full bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                        Request Scaling Consultation
                      </button>
                      <button className="w-full border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
                        View Scalability Case Studies
                      </button>
                    </div>
                    <p className="text-sm opacity-80 mt-4">
                      Join 200+ companies that have successfully scaled with HV
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSupport; 