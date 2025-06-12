import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/HVoutsourcingfavicon.webp"
                alt="HV Outsourcing Logo"
                className="h-10 w-auto object-contain scale-[2.35]"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Premier, enterprise-grade BPO empowering U.S.-based businesses with unparalleled 
              customer service and sales solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#E70051] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E70051] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E70051] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">
                Careers
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#E70051] mt-0.5" />
                <span className="text-gray-300 text-sm">
                  6789 Ayala Avenue, Floor 26<br />
                  Makati City, Philippines
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#E70051]" />
                <span className="text-gray-300 text-sm">contact@hvoutsourcing.ph</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 HV Outsourcing OPC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;