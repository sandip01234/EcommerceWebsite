const Mission = () => {
  return (
    <div className="mt-16 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden">
        {/* Text */}
        <div className="w-full lg:w-1/2 p-6 text-left">
          <h3 className="text-2xl font-semibold text-blue-600">
            Our Mission: Innovate for a Seamless Life
          </h3>
          <p className="mt-4 text-gray-700">
            Our mission is to seamlessly integrate advanced, reliable appliances into every home, enhancing daily life with
            efficiency, comfort, and smart connectivity. We are committed to sustainability, quality, and technology accessibility,
            striving to make cutting-edge technology accessible to all.
          </p>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 h-full">
          <img
            src="/assets/aboutimagerealone.png"
            alt="Team collaborating"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;