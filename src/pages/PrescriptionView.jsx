import { FiPackage, FiDownload, FiUser } from "react-icons/fi";
import jsPDF from "jspdf";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import "./PrescriptionView.css";

const PRESCRIPTIONS = [
  { id: 1, doctor: "Dr. Mehreen Fatima", date: "Aug 2, 2026", items: ["Amoxicillin 500mg - 3x daily, 7 days", "Paracetamol 500mg - as needed for fever"] },
];

function downloadPrescriptionPDF(prescription) {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.setTextColor(15, 76, 129);
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
  doc.setTextColor(225, 72, 60);
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
    <DashboardLayout>
      <div className="rx-container">
        <div className="rx-list">
          {PRESCRIPTIONS.map((p) => (
            <div key={p.id} className="rx-card">
              <div className="rx-card-header">
                <div className="rx-doctor">
                  <FiUser size={16} /> {p.doctor}
                </div>
                <span className="rx-date">{p.date}</span>
              </div>
              <div className="rx-items">
                {p.items.map((item) => (
                  <div key={item} className="rx-item">
                    <FiPackage size={15} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => downloadPrescriptionPDF(p)} className="rx-download-btn">
                <FiDownload size={15} /> Download PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}