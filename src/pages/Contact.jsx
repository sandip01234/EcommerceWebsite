import { MapPin, Mail, Phone } from 'lucide-react';
import ContactForm from '../components/contactForm';
const Contact = () => {
  return (
    <>
    <div className="px-4 sm:px-8 lg:px-5 py-5">
      <div className="bg-orange-50 py-12 px-4 sm:px-6 lg:px-12 rounded-md ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Reach Out to Electric shop</h2>
          <p className="mt-4 text-gray-600">
            We're here to help! Whether you have a question about products, an order,
            or just want to provide feedback, our team is ready to assist you.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Location Card */}
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="flex justify-center mb-4">
              <MapPin className="text-blue-500 w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold">Our Location</h3>
            <p className="mt-2 text-gray-600">
              456 Tech Drive, Silicon Valley, CA 94043, USA
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="flex justify-center mb-4">
              <Mail className="text-blue-500 w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold">Email Us</h3>
            <p className="mt-2 text-gray-600">support@applianceavenue.com</p>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="flex justify-center mb-4">
              <Phone className="text-blue-500 w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold">Call Us</h3>
            <p className="mt-2 text-gray-600">+1 (800) 555-0199</p>
          </div>
        </div>
      </div>
      
      
    </div>

    <ContactForm /></>
  );
};

export default Contact;
