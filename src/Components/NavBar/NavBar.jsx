import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/what-we-do", label: "What We Do" },
    { to: "/digital-ai", label: "Digital & AI" },
    { to: "/industries", label: "Industries" },
    { to: "/insights", label: "Insights" },
    { to: "/why-veltronix", label: "Why Veltronix" },
    { to: "/success-stories", label: "Success Stories" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#031D33]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
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
        </div>
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
        <div className="flex gap-3 text-xs sm:text-sm lg:hidden">
          <Link
            to="/contact"
            className="rounded-full bg-[#F5C242] px-4 py-2 font-semibold text-[#031D33] shadow-md shadow-black/40 transition hover:-translate-y-0.5 hover:bg-[#ffd465]"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
