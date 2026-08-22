import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Feedback from "../components/Feedback/Feedback";
import Blog from "../components/Blog/Blog";
import DoctorCTA from "../components/DoctorCTA/DoctorCTA";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Feedback />
      < Blog/>
      <DoctorCTA />
      <Footer />
    </>
  );
}

export default Home;