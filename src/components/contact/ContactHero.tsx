import React, { useEffect, useState } from 'react';
import { MessageCircle, Users, ArrowRight } from 'lucide-react';
import CalendlyButton from '../CalendlyButton';

const ContactHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#E70051]/10 to-purple-50 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#E70051]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Let's Connect: <span className="text-[#E70051]">Partner With Us</span> or{' '}
              <span className="text-[#E70051]">Join Our Team</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              We're ready to answer your questions and help you achieve your goals. 
              Whether you're looking for a BPO partner or an exciting career opportunity, 
              we're here to help.
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 max-w-sm">
                <MessageCircle className="w-12 h-12 text-[#E70051] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Client Inquiries
                </h3>
                <p className="text-gray-600 mb-4">
                  Ready to scale your business with our BPO services?
                </p>
                <CalendlyButton
                  text="Get Started"
                  variant="desktop"
                  trackingLabel="Contact Hero - Client Inquiries"
                  className="px-6 py-2 font-medium mx-auto text-sm"
                />
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 max-w-sm">
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Career Opportunities
                </h3>
                <p className="text-gray-600 mb-4">
                  Join our team and build a rewarding career with us.
                </p>
                <a 
                  href="https://www.facebook.com/profile.php?id=61574130661216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 mx-auto"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;