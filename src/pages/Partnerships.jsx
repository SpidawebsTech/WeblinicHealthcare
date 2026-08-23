import Navbar from "../components/Navbar";
import PartnershipsHero from "../components/PartnershipsHero";
import PartnersListing from "../components/PartnersListing";
import PartnershipBenefits from "../components/PartnershipBenefits";
import BecomePartnerCTA from "../components/BecomePartnerCTA";
import Footer from "../components/Footer";

export default function Partnerships() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PartnershipsHero />
      <PartnersListing />
      <PartnershipBenefits />
      <BecomePartnerCTA />
      <Footer />
    </div>
  );
}