import React, { useEffect, useRef, useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Trophy, 
  Coffee,
  Target,
  Heart
} from 'lucide-react';

const EmployeeCommitment: React.FC = () => {
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

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Commitment to Employees: <span className="text-[#E70051]">Growth, Innovation, Achievement</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            At HV Outsourcing, we firmly believe that our employees are the heart and soul of our success. 
            We strive to provide a supportive and empowering environment that encourages growth, innovation, and achievement.
          </p>
        </div>

        {/* Main commitment statement */}
        <div className={`bg-white rounded-2xl shadow-lg p-8 mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-6">
            <Heart className="w-12 h-12 text-[#E70051] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">
              Our People-First Philosophy
            </h3>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Recognizing the value each individual brings, we are dedicated to nurturing talent, 
            offering continuous learning opportunities, and celebrating the accomplishments of our team members. 
            We don't just employ people—we invest in their futures.
          </p>
        </div>

        {/* Three pillars of commitment */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Skills Development */}
          <div className={`bg-white rounded-xl shadow-lg p-8 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Skills Development</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <BookOpen className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">
                    <strong>Daily English Fluency Coaching:</strong> Each group of 10 agents works 
                    directly with a dedicated English teacher for continuous improvement.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">
                    <strong>Weekly Upskilling Sessions:</strong> Regular training programs to keep 
                    skills sharp and performance high across all departments.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Trophy className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">
                    <strong>Monthly Training Programs:</strong> Comprehensive training modules 
                    designed to advance careers and build expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Work Environment */}
          <div className={`bg-white rounded-xl shadow-lg p-8 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Fun Work Environment</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>We retain top talent because we make HV a genuinely fun place to work.</strong>
              </p>
              
              <ul className="space-y-2 text-gray-700">
                <li>• Regular games and company-wide challenges</li>
                <li>• Team competitions with exciting prizes</li>
                <li>• Break areas with beanbags and video games</li>
                <li>• Table tennis and full-size basketball hoop</li>
                <li>• Free Food Friday and themed events</li>
                <li>• Weekend team-building activities</li>
              </ul>
              
              <p className="text-gray-700 italic">
                We celebrate wins often and make coming to work something people enjoy.
              </p>
            </div>
          </div>

          {/* Career Growth */}
          <div className={`bg-white rounded-xl shadow-lg p-8 transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Career Advancement</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>We pay well, we promote from within, and most importantly—we make 
                coming to work something people enjoy.</strong>
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Why Our Team Stays:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Competitive compensation packages</li>
                  <li>• Clear promotion pathways</li>
                  <li>• Merit-based advancement</li>
                  <li>• Leadership development programs</li>
                  <li>• Recognition and rewards</li>
                </ul>
              </div>
              
              <p className="text-gray-700 font-medium">
                That's why our team stays committed, energized, and ready to deliver.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom summary */}
        <div className={`text-center transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-[#E70051]/10 to-purple-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The HV Difference
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We don't just offer jobs—we offer careers. We don't just manage employees—we develop leaders. 
              We don't just run a business—we build a community where everyone can thrive, grow, and achieve 
              their full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeCommitment;