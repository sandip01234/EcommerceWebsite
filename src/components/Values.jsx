const Values = () => {
  return (
    <div className="mt-16 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Core Values</h2>
      <div className="mt-12 flex flex-col sm:flex-row justify-between gap-6">
        <div className="w-full sm:w-1/4 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-600">Customer Centricity</h3>
          <p className="mt-4 text-gray-700">
            We put our customers first, striving to understand their expectations and offering every interaction and product with the highest standards of quality.
          </p>
        </div>
        <div className="w-full sm:w-1/4 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-600">Innovation & Quality</h3>
          <p className="mt-4 text-gray-700">
            We are committed to offering the latest in every product we meet the highest standards of quality.
          </p>
        </div>
        <div className="w-full sm:w-1/4 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-600">Integrity & Trust</h3>
          <p className="mt-4 text-gray-700">
            We operate with unwavering transparency, building lasting relationships based on trust.
          </p>
        </div>
        <div className="w-full sm:w-1/4 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-600">Excellence & Growth</h3>
          <p className="mt-4 text-gray-700">
            We constantly seek to improve, grow, and meet product, operational efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;