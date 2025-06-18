import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart,
  Coffee,
  Gamepad2,
  Users,
  BookOpen,
  Star,
  Gift,
  Smile,
  Home,
  Shield,
  Plus
} from 'lucide-react';

const EmployeeCommitment: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mobile fallback - show content immediately on mobile
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Reduced threshold for better mobile visibility
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Coffee,
      title: 'Free Food Friday',
      description: 'Special catered meals and premium snacks every Friday to celebrate the week',
      category: 'Wellness'
    },
    {
      icon: Heart,
      title: 'Healthy Work-Life Balance',
      description: 'Flexible schedules and mental health support programs',
      category: 'Wellness'
    },
    {
      icon: Gamepad2,
      title: 'Creative Break Areas',
      description: 'Video games, basketball hoop, and recreational zones',
      category: 'Recreation'
    },
    {
      icon: BookOpen,
      title: 'Professional Development',
      description: 'Continuous learning opportunities and skill advancement',
      category: 'Growth'
    },
    {
      icon: Star,
      title: 'Performance Bonuses',
      description: 'Regular rewards for exceptional performance and achievements',
      category: 'Compensation'
    },
    {
      icon: Shield,
      title: 'Comprehensive Benefits',
      description: 'Health insurance, retirement plans, and wellness programs',
      category: 'Benefits'
    },
    {
      icon: Users,
      title: 'Team Building Events',
      description: 'Regular team outings, celebrations, and company events',
      category: 'Culture'
    },
    {
      icon: Home,
      title: 'Modern Work Environment',
      description: 'State-of-the-art facilities designed for comfort and productivity',
      category: 'Environment'
    }
  ];

  const cultureHighlights = [
    {
      icon: Smile,
      stat: '4.8/5',
      label: 'Employee Satisfaction',
      description: 'Based on internal surveys'
    },
    {
      icon: Users,
      stat: '<5%',
      label: 'Attrition Rate',
      description: 'Industry-leading retention'
    },
    {
      icon: Star,
      stat: '95%',
      label: 'Would Recommend',
      description: 'To friends and family'
    },
    {
      icon: Gift,
      stat: '50+',
      label: 'Benefits & Perks',
      description: 'Comprehensive package'
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-pink-50 to-red-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 sm:w-40 sm:h-40 bg-[#E70051]/10 rounded-full blur-2xl animate-subtle-float" />
        <div className="absolute bottom-10 right-10 w-28 h-28 sm:w-56 sm:h-56 bg-[#FF6B9D]/10 rounded-full blur-2xl animate-subtle-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Employee Commitment & Career Opportunities
          </h2>
          <p className={`text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            At HV Outsourcing, we believe that <span className="text-[#E70051] font-semibold">happy employees drive exceptional results</span>. 
            Our employee-centric culture makes HV a place where people love to work and grow.
          </p>
        </div>

        <div className={`grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {cultureHighlights.map((highlight, index) => (
            <div 
              key={index}
              className="text-center p-3 sm:p-4 lg:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#E70051] to-[#FF6B9D] rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{highlight.stat}</div>
              <div className="text-sm sm:text-base lg:text-lg font-semibold text-[#E70051] mb-1">{highlight.label}</div>
              <div className="text-xs sm:text-sm text-gray-600">{highlight.description}</div>
            </div>
          ))}
        </div>

        <div className={`mb-12 sm:mb-16 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Benefits of Choosing HV Outsourcing as Your Career Home
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                  <span className="px-2 py-1 bg-[#E70051]/10 text-[#E70051] text-xs font-medium rounded-full">
                    {benefit.category}
                  </span>
                </div>
                
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#E70051] to-[#FF6B9D] rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#E70051] transition-colors duration-300">
                  {benefit.title}
                </h4>
                
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="absolute inset-0 bg-gradient-to-br from-[#E70051]/5 to-[#FF6B9D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />
              </div>
            ))}
          </div>
        </div>

        <div className={`mb-12 sm:mb-16 transform transition-all duration-1000 delay-900 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-[#E70051] to-[#FF6B9D] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 rounded-2xl sm:rounded-3xl" />
            <div className="relative z-10 text-center">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">HV is COOL! 😎</h3>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-95">
                We've built a workplace where innovation meets fun, where professional growth comes with personal joy.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="text-center">
                  <Coffee className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 animate-bounce" />
                  <div className="text-sm sm:text-base font-semibold">Free Food Friday</div>
                </div>
                <div className="text-center">
                  <Gamepad2 className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 animate-pulse" />
                  <div className="text-sm sm:text-base font-semibold">Gaming Zones</div>
                </div>
                <div className="text-center">
                  <Users className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 animate-bounce" style={{ animationDelay: '0.5s' }} />
                  <div className="text-sm sm:text-base font-semibold">Team Events</div>
                </div>
                <div className="text-center">
                  <Star className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="text-sm sm:text-base font-semibold">Recognition</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`text-center transform transition-all duration-1000 delay-1100 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Ready to Join Our Amazing Team?</h3>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
              Be part of a company that values your growth, celebrates your success, and makes work feel like home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="https://www.facebook.com/profile.php?id=61574130661216"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#E70051] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#B8003F] transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 btn-liquid-fill shadow-lg"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
                Join Our Team
              </a>
              <Link 
                to="/careers"
                className="inline-block border-2 border-[#E70051] text-[#E70051] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#E70051] hover:text-white transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                View Open Positions
              </Link>
            </div>
            
            <div className="mt-4 sm:mt-6 flex justify-center items-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Coffee className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Free Food Friday</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Full Benefits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeCommitment; 