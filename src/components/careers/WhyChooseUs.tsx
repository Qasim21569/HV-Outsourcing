import React, { useEffect, useRef, useState } from 'react';
import { 
  Heart, 
  Coffee, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Gamepad2,
  Award
} from 'lucide-react';

const WhyChooseUs: React.FC = () => {
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

  const benefits = [
    {
      icon: Heart,
      title: "Healthy Work-Life Balance",
      description: "We prioritize your well-being with flexible schedules and supportive management",
      color: "bg-red-500"
    },
    {
      icon: Coffee,
      title: "Free Lunch and Snacks Daily",
      description: "Enjoy catered meals and snacks throughout the day, keeping you energized",
      color: "bg-orange-500"
    },
    {
      icon: DollarSign,
      title: "Competitive Salary and Benefits",
      description: "Fair compensation with comprehensive benefits package and performance bonuses",
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "Supportive and Friendly Team",
      description: "Work with caring colleagues and mentors who help you succeed",
      color: "bg-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Opportunities for Career Growth",
      description: "Clear promotion paths and skill development programs for advancement",
      color: "bg-purple-500"
    },
    {
      icon: Gamepad2,
      title: "Fun and Collaborative Environment",
      description: "Enjoy video games, beanbags, table tennis, and a full-size basketball hoop",
      color: "bg-pink-500"
    },
    {
      icon: Award,
      title: "Recognition and Rewards for Performance",
      description: "Regular recognition programs and rewards for outstanding performance",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Benefits of Choosing <span className="text-[#E70051]">HV Outsourcing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've created a workplace where talent thrives, careers grow, and employees 
            genuinely enjoy coming to work every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl border-2 border-gray-100 hover:border-[#E70051]/30 p-6 transform hover:scale-105 transition-all duration-300 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms` 
              }}
            >
              <div className={`w-12 h-12 ${benefit.color} rounded-lg flex items-center justify-center mb-4`}>
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional highlight */}
        <div className={`mt-16 bg-gradient-to-r from-[#E70051]/10 to-purple-100 rounded-2xl p-8 text-center transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Our Employees Stay
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            With an attrition rate of less than 5%, our employees choose to stay because we've built 
            more than just a workplace—we've created a community where everyone feels valued, 
            supported, and excited about their future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;