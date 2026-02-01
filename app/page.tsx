import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Equipment from "@/components/sections/Equipment";
import Gallery from "@/components/sections/Gallery";
import Pricing from "@/components/sections/Pricing";
import Availability from "@/components/sections/Availability";
import BookingForm from "@/components/sections/BookingForm";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Equipment />
      <Gallery />
      <Pricing />
      <Availability />
      <BookingForm />
      <Contact />
      <Footer />
    </main>
  );
}
