import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Trainings from "./pages/Trainings";
import Partnerships from "./pages/Partnerships";
import DoctorSearch from "./pages/DoctorSearch";
import DoctorProfile from "./pages/DoctorProfile";
import AppointmentBooking from "./pages/AppointmentBooking";
import MyAppointments from "./pages/MyAppointments";
import PrescriptionView from "./pages/PrescriptionView";
import LabOrderView from "./pages/LabOrderView";
import ReviewRating from "./pages/ReviewRating";
import MembershipPlans from "./pages/MembershipPlans";
import MembershipCheckout from "./pages/MembershipCheckout";
import MyMembership from "./pages/MyMembership";
import BloodRequestBlood from "./pages/BloodRequestBlood";
import BloodBecomeDonor from "./pages/BloodBecomeDonor";
import DonorDirectConnect from "./pages/DonorDirectConnect";
import AmbulanceEmergency from "./pages/AmbulanceEmergency";
import AmbulanceScheduled from "./pages/AmbulanceScheduled";
import AmbulanceTracking from "./pages/AmbulanceTracking";
import CareEmergency from "./pages/CareEmergency";
import Notifications from "./pages/Notifications";
import BuyCredits from "./pages/BuyCredits";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/trainings" element={<Trainings />} />
      <Route path="/partnerships" element={<Partnerships />} />
      <Route path="/doctors" element={<DoctorSearch />} />
      <Route path="/doctors/:slug" element={<DoctorProfile />} />
      <Route path="/book/:slug" element={<AppointmentBooking />} />
      <Route path="/appointments" element={<MyAppointments />} />
      <Route path="/prescriptions" element={<PrescriptionView />} />
      <Route path="/lab-orders" element={<LabOrderView />} />
      <Route path="/review/:appointmentId" element={<ReviewRating />} />
      <Route path="/membership" element={<MembershipPlans />} />
      <Route path="/membership/checkout/:planId" element={<MembershipCheckout />} />
      <Route path="/my-membership" element={<MyMembership />} />
      <Route path="/blood/request" element={<BloodRequestBlood />} />
      <Route path="/blood/donate" element={<BloodBecomeDonor />} />
      <Route path="/blood/connect" element={<DonorDirectConnect />} />
      <Route path="/ambulance/emergency" element={<AmbulanceEmergency />} />
      <Route path="/ambulance/scheduled" element={<AmbulanceScheduled />} />
      <Route path="/ambulance/tracking" element={<AmbulanceTracking />} />
      <Route path="/care" element={<CareEmergency />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/wallet" element={<BuyCredits />} />
    </Routes>
  );
}

export default App;