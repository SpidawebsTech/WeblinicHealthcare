import { Heart } from "lucide-react";

export default function DoctorCTA() {
  return (
    <section className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col gap-6">
        {/* Are you a doctor? */}
        <div
          id="doctor-cta"
          className="bg-navy-600 rounded-2xl px-7 py-9 sm:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="max-w-lg">
            <h3 className="text-white text-xl font-semibold">Are you a doctor?</h3>
            <p className="mt-2 text-navy-100/80 text-sm leading-relaxed">
              Join Weblinic's network of verified healthcare providers. Set
              your own hours, your own fee, and reach thousands of patients
              across Pakistan.
            </p>
          </div>
          <a
            href="#"
            className="bg-brand-red hover:bg-brand-redDark text-white text-sm font-medium px-6 py-3 rounded-md transition-colors shrink-0"
          >
            Join as a doctor
          </a>
        </div>

        {/* Health tip of the day */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl px-6 py-5 flex items-start gap-4">
          <span className="w-9 h-9 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
            <Heart size={16} fill="currentColor" />
          </span>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Health tip of the day
            </p>
            <p className="mt-1 text-sm text-navy-800 italic leading-relaxed">
              "Those who think they have no time for bodily exercise will
              sooner or later have to find time for illness."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
