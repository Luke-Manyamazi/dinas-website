import { Button } from "@/components/ui/button";
import img1 from "../assets/img1.jpg";
import img4 from "../assets/img4.jpg";
import img11 from "../assets/img11.jpg";
import img14 from "../assets/img14.jpg";
import img21 from "../assets/img21.jpg";
import img24 from "../assets/img24.jpg";

export default function Gallery() {
  const galleryItems = [
    {
      image: img4,
      title: "Creative Play",
      description: "Building imagination through play",
    },
    {
      image: img11,
      title: "Arts & Crafts",
      description: "Expressing creativity through art",
    },
    {
      image: img14,
      title: "Outdoor Fun",
      description: "Active play and exploration",
    },
    {
      image: img21,
      title: "Story Time",
      description: "Developing language skills",
    },
    {
      image: img24,
      title: "Science Fun",
      description: "Discovering the world around us",
    },
    {
      image: img1,
      title: "Learning Centers",
      description: "Organized spaces for exploration",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a peek into our vibrant learning environment and see the joy of
            discovery in action.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <a
              href="https://photos.app.goo.gl/r5g5iqdYn3Lr4oeC9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white hover:bg-blue-700 rounded-full font-medium px-8 py-3"
            >
              View More Photos
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
