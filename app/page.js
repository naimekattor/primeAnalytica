import AboutUs from "@/components/AboutUs";
import BusinessSolutions from "@/components/BusinessSolutions";
import ContactUsForm from "@/components/ContactUsForm";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <BusinessSolutions />
      <AboutUs />
      <ContactUsForm />
      <Faq />
      <Footer />
    </div>
  );
}
