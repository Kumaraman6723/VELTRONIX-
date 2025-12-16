import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/what-we-do", label: "What We Do" },
    { to: "/industries", label: "Industries" },
    { to: "/insights", label: "Insights" },
    { to: "/why-veltronix", label: "Why Veltronix" },
    { to: "/success-stories", label: "Success Stories" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#031D33]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A4FFF] overflow-hidden ring-2 ring-[#0A4FFF]/60 ring-offset-2 ring-offset-[#031D33]">
              <img
                src="https://res.cloudinary.com/ddoqrvtqn/image/upload/v1765886744/cropped_circle_image_u0nhq5.png"
                alt="Veltronix Technologies logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-semibold tracking-[0.25em] text-[#F5C242]">
                VELTRONIX
              </p>
              <p className="text-[11px] text-white/70">Technologies</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 shadow-sm shadow-black/40 backdrop-blur lg:flex">
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full px-3 py-1 transition hover:bg-white/5 hover:text-[#F5C242]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-3 text-xs sm:text-sm lg:hidden">
            <Link
              to="/contact"
              className="rounded-full bg-[#F5C242] px-4 py-2 font-semibold text-[#031D33] shadow-md shadow-black/40 transition hover:-translate-y-0.5 hover:bg-[#ffd465]"
            >
              Contact
            </Link>
            <button
              type="button"
              className={`relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border transition-all ${
                isMobileMenuOpen
                  ? "border-[#F5C242] bg-white/5"
                  : "border-white/20 hover:border-[#F5C242]"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition-all ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition-all ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition-all ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <button
          type="button"
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close navigation menu"
        />

        {/* Sidebar panel */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-[#031D33] to-[#031D33]/98 shadow-2xl border-l border-white/10 backdrop-blur-xl flex flex-col transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 transition-opacity hover:opacity-80">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A4FFF] overflow-hidden ring-2 ring-[#0A4FFF]/60 ring-offset-2 ring-offset-[#031D33]">
                <img
                  src="https://res.cloudinary.com/ddoqrvtqn/image/upload/v1765886744/cropped_circle_image_u0nhq5.png"
                  alt="Veltronix Technologies logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] text-[#F5C242]">
                  VELTRONIX
                </p>
                <p className="text-[11px] text-white/70">Technologies</p>
              </div>
            </Link>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-[#F5C242] hover:bg-white/5 hover:text-[#F5C242]"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <div className="space-y-2">
              {links.map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium text-white/90 transition-all hover:bg-gradient-to-r hover:from-[#0A4FFF]/20 hover:to-transparent hover:text-[#F5C242] hover:pl-5 border border-transparent hover:border-[#0A4FFF]/30"
                  style={{
                    animationDelay: `${index * 30}ms`,
                  }}
                >
                  <span className="flex-1">{item.label}</span>
                  <svg
                    className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="border-t border-white/10 p-6">
            <div className="rounded-xl bg-gradient-to-r from-[#0A4FFF]/10 to-[#F5C242]/10 p-4 border border-white/10">
              <p className="text-xs font-semibold text-[#F5C242] mb-1">
                Ready to Transform?
              </p>
              <p className="text-[11px] text-white/60 leading-relaxed">
                Explore our services and discover how we can help your business grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
