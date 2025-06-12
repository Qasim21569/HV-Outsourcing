import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Sparkles, Globe, Users, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CorporateOverview from '../components/about/CorporateOverview';
import MissionVision from '../components/about/MissionVision';
import FlexibilityScalability from '../components/about/FlexibilityScalability';
import ClientSupport from '../components/about/ClientSupport';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    setIsLoaded(true);

    // Floating elements animation
    floatingElementsRef.current.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          y: "random(-20, 20)",
          x: "random(-15, 15)",
          rotation: "random(-10, 10)",
          duration: "random(4, 8)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.3
        });
      }
    });

    // Scroll-triggered parallax effect
    if (heroRef.current) {
      gsap.to(heroRef.current.querySelector('.hero-background'), {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        },
        y: -100,
        opacity: 0.5,
        ease: "none"
      });
    }
  }, []);

  const addToFloatingRefs = (el: HTMLDivElement | null) => {
    if (el && !floatingElementsRef.current.includes(el)) {
      floatingElementsRef.current.push(el);
    }
  };

  const quickStats = [
    { icon: Users, value: "180+", label: "Active Agents", color: "text-[#E70051]" },
    { icon: Globe, value: "50+", label: "Global Clients", color: "text-[#FF6B9D]" },
    { icon: TrendingUp, value: "$50M+", label: "Client Revenue", color: "text-[#B8003F]" },
    { icon: Sparkles, value: "96%", label: "Satisfaction", color: "text-[#E70051]" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Advanced Background */}
        <div className="hero-background absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
          
          {/* Animated mesh gradients */}
          {/* <div className="absolute inset-0 opacity-30">
            <div 
              className="absolute top-0 left-0 w-full h-full"
              style={{
                background: `
                  radial-gradient(circle at 25% 25%, #E70051 0%, transparent 50%),
                  radial-gradient(circle at 75% 75%, #FF6B9D 0%, transparent 50%),
                  radial-gradient(circle at 75% 25%, #B8003F 0%, transparent 50%),
                  radial-gradient(circle at 25% 75%, #E70051 0%, transparent 50%)
                `,
                filter: 'blur(60px)',
                animation: 'float 8s ease-in-out infinite'
              }}
            />
          </div> */}

          {/* Floating geometric elements */}
          <div 
            ref={addToFloatingRefs}
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#E70051]/20 to-[#FF6B9D]/10 rounded-full blur-xl"
          />
          <div 
            ref={addToFloatingRefs}
            className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-[#B8003F]/15 to-[#E70051]/10 rounded-full blur-lg"
          />
          <div 
            ref={addToFloatingRefs}
            className="absolute bottom-32 left-40 w-40 h-40 bg-gradient-to-br from-[#FF6B9D]/10 to-[#B8003F]/5 rounded-full blur-2xl"
          />
          <div 
            ref={addToFloatingRefs}
            className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-[#E70051]/20 to-[#FF6B9D]/15 rounded-full blur-xl"
          />

          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(231, 0, 81, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(231, 0, 81, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className={`space-y-8 transform transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {/* Badge */}
              {/* <div className={`inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-[#E70051]/20 mb-8 transform transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <Sparkles className="w-5 h-5 text-[#E70051]" />
                <span className="text-[#B8003F] font-medium">About HV Outsourcing</span>
              </div> */}

              {/* Main Headlines */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight space-y-2">
                <span className="block text-gray-900">Redefining</span>
                <span className="block gradient-text text-transparent">Outsourcing</span>
                <span className="block text-gray-900">Excellence</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
                From a remote team of 30 to a premier enterprise-grade BPO with 180+ operational seats. 
                Discover our journey of <span className="font-semibold text-gray-900">innovation, growth, and unwavering commitment</span> to client success.
              </p>

              {/* Scroll Indicator */}
              <div className="pt-6">
                <div className="flex flex-col items-start space-y-2 text-gray-600 hover:text-[#E70051] transition-colors duration-300 cursor-pointer">
                  <span className="text-sm font-medium">Discover Our Story</span>
                  <ArrowDown className="w-5 h-5 animate-bounce" />
                </div>
              </div>
            </div>

            {/* Right Stats Panel */}
            <div className={`space-y-8 transform transition-all duration-1000 delay-500 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                {quickStats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            ref={addToFloatingRefs}
            className="absolute w-2 h-2 bg-[#E70051]/40 rounded-full -z-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle 4s ease-in-out infinite ${i * 0.5}s`
            }}
          />
        ))}
      </section>

      {/* Main Content Sections */}
      <div className="relative">
        {/* Connecting gradient */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-100 to-transparent" />
        
        <CorporateOverview />
        <MissionVision />
        <FlexibilityScalability />
        <ClientSupport />
      </div>

      {/* Custom CSS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-5px) rotate(-1deg); }
          75% { transform: translateY(-15px) rotate(0.5deg); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default About;