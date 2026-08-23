import { Pill, Download, Stethoscope } from "lucide-react";
import jsPDF from "jspdf";
import PatientSidebarLayout from "../components/PatientSidebarLayout";

const PRESCRIPTIONS = [
  { id: 1, doctor: "Dr. Mehreen Fatima", date: "Aug 2, 2026", items: ["Amoxicillin 500mg - 3x daily, 7 days", "Paracetamol 500mg - as needed for fever"] },
];

function downloadPrescriptionPDF(prescription) {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.setTextColor(15, 76, 129); // navy
  doc.text("Weblinic Healthcare", 20, 20);

  doc.setFontSize(11);
  doc.setTextColor(80, 80, 80);
  doc.text("e-Prescription", 20, 28);

  doc.setDrawColor(220, 220, 220);
  doc.line(20, 33, 190, 33);

  doc.setFontSize(11);
  doc.setTextColor(30, 30, 30);
  doc.text(`Prescribed by: ${prescription.doctor}`, 20, 44);
  doc.text(`Date: ${prescription.date}`, 20, 52);

  doc.setFontSize(12);
  doc.setTextColor(225, 72, 60); // brand red
  doc.text("Medications", 20, 66);

  doc.setFontSize(11);
  doc.setTextColor(30, 30, 30);
  let y = 76;
  prescription.items.forEach((item, i) => {
    doc.text(`${i + 1}. ${item}`, 24, y);
    y += 9;
  });

  doc.setFontSize(9);
  doc.setTextColor(150, 150, 150);
  doc.text("Generated via Weblinic Healthcare - for informational use only.", 20, 280);

  doc.save(`Prescription_${prescription.doctor.replace(/\s+/g, "_")}_${prescription.date.replace(/,?\s+/g, "_")}.pdf`);
}

export default function PrescriptionView() {
  return (
    <PatientSidebarLayout title="Prescriptions">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8">
        <div className="flex flex-col gap-4">
          {PRESCRIPTIONS.map((p) => (
            <div key={p.id} className="border border-gray-100 rounded-2xl p-6 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm font-bold">
                  <Stethoscope size={16} className="text-navy-400" /> {p.doctor}
                </div>
                <span className="text-xs text-navy-400">{p.date}</span>
              </div>
              <div className="flex flex-col gap-2 mb-4">
                {p.items.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm">
                    <Pill size={15} className="text-brand-red mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => downloadPrescriptionPDF(p)}
                className="flex items-center gap-2 text-sm font-bold text-navy-500 hover:text-navy-700"
              >
                <Download size={15} /> Download PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </PatientSidebarLayout>
  );
}