import Navbar from "../components/Navbar/Navbar";
import PartnershipsHero from "../components/PartnershipsHero/PartnershipsHero";
import PartnersListing from "../components/PartnersListing/PartnersListing";
import PartnershipBenefits from "../components/PartnershipBenefits/PartnershipBenefits";
import BecomePartnerCTA from "../components/BecomePartnerCTA/BecomePartnerCTA";
import Footer from "../components/Footer/Footer";

export default function Partnerships() {
  return (
    <>
      <Navbar />
      <PartnershipsHero />
      <PartnersListing />
      <PartnershipBenefits />
      <BecomePartnerCTA />
      <Footer />
    </>
  );
}