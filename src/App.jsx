import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import AddInsurancePolicy from './components/AddInsurancePolicy/AddInsurancePolicy';
import InsuranceClaimsTracker from './components/InsuranceClaimsTracker/InsuranceClaimsTracker';
import NotificatonsPage from "./components/NotificationsPage/NotificationsPage";
import BillingHistory from "./components/BillingHistory/BillingHistory";
import AccountSettings from "./components/AccountSettings/AccountSettings";
import DoctorDashboard from "./components/DoctorDashboard/DoctorDashboard";
import ScheduleManagement from "./components/ScheduleManagement/ScheduleManagement";
import PrescriptionEntry from "./components/PrescriptionEntry/PrescriptionEntry";
import LabOrderCreation from "./components/LabOrderCreation/LabOrderCreation";
import PatientRecords from "./components/PatientRecords/PatientRecords";
import Earnings from "./components/Earnings/Earnings";
import DoctorProfileSettings from "./components/DoctorProfileSettings/DoctorProfileSettings";
import SecondOpinionQueue from "./components/SecondOpinionQueue/SecondOpinionQueue";
import ScrollToTop from "./components/ScrollToTop";

const MedicalRecords = () => <h2>Medical Records & Diagnostic History Hub</h2>;
const PharmacyHub = () => <h2>E-Pharmacy Hub</h2>;
const LabDiagnostics = () => <h2>Lab & Diagnostics Hub</h2>;
const CareEmergency = () => <h2>Home Health, Ambulance & Blood Bank Hub</h2>;
const BillingPlans = () => <h2>Memberships & Insurance Hub</h2>;
const SettingsPage = () => <h2>Account Settings</h2>;

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
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
        <Route path="/dashboard/lab-results" element={<LabResults />} />
        <Route path="/dashboard/second-opinion" element={<SecondOpinion />} />
        <Route path="/dashboard/homehealth" element={<HomeHealthRequest />} />
        <Route path="/dashboard/homehealth-track" element={<HomeHealthTracker />} />
        <Route path="/insurance/add" element={<AddInsurancePolicy />} />
        <Route path="/insurance/claims" element={<InsuranceClaimsTracker />} />
        <Route path="/notifications" element={<NotificatonsPage />} />
        <Route path="/billing-history" element={<BillingHistory />} />
        <Route path="/settings" element={<AccountSettings/>} />
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor/schedule" element={<ScheduleManagement />} />
        <Route path="/doctor/prescriptionentry" element={<PrescriptionEntry />} />
        <Route path="lab-order" element={<LabOrderCreation />} />
        <Route path="/records" element={<PatientRecords />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/doctor-settings" element={<DoctorProfileSettings />} />
        <Route path="/second-opinion-queue" element={<SecondOpinionQueue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;