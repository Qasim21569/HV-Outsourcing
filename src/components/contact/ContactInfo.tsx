import React from 'react';
import { MapPin, Mail, Clock, Phone } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-8">
          We're here to help you succeed. Reach out to us through any of the channels below, 
          and we'll get back to you promptly.
        </p>
      </div>

      <div className="space-y-6">
        {/* Address */}
        <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-[#E70051] rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Our Office</h3>
            <p className="text-gray-600">
              6789 Ayala Avenue, Floor 26<br />
              Makati City, Philippines
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
            <p className="text-gray-600">
              <a 
                href="mailto:contact@hvoutsourcing.ph" 
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                contact@hvoutsourcing.ph
              </a>
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
            <p className="text-gray-600">
              Available via contact form or email<br />
              <span className="text-sm text-gray-500">We'll provide direct contact details upon inquiry</span>
            </p>
          </div>
        </div>

        {/* Office Hours */}
        <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Availability</h3>
            <p className="text-gray-600">
              24/7 Client Support<br />
              <span className="text-sm text-gray-500">General inquiries: Business hours (PHT)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;