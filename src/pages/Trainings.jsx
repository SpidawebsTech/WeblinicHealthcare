import Navbar from "../components/Navbar";
import TrainingsListing from "../components/TrainingsListing";
import Footer from "../components/Footer";

export default function Trainings() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <TrainingsListing />
      <Footer />
    </div>
  );
}