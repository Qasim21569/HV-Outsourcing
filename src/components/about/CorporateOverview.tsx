import React, { useEffect, useRef, useState } from 'react';
import { Building, MapPin, Calendar, TrendingUp, Award, Target, Users2, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CorporateOverview: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const timeline = [
    { year: "2019", title: "Founded", desc: "Started with 30 remote agents", color: "bg-[#E70051]" },
    { year: "2020", title: "Growth", desc: "Expanded operations & services", color: "bg-[#FF6B9D]" },
    { year: "2022", title: "Scale", desc: "100+ agents serving Fortune 500", color: "bg-[#B8003F]" },
    { year: "2024", title: "Flagship", desc: "Opened Makati call center", color: "bg-[#E70051]" }
  ];

  const successMetrics = [
    { from: "$0", to: "$400K", label: "B2B Monthly Sales", duration: 2000 },
    { from: "$0", to: "$100K", label: "B2C Monthly Revenue", duration: 2200 },
    { from: "0", to: "180", label: "Active Agents", duration: 1800 },
    { from: "0", to: "96", label: "Quality Score %", duration: 2400 }
  ];

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

    // Timeline auto-advance
    const timelineInterval = setInterval(() => {
      setActiveTimeline((prev) => (prev + 1) % timeline.length);
    }, 3000);

    // GSAP Animations
    if (timelineRef.current) {
      gsap.fromTo(timelineRef.current.children, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      observer.disconnect();
      clearInterval(timelineInterval);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
        
        {/* Floating background elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#E70051]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#FF6B9D]/5 rounded-full blur-3xl" />
        
        {/* Subtle pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #E70051 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center space-x-2 bg-[#E70051]/10 px-4 py-2 rounded-full mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Building className="w-4 h-4 text-[#E70051]" />
            <span className="text-sm font-medium text-[#B8003F]">Corporate Overview</span>
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="text-gray-900">Our Journey:</span><br />
            <span className="bg-gradient-to-r from-[#E70051] to-[#FF6B9D] bg-clip-text text-transparent">
              From Vision to Reality
            </span>
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Discover how we evolved from a necessity-driven startup to an enterprise-grade BPO 
            serving Fortune 500 companies worldwide.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className={`mb-20 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Evolution Timeline</h3>
          
          <div ref={timelineRef} className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#E70051] via-[#FF6B9D] to-[#B8003F] rounded-full transform -translate-y-1/2" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-500 cursor-pointer ${
                    activeTimeline === index 
                      ? 'border-[#E70051] scale-105 shadow-xl' 
                      : 'border-gray-100 hover:border-[#FF6B9D]/50 hover:scale-102'
                  }`}
                  onClick={() => setActiveTimeline(index)}
                >
                  {/* Timeline dot */}
                  <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${item.color} transition-all duration-500 ${
                    activeTimeline === index ? 'scale-150' : 'scale-100'
                  }`} />
                  
                  <div className="text-center mt-4">
                    <div className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                      activeTimeline === index ? 'text-[#E70051]' : 'text-gray-900'
                    }`}>
                      {item.year}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          
          {/* Left: Company Story */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-800 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            
            {/* Premier BPO Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#E70051]/20 p-8 transition-all duration-500">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#E70051] to-[#B8003F] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#E70051] transition-colors duration-300">
                    Premier Enterprise-Grade BPO
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#E70051] to-[#FF6B9D] rounded-full" />
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Horvath & Vaeth Outsourcing OPC is a premier, enterprise-grade BPO headquartered 
                in Makati, Philippines, with <strong className="text-[#E70051]">180 fully operational seats</strong> (expandable to 268). 
                We serve U.S.-based startups, SMEs, and Fortune 500 companies across various 
                sectors using cutting-edge technology.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['Salesforce', 'Five9', 'Zoominfo', 'HubSpot'].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-[#E70051]/10 text-[#B8003F] text-sm font-medium rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Foundation Story Card */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg hover:shadow-2xl border border-blue-100 hover:border-blue-200 p-8 transition-all duration-500">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Founded on Necessity
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                Founded in <strong className="text-blue-600">2019</strong>, we began operations remotely with just 30 agents 
                supporting the co-founders' U.S. businesses. In <strong className="text-blue-600">December 2024</strong>, our vision 
                became fully realized when we opened our flagship physical call center in Makati City.
              </p>
            </div>
          </div>

          {/* Right: Success Metrics */}
          <div className={`transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Our Impact by the Numbers
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Building, value: "180+", label: "Operational Seats", color: "text-[#E70051]", bg: "bg-[#E70051]/10" },
                  { icon: Calendar, value: "2019", label: "Founded", color: "text-[#FF6B9D]", bg: "bg-[#FF6B9D]/10" },
                  { icon: MapPin, value: "Makati", label: "Philippines HQ", color: "text-[#B8003F]", bg: "bg-[#B8003F]/10" },
                  { icon: TrendingUp, value: "$50M+", label: "Client Revenue", color: "text-[#E70051]", bg: "bg-[#E70051]/10" }
                ].map((stat, index) => (
                  <div key={index} className="group bg-gray-50 hover:bg-white rounded-xl p-6 text-center border border-gray-100 hover:border-[#E70051]/20 hover:shadow-lg transition-all duration-300">
                    <div className={`w-12 h-12 ${stat.bg} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className={`text-2xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Success Story Showcase */}
        <div className={`bg-gradient-to-br from-[#E70051]/5 via-white to-[#FF6B9D]/5 rounded-3xl p-8 md:p-12 shadow-2xl border border-[#E70051]/10 transform transition-all duration-1000 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 bg-[#E70051]/10 px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4 text-[#E70051]" />
              <span className="text-sm font-medium text-[#B8003F]">Breakthrough Success</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Zero to <span className="text-[#E70051]">$500K+</span> Monthly Revenue
            </h3>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              How we transformed a $50M/year herbal supplement brand's sales performance 
              in just a few months through strategic BPO partnership.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {successMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-[#E70051] mb-2">
                  {metric.to}
                  {metric.label.includes('%') ? '%' : metric.label.includes('$') ? '' : '+'}
                </div>
                <div className="text-sm text-gray-600 font-medium mb-2">{metric.label}</div>
                <div className="text-xs text-gray-500">Growth Achievement</div>
              </div>
            ))}
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50">
            <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed text-lg">
              <strong className="text-[#E70051]">H&V Outsourcing was built out of necessity</strong> to create a highly capable, 
              performance-obsessed customer service and sales team. Our BPO team grew B2B sales from 
              <strong className="text-[#E70051]"> $0 to $400K/month</strong> and B2C from 
              <strong className="text-[#E70051]"> nothing to $100K/month</strong> by uncovering untapped 
              senior markets and implementing strategic sales processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateOverview;