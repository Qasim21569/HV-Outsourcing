import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

const InteractiveMap: React.FC = () => {
  const address = "6789 Ayala Avenue, Floor 26, Makati City, Philippines";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Us</h3>
        <p className="text-gray-600">
          Located in the heart of Makati's business district
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Map placeholder with interactive elements */}
        <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-[#E70051] mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">HV Outsourcing Office</h4>
            <p className="text-gray-600 mb-4 max-w-sm">
              6789 Ayala Avenue, Floor 26<br />
              Makati City, Philippines
            </p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#E70051] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B8003F] transform hover:scale-105 transition-all duration-200"
            >
              Open in Google Maps
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Location details */}
        <div className="p-6 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h5 className="font-semibold text-gray-900 mb-1">Building</h5>
              <p className="text-sm text-gray-600">26th Floor, Premium Office Space</p>
            </div>
            
            <div className="text-center">
              <h5 className="font-semibold text-gray-900 mb-1">District</h5>
              <p className="text-sm text-gray-600">Makati Central Business District</p>
            </div>
            
            <div className="text-center">
              <h5 className="font-semibold text-gray-900 mb-1">Access</h5>
              <p className="text-sm text-gray-600">Near MRT stations and major highways</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;