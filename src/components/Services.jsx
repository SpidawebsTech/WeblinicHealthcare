import { Heart, Asterisk } from "lucide-react";

const SERVICES = [
  {
    icon: Heart,
    title: "OPD appointment",
    description:
      "Quick, general consultation for everyday health concerns. No need to pick a doctor. We'll assign the next available one.",
    cta: "Book OPD visit",
  },
  {
    icon: Asterisk,
    title: "Find a specialist",
    description:
      "Browse verified doctors by specialty, view their full profile including qualifications, experience, timings, and book with the one you choose.",
    cta: "Browse doctors",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-3xl font-bold text-navy-800">Our services</h2>
          <p className="mt-2 text-gray-500">
            Two simple ways to get the care you need, whenever you need it.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {SERVICES.map(({ icon: Icon, title, description, cta }) => (
            <div
              key={title}
              className="bg-navy-600 rounded-2xl p-7 text-white flex flex-col"
            >
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Icon size={18} />
              </span>
              <h3 className="mt-5 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-navy-100/80 leading-relaxed flex-1">
                {description}
              </p>
              <a
                href="#"
                className="mt-6 inline-block bg-brand-red hover:bg-brand-redDark text-white text-sm font-medium px-4 py-2.5 rounded-md text-center transition-colors w-fit"
              >
                {cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
