import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import img9 from "../assets/img9.jpg";
import img1 from "../assets/img1.jpg";
import img22 from "../assets/img22.jpg";
import img23 from "../assets/img23.jpg";
import img25 from "../assets/img25.jpg";
import img19 from "../assets/img19.jpg";

export default function Programs() {
  const programs = [
    {
      title: "Infant Care",
      ageRange: "6-18 months",
      badgeColor: "bg-primary/10 text-primary",
      buttonColor: "bg-primary hover:bg-blue-700",
      image: img1,
      description:
        "Gentle care and early stimulation activities to support your baby's development in a loving environment.",
      features: [
        "Individualized feeding schedules",
        "Sensory play activities",
        "Music and movement",
      ],
    },
    {
      title: "Toddler Program",
      ageRange: "18-36 months",
      badgeColor: "bg-secondary/10 text-secondary",
      buttonColor: "bg-secondary hover:bg-yellow-600",
      image: img9,
      description:
        "Encouraging independence and social skills through structured play and exploration activities.",
      features: [
        "Language development",
        "Creative arts and crafts",
        "Outdoor playground time",
      ],
    },
    {
      title: "Preschool",
      ageRange: "3-4 years",
      badgeColor: "bg-accent/10 text-accent",
      buttonColor: "bg-accent hover:bg-green-600",
      image: img22,
      description:
        "Preparing children for kindergarten with structured learning activities and social skill development.",
      features: [
        "Pre-literacy and math skills",
        "Science experiments",
        "Group activities",
      ],
    },
    {
      title: "Pre-Grade R",
      ageRange: "4-5 years",
      badgeColor: "bg-purple-100 text-purple-600",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      image: img23,
      description:
        "Advanced preparation for kindergarten with focus on academic readiness and independence.",
      features: [
        "Reading and writing basics",
        "Mathematical concepts",
        "Leadership skills",
      ],
    },
    {
      title: "After School",
      ageRange: "5-12 years",
      badgeColor: "bg-red-100 text-red-600",
      buttonColor: "bg-red-500 hover:bg-red-600",
      image: img25,
      description:
        "Safe, supervised care with homework help and enrichment activities for school-age children.",
      features: ["Homework assistance", "STEM activities", "Sports and games"],
    },
    {
      title: "Extra Lessons",
      ageRange: "Grade R-7",
      badgeColor: "bg-yellow-100 text-yellow-600",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      image: img19,
      description:
        "Supportive after-school program focused on boosting academic performance.",
      features: [
        "Homework support and revision",
        "Interactive math and reading sessions",
        "One-on-one tutoring and progress tracking",
      ],
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Age-appropriate programs designed to nurture development at every
            stage of your child's early years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover object-[50%_30%] scale-90 transform group-hover:scale-100 transition-transform duration-300"
                />
              </div>
              <CardHeader className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="font-heading font-bold text-xl text-gray-900">
                    {program.title}
                  </CardTitle>
                  <Badge
                    className={`${program.badgeColor} px-3 py-1 rounded-full text-sm font-medium`}
                  >
                    {program.ageRange}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className={`w-full ${program.buttonColor} text-white py-3 rounded-lg transition-colors duration-300 font-medium text-left hover:text-primary`}
                >
                  Enrol Today
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
