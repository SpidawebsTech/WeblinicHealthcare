import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import MissionVision from "../components/MissionVision";
import OurStory from "../components/OurStory";
import OurValues from "../components/OurValues";
import Leadership from "../components/Leadership";
import AdvisoryBoard from "../components/AdvisoryBoard";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AboutHero />
      <MissionVision />
      <OurStory />
      <OurValues />
      <Leadership />
      <AdvisoryBoard />
      <Footer />
    </div>
  );
}