import { Mail, Phone, MapPin } from "lucide-react";

function Contacts() {
  return (
    <section className="bg-gray-50" id="contact">
      <div className="max-w-full bg-white p-8 space-y-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">Contact Me</h2>
        
        {/* Responsive container */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-0">
          
          {/* Phone */}
          <div className="flex items-center gap-4">
            <Phone className="text-blue-500 w-6 h-6" />
            <a
              href="tel:+917373899569"
              className="text-lg text-blue-600 hover:underline"
            >
              +91 73738 99569
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <Mail className="text-blue-500 w-6 h-6" />
            <a
              href="mailto:aerosreeni97@gmail.com"
              className="text-lg text-blue-600 hover:underline"
            >
              aerosreeni97@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <MapPin className="text-blue-500 w-6 h-6" />
            <span className="text-lg text-gray-700">Coimbatore, India</span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contacts;
