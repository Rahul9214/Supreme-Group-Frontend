import AnimatedSection from "./components/landingPage/animatedSection";
import AnimatedTitle from "./components/landingPage/animatedTitle";
import ContactSection from "./components/landingPage/contactSection";
import Footer from "./components/landingPage/footer";
import HeroSection from "./components/landingPage/heroSection";
import Navbar from "./components/navBar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AnimatedTitle />
      <AnimatedSection />
      <ContactSection />
      <Footer />
    </div>
  );
}