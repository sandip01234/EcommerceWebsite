import React from 'react';
import { FiTruck, FiHeadphones, FiLock } from 'react-icons/fi';
import features from './features.json'; // Adjust path as needed

const Features = () => {
  const getIcon = (iconName) => {
    const iconMap = {
      FiTruck: <FiTruck className="text-blue-500 w-8 h-8 mb-4" />,
      FiHeadphones: <FiHeadphones className="text-blue-500 w-8 h-8 mb-4" />,
      FiLock: <FiLock className="text-blue-500 w-8 h-8 mb-4" />,
    };
    return iconMap[iconName] || null;
  };

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300"
          >
            {getIcon(feature.icon)}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;