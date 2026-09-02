import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import OtherPolicies from "./pages/OtherPolicies";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import MediaGalleryPage from "./pages/MediaGalleryPage";
import FactSheetPage from "./pages/FactSheetPage";
import SignUp from "./pages/SignUp";
import Patientdashboard from "./pages/Patientdashboard";
import PatientProfile from "./components/PatientProfile/PatientProfile";
import PharmacyCatalog from "./components/Pharmacy/PharmacyCatalog";
import PharmacyCheckout from "./components/Pharmacy/PharmacyCheckout";
import LabTestCatalog from "./components/LabTests/LabTestCatalog";
import LabResults from "./components/LabResults/LabResults";
import SampleCollectionScheduling from "./components/SampleCollectionScheduling/SampleCollectionScheduling";
import SecondOpinion from "./components/SecondOpinion/SecondOpinion";
import HomeHealthRequest from "./components/HomeHealthRequest/HomeHealthRequest";
import HomeHealthTracker from "./components/HomeHealthTracker/HomeHealthTracker";
import AddInsurancePolicy from "./components/AddInsurancePolicy/AddInsurancePolicy";
import InsuranceClaimsTracker from "./components/InsuranceClaimsTracker/InsuranceClaimsTracker";
import NotificatonsPage from "./components/NotificationsPage/NotificationsPage";
import BillingHistory from "./components/BillingHistory/BillingHistory";
import AccountSettings from "./components/AccountSettings/AccountSettings";
import ScrollToTop from "./components/ScrollToTop";

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
import BuyCredits from "./pages/BuyCredits";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Noor's routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policies" element={<OtherPolicies />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/media" element={<MediaGalleryPage />} />
        <Route path="/factsheet" element={<FactSheetPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Patientdashboard />} />
        <Route path="/dashboard/records" element={<PatientProfile />} />
        <Route path="/dashboard/pharmacy" element={<PharmacyCatalog />} />
        <Route path="/dashboard/pharmacy/checkout" element={<PharmacyCheckout />} />
        <Route path="/dashboard/labs" element={<LabTestCatalog />} />
        <Route path="/dashboard/lab-results" element={<LabResults />} />
        <Route path="/dashboard/labs/checkout" element={<SampleCollectionScheduling />} />
        <Route path="/dashboard/second-opinion" element={<SecondOpinion />} />
        <Route path="/dashboard/homehealth" element={<HomeHealthRequest />} />
        <Route path="/dashboard/homehealth-track" element={<HomeHealthTracker />} />
        <Route path="/insurance/add" element={<AddInsurancePolicy />} />
        <Route path="/insurance/claims" element={<InsuranceClaimsTracker />} />
        <Route path="/notifications" element={<NotificatonsPage />} />
        <Route path="/billing-history" element={<BillingHistory />} />
        <Route path="/settings" element={<AccountSettings />} />

        {/* Soha's routes */}
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
        <Route path="/wallet" element={<BuyCredits />} />
      </Routes>
    </>
  );
}

export default App;