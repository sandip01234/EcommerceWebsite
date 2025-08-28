import React, { useState } from 'react';

const Categories = () => {
  const [categories, setCategories] = useState([
    {
      name: 'MCB',
      image: 'public/assets/mcb.png',
    },
    {
      name: 'Wires',
      image: 'public/assets/wire.png',
    },
    {
      name: 'Switches',
      image: 'public/assets/switch.png',
    },
    {
      name: 'Bulb',
      image: 'public/assets/bulb.png',
    },
    {
      name: 'Panel Lights',
      image: 'public/assets/panellight.png',
    },
    {
      name: 'Multiplugs',
      image: 'public/assets/multiplug.jpg',
    },
  ]);

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          Explore Categories
        </h2>
        <p className="text-gray-600 text-base max-w-2xl mx-auto">
          Find exactly what you need with our comprehensive categories, making your shopping experience effortless.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-[1440px] mx-auto px-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg hover:scale-[1.03] transition-transform duration-300"
          >
            <div className="w-32 h-32 mb-4 flex items-center justify-center">
              <img
                src={cat.image}
                alt={cat.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <p className="text-base font-semibold text-gray-700">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
