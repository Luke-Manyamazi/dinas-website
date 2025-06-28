import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import img18 from "../assets/img18.jpg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-12 pb-20 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-secondary/20 rounded-full animate-bounce-gentle"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-bounce-gentle"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary/20 rounded-full animate-bounce-gentle"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
              Where Little <span className="text-primary">Dreams</span> Take
              Flight
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Nurturing young minds through play-based learning, creativity, and
              exploration in a safe, loving environment. Join our preschool
              family today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-white hover:bg-blue-700 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl px-8 py-4"
              >
                Schedule a Tour
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("about")}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-semibold text-lg px-8 py-4"
              >
                Learn More
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-6 mt-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span>Licensed & Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span>Small Class Sizes</span>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* Main hero image */}
            <div className="relative z-10">
              <img
                src={img18}
                alt="Happy girl with the teacher"
                className="rounded-2xl shadow-2xl w-full h-auto max-w-lg mx-auto h-auto"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-secondary text-white p-4 rounded-2xl shadow-lg transform rotate-12 z-20">
              <div className="text-center">
                <div className="text-2xl font-bold">5★</div>
                <div className="text-sm">Parent Rating</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-white p-4 rounded-2xl shadow-lg transform -rotate-12 z-20">
              <div className="text-center">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
