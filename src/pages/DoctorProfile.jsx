import { useParams, Link } from "react-router-dom";
import { Star, Briefcase, Building2, Award, MapPin } from "lucide-react";
import PatientSidebarLayout from "../components/PatientSidebarLayout";
import { DOCTORS } from "../data/doctors";

export default function DoctorProfile() {
  const { slug } = useParams();
  const doctor = DOCTORS.find((d) => d.slug === slug);

  if (!doctor) {className="block text-center w-full bg-brand-red hover:bg-brand-redDark text-white text-sm font-bold py-3 rounded-full transition-colors"
    return (
      <PatientSidebarLayout title="Doctor Profile">
        <div className="text-center py-24 text-navy-400">Doctor not found.</div>
      </PatientSidebarLayout>
    );
  }

  return (
    <PatientSidebarLayout title="Doctor Profile">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-8">
        <Link to="/doctors" className="text-sm text-navy-400 hover:text-navy-700">
          ← Back to Doctors
        </Link>

        <div className="grid md:grid-cols-3 gap-8 mt-6">
          <div className="md:col-span-2 border border-gray-100 rounded-2xl p-8 bg-white">
            <div className="flex items-center gap-5 mb-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-navy-500 text-white text-2xl font-bold flex items-center justify-center">
                  {doctor.initials}
                </div>
                {doctor.online && (
                  <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white" />
                )}
              </div>
              <div>
                <h1 className="text-xl font-bold">{doctor.name}</h1>
                <div className="text-sm font-semibold text-brand-red">{doctor.spec}</div>
                <div className="flex items-center gap-1 text-xs text-navy-400 mt-1">
                  <Star size={13} className="text-yellow-500" /> {doctor.rating} rating
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-sm mb-6">
              <div className="flex items-start gap-2">
                <Award size={16} className="text-navy-400 mt-0.5" />
                <div>
                  <div className="text-xs text-navy-400">Qualification</div>
                  <div className="font-semibold">{doctor.qualification}</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Briefcase size={16} className="text-navy-400 mt-0.5" />
                <div>
                  <div className="text-xs text-navy-400">Experience</div>
                  <div className="font-semibold">{doctor.years} years</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Building2 size={16} className="text-navy-400 mt-0.5" />
                <div>
                  <div className="text-xs text-navy-400">Current employment</div>
                  <div className="font-semibold">{doctor.employer}</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-navy-400 mt-0.5" />
                <div>
                  <div className="text-xs text-navy-400">Distance</div>
                  <div className="font-semibold">{doctor.distanceKm} km away</div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs text-navy-400 mb-2">Available timings</div>
              <div className="flex flex-wrap gap-2">
                {doctor.timings.map((t) => (
                  <span key={t} className="text-xs font-semibold bg-navy-50 text-navy-700 px-3 py-1.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-gray-100 rounded-2xl p-6 h-fit bg-white">
            <div className="text-sm text-navy-400 mb-1">Consultation fee</div>
            <div className="text-2xl font-bold mb-4">Rs. {doctor.fee.toLocaleString()}</div>
            <Link
              to={`/book/${doctor.slug}`}
              className="block text-center w-full bg-brand-red hover:bg-brand-redDark text-white text-sm font-bold py-3 rounded-full transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </PatientSidebarLayout>
  );
}