import React, { useEffect, useRef, useState } from 'react';
import { 
  Building2, 
  Code2, 
  ShoppingCart, 
  Leaf, 
  Home,
  TrendingUp,
  Shield,
  Smartphone,
  Heart,
  Wrench
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IndustryExperience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const industries = [
    {
      id: 'finance',
      icon: Building2,
      title: 'Finance & Insurance',
      description: 'Including insurance sales, bookkeeping, and credit services',
      details: [
        'Insurance sales & policy management',
        'Credit restoration & financial consulting',
        'Bookkeeping & accounting services',
        'Debt collection & payment processing'
      ],
      color: 'from-blue-600 to-blue-700',
      accentColor: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'software',
      icon: Code2,
      title: 'Software & SaaS',
      description: 'Supporting tech companies with specialized customer success',
      details: [
        'Customer onboarding & training',
        'Technical support & troubleshooting',
        'SaaS platform optimization',
        'Software implementation consulting'
      ],
      color: 'from-purple-600 to-purple-700',
      accentColor: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: 'E-commerce & Retail',
      description: 'Order processing, customer service, and sales optimization',
      details: [
        'Order management & fulfillment',
        'Customer service & returns',
        'Product recommendations',
        'Inventory management support'
      ],
      color: 'from-green-600 to-green-700',
      accentColor: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'herbal',
      icon: Leaf,
      title: 'Herbal Supplements & Wellness',
      description: 'Specialized in health product sales and customer education',
      details: [
        'Health product consultations',
        'Supplement education & guidance',
        'Wellness program support',
        'Regulatory compliance assistance'
      ],
      color: 'from-emerald-600 to-emerald-700',
      accentColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      id: 'home-services',
      icon: Home,
      title: 'Home Services',
      description: 'Supporting contractors, repair services, and home improvement',
      details: [
        'Service scheduling & dispatch',
        'Customer support & follow-up',
        'Quote generation & estimates',
        'Quality assurance calls'
      ],
      color: 'from-orange-600 to-orange-700',
      accentColor: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'healthcare',
      icon: Heart,
      title: 'Healthcare & Medical',
      description: 'HIPAA-compliant support for medical practices and telehealth',
      details: [
        'Patient scheduling & reminders',
        'Medical billing & insurance',
        'Telehealth coordination',
        'HIPAA-compliant communications'
      ],
      color: 'from-red-600 to-red-700',
      accentColor: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      id: 'tech-support',
      icon: Smartphone,
      title: 'Technology & Support',
      description: 'IT support, device troubleshooting, and technical consulting',
      details: [
        'IT helpdesk & technical support',
        'Device setup & troubleshooting',
        'Software installation & training',
        'Network & system monitoring'
      ],
      color: 'from-indigo-600 to-indigo-700',
      accentColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      id: 'automotive',
      icon: Wrench,
      title: 'Automotive & Services',
      description: 'Vehicle services, parts sales, and maintenance scheduling',
      details: [
        'Service appointment scheduling',
        'Parts ordering & inventory',
        'Warranty & insurance claims',
        'Customer service & follow-up'
      ],
      color: 'from-gray-600 to-gray-700',
      accentColor: 'text-gray-600',
      bgColor: 'bg-gray-50'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Simple, fast animation for industry cards
          if (cardsRef.current.length > 0) {
            gsap.fromTo(cardsRef.current, 
              { 
                y: 20,
                opacity: 0
              },
              {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.05,
                ease: "power2.out"
              }
            );
          }
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const IndustryCard = ({ industry, index }: { industry: any; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (cardRef.current) addToRefs(cardRef.current);
    }, []);

    return (
      <div
        ref={cardRef}
        className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 cursor-pointer overflow-hidden min-h-[260px] flex flex-col"
      >
        {/* Icon and Title */}
        <div className="flex items-center mb-4">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${industry.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <industry.icon className="w-6 h-6 text-white" />
          </div>
          <div className="ml-4">
            <h3 className={`text-xl font-bold ${industry.accentColor}`}>{industry.title}</h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed flex-grow">
          {industry.description}
        </p>

        {/* Overlay Details */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-6 flex flex-col justify-center items-start space-y-3 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <h4 className={`text-sm font-semibold ${industry.accentColor} mb-1`}>Our Services Include:</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            {industry.details.map((detail: string, idx: number) => (
              <li key={idx} className="flex items-center">
                <span className={`w-1.5 h-1.5 mr-2 rounded-full ${industry.accentColor.replace('text-', 'bg-')}`}></span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold gradient-text mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Industry Experience
          </h2>
          <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            We bring deep industry knowledge and specialized expertise to support your business across 
            <span className="text-[#E70051] font-semibold"> multiple verticals</span>.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="text-3xl font-bold text-[#E70051] mb-2">8+</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="text-3xl font-bold text-[#E70051] mb-2">15+</div>
              <div className="text-gray-600">Years Combined Experience</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="text-3xl font-bold text-[#E70051] mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryExperience;