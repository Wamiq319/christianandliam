import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import CampaignSection from "../components/CampaignSection";
import PaymentSection from "../components/paymentsection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CampaignSection />
      <PaymentSection />
      <Footer />
    </div>
  );
}
