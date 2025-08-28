import Mission from '/src/components/Mission.jsx'; // Adjust the path if needed
import Values from '/src/components/values.jsx'; 
const About = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-12 max-w-6xl mx-auto text-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
        Crafting Your Connected Home
      </h2>

      {/* Subheading / Description */}
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        At Appliance Avenue, we believe in empowering your lifestyle with cutting-edge
        technology and unparalleled convenience. Discover our journey, our values, and the
        passion that drives us to bring innovation to your home.
      </p>

      {/* Image with Gradient Overlay */}
      <div className="relative mt-10 w-full max-h-[600px] overflow-hidden rounded-lg shadow-sm">
        <img
          src="/assets/aboutimagerealone.png"
          alt="Modern connected home kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
      </div>

      {/* Use the Mission component here */}
      <Mission />
        <Values />
    </div>
  );
};

export default About;
