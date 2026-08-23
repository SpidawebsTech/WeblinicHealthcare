import { CheckCircle2, Mic, Video, Phone, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 lg:py-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: copy */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-800 leading-tight tracking-tight">
            Quality healthcare,{" "}
            <span className="text-brand-red">from the comfort of home</span>
          </h1>
          <p className="mt-5 text-gray-600 text-base sm:text-lg max-w-md leading-relaxed">
            Connect with verified doctors, book an OPD visit or a specialist
            consultation, and manage your care, all in one place. No waiting
            rooms and no travel.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              className="bg-brand-red hover:bg-brand-redDark text-white text-sm font-medium px-6 py-3 rounded-md transition-colors"
            >
              Book an appointment
            </a>
            <a
              href="#"
              className="bg-white border border-gray-300 hover:border-navy-500 text-navy-700 text-sm font-medium px-6 py-3 rounded-md transition-colors"
            >
              Find a doctor
            </a>
          </div>
        </div>

        {/* Right: mock consultation card */}
        <div className="relative">
          <div className="absolute -top-4 right-4 sm:right-8 bg-white rounded-lg shadow-md px-4 py-2.5 flex items-center gap-2 z-10">
            <CheckCircle2 size={16} className="text-green-600 shrink-0" />
            <div className="leading-tight">
              <p className="text-xs font-semibold text-navy-800">Appointment confirmed</p>
              <p className="text-[11px] text-gray-500">Today, 4:30 PM</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 pt-14 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-navy-600 text-white flex items-center justify-center text-xl font-semibold">
              MF
            </div>
            <p className="mt-4 font-semibold text-navy-800">Dr. Mehreen Fatima</p>
            <p className="text-sm text-gray-500 flex items-center gap-1.5">
              General Physician
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              Online now
            </p>

            <div className="mt-5 bg-gray-50 border border-gray-100 rounded-md px-4 py-2 flex items-center gap-2 text-xs text-navy-700">
              <ShieldCheck size={14} className="text-brand-red" />
              <span>PMDC-verified doctor · 500+ specialists</span>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <span className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-navy-600">
                <Mic size={18} />
              </span>
              <span className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-navy-600">
                <Video size={18} />
              </span>
              <span className="w-11 h-11 rounded-full bg-brand-red text-white flex items-center justify-center">
                <Phone size={18} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
