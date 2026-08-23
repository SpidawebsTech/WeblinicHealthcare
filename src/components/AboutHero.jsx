import { Heart } from "lucide-react";
import aboutHeroBg from "../assets/images/about-hero-bg.jpg";

export default function AboutHero() {
  return (
    <section
      className="relative text-center px-5 sm:px-8 bg-cover bg-center min-h-[480px] flex items-center justify-center"
      style={{ backgroundImage: `url(${aboutHeroBg})` }}
    >
      <div className="absolute inset-0 bg-navy-900/70" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-red uppercase tracking-wide mb-4">
          <Heart size={14} />
          About Weblinic
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5 text-white">
          Quality, trust, and empathy{" "}
          <br />
          <span className="text-brand-red">
            The care you deserve is the appointment we reserve.
          </span>
        </h1>
        <p className="text-base text-white/80 leading-relaxed max-w-xl mx-auto text-justify">
          Weblinic is a telemedicine platform built to give people ownership of
          their own health decisions from the comfort of home, without
          compromising on the quality or safety of care.
        </p>
      </div>
    </section>
  );
}