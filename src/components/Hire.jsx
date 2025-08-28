import React from 'react';
import professionals from './professionals.json'; // Adjust path as needed

const Hire = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center">
          Hire Experienced Electricians & Plumbers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((pro, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >



{/* later for photo: make a folder professionals in public/assets and use json file hire.json */}
              {/* <img
  src={`/assets/professionals/${pro.image}`}
  alt={pro.name}
  className="w-20 h-20 rounded-full object-cover mb-4"
  />
              {/* Circular Icon Placeholder */}
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-blue-600"
                >
                  <path d="M22.7 19.3l-4.4-4.4c.4-.8.7-1.7.7-2.6 0-3-2.4-5.3-5.3-5.3-.9 0-1.8.3-2.6.7L4.7 1.3C4.3.9 3.7.9 3.3 1.3L1.3 3.3c-.4.4-.4 1 0 1.4l5.1 5.1c-.4.8-.7 1.7-.7 2.6 0 3 2.4 5.3 5.3 5.3.9 0 1.8-.3 2.6-.7l4.4 4.4c.4.4 1 .4 1.4 0l2-2c.4-.3.4-.9 0-1.3zM9 14c-1.7 0-3-1.3-3-3 0-.4.1-.8.2-1.2L11.2 15c-.4.1-.8.2-1.2.2z" />
                </svg>
              </div>


              

              {/* Professional Info */}
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">{pro.name}</h3>
              <p className="text-gray-700 text-sm sm:text-base mb-4">{pro.experience}</p>
              <p className="text-gray-500 font-medium">{pro.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hire;
