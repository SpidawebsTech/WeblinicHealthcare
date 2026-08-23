const STEPS = [
  {
    number: 1,
    title: "Create your account",
    description:
      "Sign up as a patient in under a minute with your name, email, and a few basics.",
  },
  {
    number: 2,
    title: "Choose your care",
    description:
      "Book a quick OPD visit, or browse and choose a specialist that fits your needs.",
  },
  {
    number: 3,
    title: "See your doctor",
    description:
      "Join your video consultation at the scheduled time from your phone or computer.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-3xl font-bold text-navy-800">How it works</h2>
          <p className="mt-2 text-gray-500">
            Three steps between you and seeing a doctor.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-10 max-w-4xl mx-auto text-center">
          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col items-center">
              <span className="w-10 h-10 rounded-full bg-navy-600 text-white flex items-center justify-center font-semibold">
                {step.number}
              </span>
              <h3 className="mt-4 font-semibold text-navy-800">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-[220px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
