import logoImg from "../assets/images/logo.png";

export default function Logo({ className = "", compact = false }) {
  return (
    <a href="/" className={`flex items-center gap-2 select-none shrink-0 mr-6 ${className}`}>
      <img src={logoImg} alt="Weblinic icon" className="h-8 w-auto" />
      <span className="font-bold text-lg text-navy-700 tracking-tight">Weblinic</span>
      {!compact && (
        <span className="font-bold text-lg text-navy-700 tracking-tight">Healthcare</span>
      )}
    </a>
  );
}