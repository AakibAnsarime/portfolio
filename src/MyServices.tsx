import React from 'react';
import { useState } from 'react';
import data from './data.json';

const Services = () => {
  const [serviceData] = useState(data.services);

  return (
    <div id='services' className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">My Awesome</h1>
          <h2 className="text-4xl font-bold text-orange-500">Services</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Dynamic web developer and digital marketer with expertise in modern web technologies.
          </p>
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceData.services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Download CV Button */}
        <div className="flex justify-center mt-8">
          <a
            href={serviceData.cvFile}
            download
            className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;