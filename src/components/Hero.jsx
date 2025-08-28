import React from 'react';
import { Link } from 'react-router-dom';
import heroimg from '/public/assets/Iron.png'; // Ensure the path is correct based on your project structure

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#DEE1E6] to-[#9095A1] py-12 sm:py-16 lg:py-24 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] h-full flex flex-col-reverse sm:flex-row items-center justify-between gap-8">
        
        {/* Text Content */}
        <div className="w-full sm:w-1/2 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight sm:leading-[64px] md:leading-[72px] max-w-[640px] mx-auto sm:mx-0">
            Power Your Home: Shop Smart, Spark Bright!
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 max-w-[520px] leading-relaxed mx-auto sm:mx-0">
            Discover a wide range of high-quality electrical appliances for every need, combining innovation with reliability.
          </p>
          <Link
            to="/shop"
            className="inline-block px-6 py-2.5 text-base font-medium text-white bg-[#3C83F6] rounded-md hover:bg-[#0B62EE] active:bg-[#094EBE] transition-colors duration-200"
            >
            Shop Now
          </Link>
        </div>

        {/* Image */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            src={heroimg}
            alt="Hero Image"
            className="w-full h-auto object-contain max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[695px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
