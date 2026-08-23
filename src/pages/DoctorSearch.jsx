import PatientSidebarLayout from "../components/PatientSidebarLayout";
import DoctorSearchListing from "../components/DoctorSearchListing";

export default function DoctorSearch() {
  return (
    <PatientSidebarLayout title="Find a Doctor">
      <DoctorSearchListing />
    </PatientSidebarLayout>
  );
}