import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Programs() {
  const programs = [
    {
      title: "Infant Care",
      ageRange: "6-18 months",
      badgeColor: "bg-primary/10 text-primary",
      buttonColor: "bg-primary hover:bg-blue-700",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      description: "Gentle care and early stimulation activities to support your baby's development in a loving environment.",
      features: [
        "Individualized feeding schedules",
        "Sensory play activities",
        "Music and movement"
      ]
    },
    {
      title: "Toddler Program",
      ageRange: "18-36 months",
      badgeColor: "bg-secondary/10 text-secondary",
      buttonColor: "bg-secondary hover:bg-yellow-600",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      description: "Encouraging independence and social skills through structured play and exploration activities.",
      features: [
        "Language development",
        "Creative arts and crafts",
        "Outdoor playground time"
      ]
    },
    {
      title: "Preschool",
      ageRange: "3-4 years",
      badgeColor: "bg-accent/10 text-accent",
      buttonColor: "bg-accent hover:bg-green-600",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      description: "Preparing children for kindergarten with structured learning activities and social skill development.",
      features: [
        "Pre-literacy and math skills",
        "Science experiments",
        "Group activities"
      ]
    },
    {
      title: "Pre-Kindergarten",
      ageRange: "4-5 years",
      badgeColor: "bg-purple-100 text-purple-600",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      description: "Advanced preparation for kindergarten with focus on academic readiness and independence.",
      features: [
        "Reading and writing basics",
        "Mathematical concepts",
        "Leadership skills"
      ]
    },
    {
      title: "After School",
      ageRange: "5-12 years",
      badgeColor: "bg-red-100 text-red-600",
      buttonColor: "bg-red-500 hover:bg-red-600",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      description: "Safe, supervised care with homework help and enrichment activities for school-age children.",
      features: [
        "Homework assistance",
        "STEM activities",
        "Sports and games"
      ]
    },
    {
      title: "Summer Camp",
      ageRange: "3-12 years",
      badgeColor: "bg-yellow-100 text-yellow-600",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      description: "Fun-filled summer program with field trips, outdoor activities, and creative projects.",
      features: [
        "Weekly field trips",
        "Water play activities",
        "Arts and crafts"
      ]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Age-appropriate programs designed to nurture development at every stage of your child's early years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardHeader className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="font-heading font-bold text-xl text-gray-900">
                    {program.title}
                  </CardTitle>
                  <Badge className={`${program.badgeColor} px-3 py-1 rounded-full text-sm font-medium`}>
                    {program.ageRange}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-gray-600 mb-4">
                  {program.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${program.buttonColor} text-white py-3 rounded-lg transition-colors duration-300 font-medium`}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
