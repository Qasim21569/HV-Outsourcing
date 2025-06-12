import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Award, TrendingUp, Users } from 'lucide-react';
import { gsap } from 'gsap';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const svgFrameRef = useRef<HTMLDivElement>(null);
  
  const metrics = [
    { value: "96%", label: "Quality Score", color: "text-[#E70051]" },
    { value: "40K+", label: "Daily Calls", color: "text-[#FF6B9D]" },
    { value: "<5%", label: "Attrition", color: "text-[#B8003F]" },
    { value: "180+", label: "Active Agents", color: "text-[#E70051]" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Rotating metrics
    const metricInterval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);

    // SVG frame animation
    if (svgFrameRef.current) {
      gsap.fromTo(svgFrameRef.current, 
        { 
          scale: 0.8, 
          opacity: 0,
          rotateY: -15 
        },
        { 
          scale: 1, 
          opacity: 1,
          rotateY: 0,
          duration: 1.2,
          delay: 0.8,
          ease: "back.out(1.7)"
        }
      );
    }

    return () => clearInterval(metricInterval);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E70051]/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FF6B9D]/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          
          
          {/* Left Content - Apple Style */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Badge
            <div className="inline-flex items-center space-x-2 bg-[#E70051]/10 px-4 py-2 rounded-full">
              <Award className="w-4 h-4 text-[#E70051]" />
              <span className="text-sm font-medium text-[#B8003F]">Trusted by Fortune 500</span>
            </div> */}

            {/* Main Headlines - Apple Typography */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-none tracking-tight">
                Your{' '}
                <span className="gradient-text text-transparent font-extrabold drop-shadow-sm">
                  Performance-Driven
                </span>
              </h1>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                Outsourcing Partner
              </h2>
              <p className="text-2xl lg:text-3xl font-light text-gray-600 leading-relaxed">
                for Unmatched Growth
              </p>
            </div>

            {/* Description */}
            <p className={`text-xl text-gray-600 leading-relaxed max-w-lg transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              We're a premier, enterprise-grade BPO empowering startups, SMEs, and Fortune 500 companies 
              with <span className="font-semibold text-gray-900">unparalleled customer service</span> and 
              sales solutions.
            </p>

            {/* Rotating Metric */}
            <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="flex items-center space-x-4">
                <div className={`text-4xl font-bold ${metrics[currentMetric].color} transition-all duration-500`}>
                  {metrics[currentMetric].value}
                </div>
                <div className="text-gray-600">
                  <div className="font-medium">{metrics[currentMetric].label}</div>
                  <div className="text-sm text-gray-500">Live Performance</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Apple Style */}
            <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-[#E70051] to-[#B8003F] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-[#B8003F] hover:to-[#E70051] transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <button className="group flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg text-[#E70051] bg-[#E70051]/10 hover:bg-[#E70051]/20 transition-all duration-200 hover:-translate-y-0.5">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8 pt-8 transform transition-all duration-1000 delay-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">180+</div>
                <div className="text-sm text-gray-600">Active Agents</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">40K+</div>
                <div className="text-sm text-gray-600">Daily Calls</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">96%</div>
                <div className="text-sm text-gray-600">Quality Score</div>
              </div>
            </div>
          </div>

          {/* Right Side - Call Center 3D Visualization */}
          <div className={`relative transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Modern Frame Container */}
            <div 
              ref={svgFrameRef}
              className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 hover:shadow-3xl transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                transform: 'perspective(1000px) rotateY(-5deg)',
              }}
            >
              
              {/* Frame Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">Live Call Center</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500">24/7 Active</span>
                </div>
              </div>

                             {/* SVG Container */}
               <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-r from-[#E70051]/5 via-[#FF6B9D]/5 to-[#E70051]/5"></div>
                
                {/* SVG Call Center */}
                <div className="relative z-10 flex items-center justify-center min-h-[400px]">
                  <img 
                    src="/callcentre.svg" 
                    alt="Call Center Visualization" 
                    className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-500"
                    style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))' }}
                  />
                </div>
                
                                 {/* Floating Activity Indicators */}
                 <div className="absolute top-4 right-4 space-y-2">
                   <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
                     <div className="flex items-center space-x-2">
                       <div className="w-2 h-2 bg-[#E70051] rounded-full animate-pulse"></div>
                       <span>Active Calls: 127</span>
                     </div>
                   </div>
                   <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
                     <div className="flex items-center space-x-2">
                       <div className="w-2 h-2 bg-[#FF6B9D] rounded-full animate-pulse"></div>
                       <span>Queue: 23</span>
                     </div>
                   </div>
                   <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
                     <div className="flex items-center space-x-2">
                       <div className="w-2 h-2 bg-[#B8003F] rounded-full animate-pulse"></div>
                       <span>Avg Wait: 12s</span>
                     </div>
                   </div>
                 </div>
              </div>

                             {/* Performance Stats */}
               <div className="grid grid-cols-3 gap-4 mt-6">
                 <div className="text-center p-3 bg-[#E70051]/10 rounded-xl">
                   <div className="text-lg font-bold text-[#E70051]">98.2%</div>
                   <div className="text-xs text-gray-600">Uptime</div>
                 </div>
                 <div className="text-center p-3 bg-[#FF6B9D]/10 rounded-xl">
                   <div className="text-lg font-bold text-[#FF6B9D]">1.8s</div>
                   <div className="text-xs text-gray-600">Avg Response</div>
                 </div>
                 <div className="text-center p-3 bg-[#B8003F]/10 rounded-xl">
                   <div className="text-lg font-bold text-[#B8003F]">89%</div>
                   <div className="text-xs text-gray-600">CSAT Score</div>
                 </div>
               </div>
            </div>

                         {/* Floating Elements */}
             <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#E70051] to-[#FF6B9D] rounded-full opacity-20 animate-pulse"></div>
             <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#B8003F] to-[#E70051] rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;