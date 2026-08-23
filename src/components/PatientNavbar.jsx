import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  FileText,
  Pill,
  Activity,
  HeartPulse,
  Wallet,
  Settings,
  Bell,
  LogOut,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
} from "lucide-react";
import Logo from "./Logo";

const NAV_ITEMS = [
  { label: "Overview", to: "/dashboard", icon: LayoutGrid },
  { label: "Medical Records", to: "/prescriptions", icon: FileText },
  { label: "E-Pharmacy", to: "/pharmacy", icon: Pill },
  { label: "Lab Diagnostics", to: "/lab", icon: Activity },
  { label: "Care & Emergency", to: "/care", icon: HeartPulse },
  { label: "Billing & Plans", to: "/my-membership", icon: Wallet },
  { label: "Settings", to: "/settings", icon: Settings },
];

export default function PatientSidebarLayout({ children, title = "Patient Portal" }) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className={`bg-white border-r border-gray-100 flex flex-col shrink-0 transition-all duration-300 ${collapsed ? "w-20" : "w-60"}`}>
        <div className="px-5 py-5 flex items-center justify-between">
          {!collapsed && <Logo compact />}
          <button
            onClick={() => setCollapsed((v) => !v)}
            className="w-7 h-7 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-navy-400 shrink-0"
          >
            {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>
        </div>

        <nav className="flex-1 px-3 flex flex-col gap-1">
          {NAV_ITEMS.map(({ label, to, icon: Icon }) => {
            const active = location.pathname.startsWith(to);
            return (
              <Link
                key={label}
                to={to}
                title={collapsed ? label : undefined}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  active ? "bg-navy-500 text-white" : "text-navy-600 hover:bg-gray-50"
                } ${collapsed ? "justify-center" : ""}`}
              >
                <Icon size={17} className="shrink-0" />
                {!collapsed && label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4">
          {!collapsed && (
            <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-3 text-center">
              <div className="w-8 h-8 rounded-full border-2 border-brand-red text-brand-red flex items-center justify-center mx-auto mb-2">
                <AlertCircle size={16} />
              </div>
              <div className="text-brand-red font-bold text-sm mb-1">Emergency?</div>
              <p className="text-xs text-navy-500 mb-3">Book instant ambulance or blood request</p>
              <Link
                to="/ambulance/emergency"
                className="block text-center w-full bg-brand-red hover:bg-brand-redDark text-white text-xs font-bold py-2.5 rounded-lg transition-colors"
              >
                Request Help
              </Link>
            </div>
          )}
          <button className={`flex items-center gap-2 text-sm text-navy-400 hover:text-navy-700 ${collapsed ? "justify-center w-full" : "px-3"}`}>
            <LogOut size={16} />
            {!collapsed && "Logout"}
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-2 font-bold text-navy-700">
            <LayoutGrid size={18} className="text-navy-400" />
            {title}
          </div>
          <div className="flex items-center gap-4">
            <button className="relative w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-navy-400">
              <Bell size={16} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-red border-2 border-white" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-navy-500 text-white text-xs font-bold flex items-center justify-center">
                P
              </div>
              <span className="text-sm font-semibold text-navy-700">Patient</span>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}