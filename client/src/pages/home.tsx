import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Programs from "@/components/programs";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
