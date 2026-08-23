import {
  Send,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";

import logoImg from "../assets/images/logo.png";

// lucide-react dropped brand/logo icons in this version, so social icons
// are small custom inline SVGs instead.
const SocialFacebook = (p) => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" {...p}>
    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0 1 14 6h2v3h-2a1 1 0 0 0-1 1v2h3l-.5 3H13v7A10 10 0 0 0 22 12z" />
  </svg>
);
const SocialInstagram = (p) => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const SocialLinkedin = (p) => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" {...p}>
    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18.3H5.7V9.7h2.6zM7 8.6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.3 9.7h-2.6v-4.4c0-1-.4-1.7-1.4-1.7-.7 0-1.2.5-1.4 1-.1.2-.1.5-.1.8v4.3h-2.6s0-7.8 0-8.6h2.6v1.2a2.6 2.6 0 0 1 2.3-1.3c1.7 0 3 1.1 3 3.5z" />
  </svg>
);
const SocialTwitter = (p) => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" {...p}>
    <path d="M18.9 2h3.3l-7.2 8.2L23.5 22h-6.8l-5.3-7-6.1 7H2l7.7-8.8L1.5 2h6.9l4.8 6.4z" />
  </svg>
);
const SocialYoutube = (p) => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" {...p}>
    <path d="M22.5 6.6a2.8 2.8 0 0 0-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.6a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 5.4 2.8 2.8 0 0 0 2 2C5.3 20 12 20 12 20s6.7 0 8.5-.6a2.8 2.8 0 0 0 2-2A29 29 0 0 0 23 12a29 29 0 0 0-.5-5.4zM9.8 15.5V8.5l6 3.5z" />
  </svg>
);

const COLUMNS = [
  {
    title: "Company",
    links: ["About Us", "Our Story", "Careers", "News", "Insurance Partners"],
  },
  {
    title: "Services",
    links: ["Consultation", "Find Doctors", "Pharmacy", "Diagnostics", "Home Health"],
  },
];

// "Patients" and "Doctors" are stacked in one column in the reference design.
const PATIENTS_LINKS = ["Book Appointment", "Patient Portal", "Medical Records", "Prescriptions"];
const DOCTORS_LINKS = ["Join Our Network", "Doctor Login", "CME Programs", "Resources", "Guidelines"];

const SUPPORT_LINKS = ["Contact Us", "Help Center", "FAQs", "Live Chat", "Report an Issue"];

const LEGAL_LINKS = [
  "Privacy Policy",
  "Terms & Conditions",
  "Cookie Policy",
  "Refund Policy",
  "Telemedicine Disclaimer",
  "Patient Rights",
];

const SOCIALS = [
  { Icon: SocialFacebook, label: "Facebook" },
  { Icon: SocialInstagram, label: "Instagram" },
  { Icon: SocialLinkedin, label: "LinkedIn" },
  { Icon: SocialTwitter, label: "Twitter" },
  { Icon: SocialYoutube, label: "YouTube" },
];

function AppStoreBadge() {
  return (
    <a
      href="#"
      className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-md px-3 py-2 hover:bg-white/10 transition-colors"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M16.2 1.5c.1 1-.3 2-1 2.7-.7.8-1.8 1.4-2.8 1.3-.1-1 .4-2 1-2.7.8-.8 1.9-1.3 2.8-1.3zM19.7 17c-.5 1.1-.8 1.6-1.4 2.6-.9 1.4-2.2 3.1-3.7 3.1-1.4 0-1.7-.9-3.6-.9s-2.3.9-3.6.9c-1.5 0-2.6-1.5-3.5-2.9C1.8 17.1.9 12.9 2.4 10c.8-1.6 2.2-2.6 3.7-2.6 1.4 0 2.3.9 3.5.9 1.2 0 1.9-.9 3.6-.9 1.3 0 2.7.7 3.6 1.9-3.2 1.8-2.7 6.3.9 7.7z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[9px] text-white/60">Download on the</span>
        <span className="block text-xs font-semibold text-white">App Store</span>
      </span>
    </a>
  );
}

