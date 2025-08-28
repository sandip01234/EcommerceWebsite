import React from 'react';
import testimonials from './testimonials.json'; // Adjust path as needed

const Testimonials = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-center text-gray-800">
          What Our Customers Say
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">
          Hear directly from satisfied customers about their experience with Appliance Avenue and our products.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col items-center hover:shadow-lg transition duration-300"
            >




              {/* for photo replacement */}
              {/* <img
  src={`/assets/testimonials/${testimonial.image}`}
  alt={testimonial.name}
  className="w-20 h-20 rounded-full object-cover mb-4"
/>
 */}




              {/* Circular background around SVG icon */}
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-blue-600"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>




              <p className="text-gray-700 text-sm sm:text-base italic mb-4">"{testimonial.quote}"</p>
              <p className="text-lg font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm sm:text-base text-blue-600 hover:underline cursor-pointer text-center">
          Read All Stories
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
