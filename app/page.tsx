// Island Burgers & Bites — Homepage
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ReviewTicker from "@/components/ReviewTicker";
import Story from "@/components/Story";
import FeaturedMenu from "@/components/FeaturedMenu";
import OrderCTA from "@/components/OrderCTA";
import Gallery from "@/components/Gallery";
import HoursLocation from "@/components/HoursLocation";
import Footer from "@/components/Footer";
import MobileOrderBar from "@/components/MobileOrderBar";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ReviewTicker />
        <Story />
        <FeaturedMenu />
        <OrderCTA />
        <Gallery />
        <HoursLocation />
      </main>
      <Footer />
      <MobileOrderBar />
      <ScrollToTop />
    </>
  );
}
