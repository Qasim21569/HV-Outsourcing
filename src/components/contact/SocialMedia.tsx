import React from 'react';
import { Linkedin, Facebook, Instagram, ExternalLink } from 'lucide-react';

const SocialMedia: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#',
      description: 'Connect with us professionally',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: '#',
      description: 'Follow our company updates',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      description: 'See our workplace culture',
      color: 'bg-pink-500 hover:bg-pink-600'
    }
  ];

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Us</h3>
      <p className="text-gray-600 mb-6">
        Stay updated on our latest news and job postings!
      </p>

      <div className="space-y-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
          >
            <div className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center transition-colors duration-200`}>
              <social.icon className="w-6 h-6 text-white" />
            </div>
            
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#E70051] transition-colors">
                {social.name}
              </h4>
              <p className="text-sm text-gray-600">{social.description}</p>
            </div>
            
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#E70051] transition-colors" />
          </a>
        ))}
      </div>

      {/* Additional contact note */}
      <div className="mt-8 p-6 bg-gradient-to-r from-[#E70051]/10 to-purple-100 rounded-xl">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          Prefer Direct Contact?
        </h4>
        <p className="text-gray-700">
          Use our contact form above or email us directly at{' '}
          <a 
            href="mailto:contact@hvoutsourcing.ph" 
            className="text-[#E70051] font-medium hover:underline"
          >
            contact@hvoutsourcing.ph
          </a>
          . We typically respond within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default SocialMedia;