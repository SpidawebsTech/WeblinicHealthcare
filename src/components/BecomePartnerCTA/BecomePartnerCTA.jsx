import { useState } from "react";
import BecomePartnerModal from "../BecomePartnerModal/BecomePartnerModal";
import "./BecomePartnerCTA.css";

export default function BecomePartnerCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="bpc-section">
      <div className="bpc-card">
        <div className="bpc-circle" />
        <div className="bpc-text">
          <h2>Interested in partnering with us?</h2>
          <p>
            Tell us about your organization and how you'd like to work with
            Weblinic, our partnerships team will be in touch.
          </p>
        </div>
        <button onClick={() => setModalOpen(true)} className="bpc-btn">
          Become a Partner
        </button>
      </div>

      <BecomePartnerModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}