function PlayStoreBadge() {
  return (
    <a
      href="#"
      className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-md px-3 py-2 hover:bg-white/10 transition-colors"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M3.6 2.3 14 12 3.6 21.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1zM15 13l2.6 2.6-9.9 5.7L15 13zm4.6-3.4c.6.4 1 1 1 1.8s-.4 1.4-1 1.8l-2.3 1.3L14.7 12l2.6-2.6 2.3 1.2zM15 11 7.7 3.7l9.9 5.7L15 11z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[9px] text-white/60">GET IT ON</span>
        <span className="block text-xs font-semibold text-white">Google Play</span>
      </span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-navy-100">
      {/* Newsletter bar */}
      <div className="bg-navy-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-semibold text-base">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-navy-100/60 mt-1">
              Get health tips, wellness guides, and Weblinic updates delivered to your inbox.
            </p>
          </div>
          <form className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="flex-1 md:w-64 bg-white/5 border border-white/15 rounded-md px-4 py-2.5 text-sm text-white placeholder:text-navy-100/40 focus:outline-none focus:ring-2 focus:ring-brand-red/40"
            />
            <button
              type="submit"
              className="flex items-center gap-1.5 bg-brand-red hover:bg-brand-redDark text-white text-sm font-medium px-4 py-2.5 rounded-md transition-colors shrink-0"
            >
              Subscribe
              <Send size={14} />
            </button>
          </form>
        </div>
      </div>

      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-6 gap-10">
        {/* Brand block */}
      <div className="sm:col-span-2 lg:col-span-1">
      <div className="text-center lg:text-left">
        <img src={logoImg} alt="Weblinic icon" className="h-7 w-auto inline-block" />
      </div>
      <p className="mt-3 text-sm text-navy-100/70 leading-relaxed max-w-xs">
        Your trusted digital healthcare partner. Connecting patients with top medical
        specialists anywhere, anytime.
      </p>

          <p className="mt-5 text-[11px] font-semibold text-white/70 tracking-wide">
            DOWNLOAD MOBILE APP
          </p>
          <div className="mt-2 flex flex-col gap-2 w-fit">
            <AppStoreBadge />
            <PlayStoreBadge />
          </div>

          <p className="mt-5 text-[11px] font-semibold text-white/70 tracking-wide">FOLLOW US</p>
          <div className="mt-2 flex items-center gap-2">
            {SOCIALS.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-white text-sm">{col.title}</h4>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-navy-100/70 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Patients + Doctors stacked column */}
        <div>
          <h4 className="font-semibold text-white text-sm">Patients</h4>
          <ul className="mt-4 space-y-3">
            {PATIENTS_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-navy-100/70 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <h4 className="font-semibold text-white text-sm mt-6">Doctors</h4>
          <ul className="mt-4 space-y-3">
            {DOCTORS_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-navy-100/70 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white text-sm">Support</h4>
          <ul className="mt-4 space-y-3">
            {SUPPORT_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-navy-100/70 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white text-sm">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-navy-100/70">
            <li className="flex items-center gap-2">
              <Phone size={14} className="shrink-0" />
              <a href="tel:+18001234567" className="hover:text-white transition-colors">
                +1 (800) 123-4567
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={14} className="shrink-0" />
              <a href="#" className="hover:text-white transition-colors">
                WhatsApp Support
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="shrink-0" />
              <a href="mailto:support@weblinic.com" className="hover:text-white transition-colors">
                support@weblinic.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="shrink-0 mt-0.5" />
              <span>123 Healthcare Blvd, Suite 400, Medical District</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={14} className="shrink-0" />
              <span>Mon - Sat: 8:00 AM - 10:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom legal bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col items-center gap-4 text-xs text-navy-100/60">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <a key={link} href="#" className="hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-navy-100/80">
            <ShieldCheck size={13} className="text-green-400" />
            HIPAA & GDPR Compliant Data Encryption
          </div>

          <p>© 2026 Weblinic Healthcare Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
