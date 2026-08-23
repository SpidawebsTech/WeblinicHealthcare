import { Handshake } from "lucide-react";

export default function PartnershipsHero() {
  return (
    <section className="relative overflow-hidden text-center px-12 pt-16 pb-14 bg-gradient-to-br from-navy-500 to-navy-700">
      <div
        className="absolute rounded-full"
        style={{
          width: "340px",
          height: "340px",
          top: "-160px",
          right: "-100px",
          background: "rgba(255,255,255,0.06)",
          filter: "blur(10px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: "240px",
          height: "240px",
          bottom: "-100px",
          left: "-60px",
          background: "rgba(229,57,53,0.15)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div
          className="inline-flex items-center gap-2 font-bold text-white rounded-full"
          style={{
            fontSize: "12.5px",
            background: "rgba(255,255,255,0.15)",
            padding: "8px 18px",
            marginBottom: "20px",
          }}
        >
          <Handshake size={14} />
          Partnerships
        </div>
        <h1 className="font-extrabold text-white" style={{ fontSize: "36px", marginBottom: "16px" }}>
          Better healthcare, built together.
        </h1>
        <p
          className="mx-auto text-center"
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.75)",
            maxWidth: "640px",
            lineHeight: 1.6,
          }}
        >
          Weblinic partners with hospitals, insurance providers, employers,
          and government bodies to extend quality, verified care to more
          people, wherever they are.
        </p>
      </div>
    </section>
  );
}