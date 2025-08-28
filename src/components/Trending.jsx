import React from 'react';
import { Link } from 'react-router-dom';
import trending from './trending.json'; // Adjust if moved to another folder

const Trending = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center">Trending Appliances</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trending.map((item) => (
            <div key={item.name} className="bg-white shadow-md p-4 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <img
                src={`/assets/trendingpic/${item.image}`}
                alt={item.name}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <h3 className="text-sm sm:text-base font-medium mb-2">{item.name}</h3>
              <p className="text-lg font-bold text-blue-500 mb-2">{item.price}</p>
              <Link to={item.link} className="text-blue-500 hover:underline">View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
