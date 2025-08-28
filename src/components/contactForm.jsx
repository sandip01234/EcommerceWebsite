const ContactForm = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-12 rounded-md shadow-md">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Form Section */}
        <form className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            placeholder="Your Message or Inquiry"
            rows="4"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Submit Inquiry
          </button>
        </form>

        {/* Embedded Google Map */}
        <div className="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d445.03387711877855!2d85.34157964992828!3d27.687021550226937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19924aad1ca5%3A0x4d7c4bfd9589bfb3!2sMr.%20locality%20power%20storage!5e1!3m2!1sen!2snp!4v1753321703902!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
