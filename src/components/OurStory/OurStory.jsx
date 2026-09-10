import "./OurStory.css";

export default function OurStory() {
  return (
    <section className="os-section">
      <div className="os-header">
        <div className="os-label">Our Story</div>
        <h2 className="os-title">Healthcare shouldn't require a waiting room.</h2>
      </div>

      <div className="os-body">
        <p>
          Weblinic started with a simple observation: too many people were
          delaying care simply because getting to a doctor was inconvenient.
          Travel, time off of work, waiting rooms, and long queues stood between
          people and the care they needed.
        </p>
        <p>
          We set out to build a common ground where patients and healthcare
          providers could interact meaningfully: on one platform, with verified
          doctors, and a process built around the patient's time and comfort,
          not the clinic's.
        </p>
        <p>
          Today, Weblinic connects thousands of patients with licensed
          doctors for consultations, diagnostics, and pharmacy needs, all
          without leaving home.
        </p>
      </div>
    </section>
  );
}