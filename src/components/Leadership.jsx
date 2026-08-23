import ijPhoto from "../assets/images/IJ.jpg";
import hjPhoto from "../assets/images/HJ.jpg";

const LEADERS = [
  { photo: ijPhoto, name: "Iqan Chughtai Junaid", title: "Chief Executive Officer" },
  { photo: hjPhoto, name: "Hassan Junaid", title: "Head of IT Operations" },
];

export default function Leadership() {
  return (
    <section className="px-5 sm:px-8 py-16">
      <div className="max-w-4xl mx-auto text-center mb-11">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-8 h-px bg-gray-200" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
          <div className="w-8 h-px bg-gray-200" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Our leadership</h2>
        <p className="text-sm text-navy-400">The people behind Weblinic.</p>
      </div>

      <div className="max-w-md mx-auto grid grid-cols-2 gap-10">
        {LEADERS.map(({ photo, name, title }) => (
          <div key={name} className="text-center">
            <img
              src={photo}
              alt={name}
              className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
            />
            <h4 className="text-sm font-bold mb-1">{name}</h4>
            <div className="text-xs font-semibold text-brand-red">{title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}