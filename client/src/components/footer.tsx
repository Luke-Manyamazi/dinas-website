import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="@assets/Dina New Logo_1751119594701.png" 
                  alt="Dina's Day Care Logo" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">Dina's Day Care Center</h3>
                <p className="text-gray-400 text-sm">Nurturing Care Every Day</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Providing exceptional early childhood education in a nurturing, safe environment where children develop a love for learning that lasts a lifetime.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('programs')} 
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')} 
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  Contact
                </button>
              </li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Enrollment</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Parent Portal</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div>
                <p className="text-sm">📍 11th Street, Kensington</p>
                <p className="text-sm">Cape Town, 7405</p>
              </div>
              <p className="text-sm">📞 067 407 3148</p>
              <p className="text-sm">✉️ info.daycare@dinasgroup.co.za</p>
              <div>
                <p className="text-sm font-medium text-white">Hours:</p>
                <p className="text-sm">Mon-Fri: 7:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Dina's Day Care Center. All rights reserved. |{" "}
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a> |{" "}
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
