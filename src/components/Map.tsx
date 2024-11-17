import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Map = () => {
  return (
    <div className="bg-gray-50 py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Contact Us</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold">Visit Us</h3>
                <div className="text-gray-600 text-center">
                  <p>1142 Florida Street, Suite 5</p>
                  <p>San Francisco, CA 94110</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold">Call Us</h3>
                <a href="tel:+14156787296" className="text-blue-600 hover:text-blue-700">
                  +1 (415) 678-7296
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold">Email Us</h3>
                <a href="mailto:info@negusgroupinc.com" className="text-blue-600 hover:text-blue-700">
                  info@negusgroupinc.com
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold">Website</h3>
                <a href="https://www.negusgroupinc.com" className="text-blue-600 hover:text-blue-700">
                  negusgroupinc.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;