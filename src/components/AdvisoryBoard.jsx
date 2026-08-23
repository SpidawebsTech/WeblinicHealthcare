const ADVISOR_COUNT = 3;

export default function AdvisoryBoard() {
  return (
    <section className="px-5 sm:px-8 py-16 bg-navy-50/50">
      <div className="max-w-4xl mx-auto text-center mb-11">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-8 h-px bg-gray-200" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
          <div className="w-8 h-px bg-gray-200" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Advisory Board</h2>
        <p className="text-sm text-navy-400">
          Guiding Weblinic's strategy and clinical direction.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8">
        {Array.from({ length: ADVISOR_COUNT }).map((_, i) => (
          <div key={i} className="text-center">
            <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4" />
            <h4 className="text-sm font-bold mb-1">Advisor Name</h4>
            <div className="text-xs font-semibold text-brand-red">Title</div>
          </div>
        ))}
      </div>
    </section>
  );
}