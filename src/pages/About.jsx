import Navbar from "../components/Navbar/Navbar";
import AboutHero from "../components/AboutHero/AboutHero";
import MissionVision from "../components/MissionVision/MissionVision";
import OurStory from "../components/OurStory/OurStory";
import OurValues from "../components/OurValues/OurValues";
import Leadership from "../components/Leadership/Leadership";
import AdvisoryBoard from "../components/AdvisoryBoard/AdvisoryBoard";
import Footer from "../components/Footer/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <MissionVision />
      <OurStory />
      <OurValues />
      <Leadership />
      <AdvisoryBoard />
      <Footer />
    </>
  );
}