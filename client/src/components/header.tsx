import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="@assets/Dina New Logo_1751119594701.png" 
                alt="Dina's Day Care Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl text-gray-900">Dina's Day Care Center</h1>
              <p className="text-sm text-gray-600">Nurturing Care Every Day</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
            >
              Contact
            </button>
            <Button className="bg-primary text-white hover:bg-blue-700 rounded-full font-medium">
              Enroll Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 pt-4 pb-6">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium py-2 text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium py-2 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium py-2 text-left"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium py-2 text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium py-2 text-left"
              >
                Contact
              </button>
              <Button className="bg-primary text-white hover:bg-blue-700 rounded-full font-medium mt-4 w-full">
                Enroll Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
