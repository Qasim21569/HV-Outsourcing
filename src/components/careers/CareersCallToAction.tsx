import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Heart,
  Star
} from 'lucide-react';

const CareersCallToAction: React.FC = () => {
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

  const values = [
    {
      icon: Users,
      title: "Teamwork Drives Success",
      description: "Become part of our team, where working together means growing together",
      color: "bg-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Join us and build a fulfilling career where your contributions matter",
      color: "bg-green-500"
    },
    {
      icon: Heart,
      title: "Meaningful Impact",
      description: "Make a meaningful impact on businesses while advancing your own career",
      color: "bg-red-500"
    },
    {
      icon: Star,
      title: "Excellence & Integrity",
      description: "Join a dynamic, innovative team committed to integrity and strategic thinking",
      color: "bg-purple-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-[#E70051]/10 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Be Part of <span className="text-[#E70051]">Something Great</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            HV Outsourcing seeks passionate individuals eager to advance their careers while making 
            a meaningful impact on businesses. Join a dynamic, innovative team committed to integrity, 
            strategic thinking, and exceptional service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#E70051] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B8003F] transform hover:scale-105 transition-all duration-200 flex items-center justify-center group"
            >
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/contact"
              className="border-2 border-[#E70051] text-[#E70051] px-8 py-4 rounded-lg font-semibold hover:bg-[#E70051] hover:text-white transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-100 p-8 transform hover:scale-105 transition-all duration-300 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${(index + 2) * 100}ms` 
              }}
            >
              <div className={`w-16 h-16 ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Final Message */}
        <div className={`bg-white rounded-2xl shadow-lg p-8 text-center transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Your Career Growth and Success Are Our Priority
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
            At HV Outsourcing, we don't just offer jobs—we offer careers. We don't just manage 
            employees—we develop leaders. Join us in building something extraordinary while 
            advancing your own professional journey.
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="w-5 h-5 text-[#E70051] mr-2" />
              <span>180+ Team Members</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
              <span>&lt;5% Attrition Rate</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-5 h-5 text-red-500 mr-2" />
              <span>Employee-First Culture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersCallToAction;