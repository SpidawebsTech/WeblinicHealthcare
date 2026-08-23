export default function PatientFooter() {
  return (
    <footer className="border-t border-gray-100 py-6 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-navy-400">
        <span>© {new Date().getFullYear()} Weblinic Healthcare. All rights reserved.</span>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-navy-700 transition-colors">Help Center</a>
          <a href="#" className="hover:text-navy-700 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-navy-700 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}