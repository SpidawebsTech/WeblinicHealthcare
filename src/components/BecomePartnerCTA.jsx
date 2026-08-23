import { useState } from "react";
import BecomePartnerModal from "./BecomePartnerModal";

export default function BecomePartnerCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="px-5 sm:px-8 py-16">
      <div className="max-w-[1000px] mx-auto relative overflow-hidden rounded-[20px] bg-gradient-to-br from-navy-500 to-navy-700 px-14 py-12 flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="absolute w-72 h-72 rounded-full border border-white/10 -top-28 -right-24" />
        <div className="relative z-10 text-center sm:text-left">
          <h2 className="text-2xl font-bold text-white mb-2.5">
            Interested in partnering with us?
          </h2>
          <p className="text-sm text-white/75 max-w-md leading-relaxed">
            Tell us about your organization and how you'd like to work with
            Weblinic, our partnerships team will be in touch.
          </p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="relative z-10 bg-white text-navy-700 text-sm font-bold px-7 py-3.5 rounded-full whitespace-nowrap"
        >
          Become a Partner
        </button>
      </div>

      <BecomePartnerModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}