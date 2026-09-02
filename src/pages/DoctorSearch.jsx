import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import DoctorSearchListing from "../components/DoctorSearch/DoctorSearchListing";

export default function DoctorSearch() {
  return (
    <DashboardLayout>
      <DoctorSearchListing />
    </DashboardLayout>
  );
}