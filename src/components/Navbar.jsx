import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  User,
  Stethoscope,
  Search,
  Calendar,
} from "lucide-react";
import Logo from "./Logo";

// NOTE: Only the "Patients" dropdown content was visible in the reference
// screenshot. The other four dropdowns below (Services, Doctors, Health
// Library, About) are inferred from the footer columns as placeholders —
// confirm exact wording with whoever built the reference before treating
// these as final.
const NAV_MENU = [
  {
    label: "Patients",
    items: [
      { label: "Patient Registration", href: "#" },
      { label: "Find a Doctor", href: "#" },
      { label: "Book Appointment", href: "#" },
      { label: "Online Consultation", href: "#" },
      { label: "Specialties", href: "#" },
      { label: "Health Packages", href: "#" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "Consultation", href: "#" },
      { label: "Find Doctors", href: "#" },
      { label: "Pharmacy", href: "#" },
      { label: "Diagnostics", href: "#" },
      { label: "Home Health", href: "#" },
    ],
  },
  {
    label: "Doctors",
    items: [
      { label: "Join Our Network", href: "#" },
      { label: "Doctor Login", href: "#" },
      { label: "CME Programs", href: "#" },
      { label: "Resources", href: "#" },
      { label: "Guidelines", href: "#" },
    ],
  },
  {
    label: "Health Library",
    items: [
      { label: "Articles & Blog", href: "#" },
      { label: "Symptom Checker", href: "#" },
      { label: "Wellness Guides", href: "#" },
      { label: "FAQs", href: "#" },
    ],
  },
  {
    label: "About",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "#" },
      { label: "Careers", href: "#" },
      { label: "News", href: "#" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Utility bar */}
      <div className="hidden lg:block bg-navy-800 text-navy-100 text-xs">
        <div className="px-5 sm:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a href="tel:+18001234567" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={13} />
              +1 (800) 123-4567
            </a>
            <a href="#" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MessageCircle size={13} />
              WhatsApp Support
            </a>
            <a href="mailto:support@weblinic.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={13} />
              support@weblinic.com
            </a>
            <span className="flex items-center gap-1.5 text-navy-100/70">
              <Clock size={13} />
              Mon - Sat: 8:00 AM - 10:00 PM
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <User size={13} />
              Patient Registration
            </a>
            <a href="#" className="flex items-center gap-1.5 font-semibold text-white hover:text-brand-red transition-colors">
              <Stethoscope size={13} />
              Doctor Registration
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-gray-100">
        <div className="px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
          <Logo />

          {/* Desktop menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_MENU.map((menu) => (
              <div key={menu.label} className="relative group">
                <button className="flex items-center gap-1 px-2 py-2 text-sm text-navy-700 hover:text-brand-red transition-colors whitespace-nowrap">
                  {menu.label}
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 w-56">
                    {menu.items.map((item) =>
                      item.href.startsWith("/") ? (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-navy-700 hover:bg-gray-50 hover:text-brand-red transition-colors"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-navy-700 hover:bg-gray-50 hover:text-brand-red transition-colors"
                        >
                          {item.label}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
            <a href="#" className="px-2 py-2 text-sm text-navy-700 hover:text-brand-red transition-colors">
              Contact
            </a>
          </nav>

          {/* Search - desktop only, hidden on smaller desktop widths to save space */}
          <div className="hidden xl:flex items-center flex-1 min-w-[240px] max-w-[340px] shrink-0">
            <div className="relative w-full">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                type="text"
                placeholder="Search doctors, specialties"
                className="w-full text-sm bg-gray-50 border border-gray-200 rounded-full pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-navy-400/30"
                />
            </div>
        </div>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="#"
              className="text-sm font-medium bg-brand-red text-white hover:bg-brand-redDark px-3.5 py-2.5 rounded-full transition-colors"
            >
              Login / Sign Up
            </a>
            <a
              href="#"
              className="flex items-center gap-1.5 bg-brand-red hover:bg-brand-redDark text-white text-sm font-medium px-3.5 py-2.5 rounded-full transition-colors"
            >
              <Calendar size={15} />
              Book Appointment
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-navy-700"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto">
          <div className="px-5 py-4 flex flex-col gap-1">
            {NAV_MENU.map((menu) => (
              <div key={menu.label} className="border-b border-gray-50">
                <button
                  className="w-full flex items-center justify-between py-3 text-sm font-medium text-navy-700"
                  onClick={() => setMobileSubOpen(mobileSubOpen === menu.label ? null : menu.label)}
                >
                  {menu.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${mobileSubOpen === menu.label ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileSubOpen === menu.label && (
                  <div className="pb-3 flex flex-col gap-2 pl-3">
                    {menu.items.map((item) =>
                      item.href.startsWith("/") ? (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="text-sm text-navy-600"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a key={item.label} href={item.href} className="text-sm text-navy-600">
                          {item.label}
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
            <a href="#" className="py-3 text-sm font-medium text-navy-700 border-b border-gray-50">
              Contact
            </a>

            <div className="flex flex-col gap-2 pt-4 pb-2">
              <a href="#" className="flex items-center gap-2 text-sm text-navy-600">
                <User size={15} /> Patient Registration
              </a>
              <a href="#" className="flex items-center gap-2 text-sm font-semibold text-navy-800">
                <Stethoscope size={15} /> Doctor Registration
              </a>
            </div>

            <div className="flex flex-col gap-3 pt-3 border-t border-gray-100">
              <a
                href="#"
                className="text-sm font-medium border border-brand-red text-brand-red text-center px-4 py-2.5 rounded-md"
              >
                Login / Sign Up
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-1.5 bg-brand-red text-white text-sm font-medium px-4 py-2.5 rounded-md"
              >
                <Calendar size={15} />
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
