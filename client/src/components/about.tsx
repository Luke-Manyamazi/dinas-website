import { Check } from "lucide-react";
import img8 from "../assets/img8.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            About Dina's Day Care Center
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            For over a decade, we've been dedicated to providing exceptional
            early childhood education that prepares children for lifelong
            learning and success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={img8}
              alt="Preschool director with children in classroom"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Dina's Day Care Center, we believe every child is unique and
              deserves an environment where they can explore, discover, and
              grow. Our nurturing approach combines quality care with
              educational activities that encourage creativity, critical
              thinking, and social development.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Experienced Educators
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Our certified teachers have years of experience in early
                    childhood development.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Safe Environment
                  </h4>
                  <p className="text-gray-600 text-sm">
                    High standards in health and safety protocols ensure your
                    child's safety.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Individual Attention
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Small class sizes allow for personalized learning and
                    individual attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">30+</div>
            <div className="text-gray-600 text-sm">Happy Families</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-gray-600 text-sm">Qualified Teachers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-gray-600 text-sm">Age Groups</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-gray-600 text-sm">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
