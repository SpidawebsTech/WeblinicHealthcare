
export default function OurStory() {
  return (
    <section className="px-5 sm:px-8 py-20 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <div className="text-xs font-bold text-brand-red uppercase tracking-wide mb-3">
          Our Story
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold">
          Healthcare shouldn't require a waiting room.
        </h2>
      </div>

      <div className="text-sm text-navy-400 leading-loose text-justify">
        <p className="mb-5">
          Weblinic started with a simple observation: too many people were
          delaying care simply because getting to a doctor was inconvenient.
          Travel, time off of work, waiting rooms, and long queues stood between
          people and the care they needed.
        </p>
        <p className="mb-5">
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


/*
import { useState } from "react";
import { BookOpen } from "lucide-react";

export default function OurStory() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="px-5 sm:px-8 py-20 max-w-2xl mx-auto">
      <div
        onClick={() => setIsExpanded((v) => !v)}
        className={`relative rounded-[20px] border border-gray-100 cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? "h-[560px]" : "h-[220px]"
        }`}
      >
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-center px-12 transition-opacity duration-300 ${
            isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-navy-500 to-brand-red text-white flex items-center justify-center mb-5">
            <BookOpen size={28} />
          </div>
          <h3 className="text-xl font-bold mb-2">Our Story</h3>
          <p className="text-sm text-navy-400 mb-4">
            Read about how Weblinic began.
          </p>
          <div className="text-xs font-semibold text-navy-500 flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
            Expand
          </div>
        </div>

        <div
          className={`absolute inset-0 p-12 transition-opacity duration-500 delay-150 ${
            isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="text-xs font-bold text-brand-red uppercase tracking-wide mb-3">
            Our Story
          </div>
          <h2 className="text-2xl font-bold mb-5">
            Healthcare shouldn't require a waiting room.
          </h2>

          <div className="text-sm text-navy-400 leading-loose text-justify">
            <p className="mb-4">
              Weblinic started with a simple observation: too many people were
              delaying care simply because getting to a doctor was inconvenient.
              Travel, time off of work, waiting rooms, and long queues stood between
              people and the care they needed.
            </p>
            <p className="mb-4">
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

          <div className="mt-5 text-xs font-semibold text-navy-500 flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
                Collapse
          </div>
        </div>
      </div>
    </section>
  );
}
*/