import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, TrendingUp, Award } from 'lucide-react';

const CareersHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#E70051]/10 to-purple-50 min-h-[70vh] flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#E70051]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Join Our Growing{' '}
              <span className="text-[#E70051]">BPO and Call Center</span>{' '}
              Team
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're hiring motivated individuals ready to deliver exceptional customer service 
              and drive results in a supportive, growth-oriented environment.
            </p>

            <Link
              to="/contact"
              className="bg-[#E70051] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B8003F] transform hover:scale-105 transition-all duration-200 inline-flex items-center"
            >
              Apply Now
            </Link>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-8 h-8 text-[#E70051]" />
                </div>
                <div className="text-2xl font-bold text-gray-900">180+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">&lt;5%</div>
                <div className="text-sm text-gray-600">Attrition Rate</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-8 h-8 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Operations</div>
              </div>
            </div>
          </div>

          {/* Visual representation */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Join Our Team</h3>
                  <p className="text-gray-600">Be part of something great</p>
                </div>
                
                {/* Team representation */}
                <div className="grid grid-cols-4 gap-3 mb-6">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-12 rounded-lg flex items-center justify-center transform transition-all duration-300 ${
                        i % 4 === 0 
                          ? 'bg-[#E70051]' 
                          : i % 4 === 1 
                          ? 'bg-green-500' 
                          : i % 4 === 2
                          ? 'bg-blue-500'
                          : 'bg-purple-500'
                      }`}
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        animation: 'pulse 3s infinite'
                      }}
                    >
                      <Users className="w-5 h-5 text-white" />
                    </div>
                  ))}
                </div>
                
                <div className="text-center text-sm text-gray-600">
                  Diverse, talented professionals working together
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;