import React from "react";

function Footer() {
  return (
    <footer className="bg-[#020F1C] px-6 py-8 text-xs text-white/60 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">Veltronix Technologies</p>
          <p className="text-[11px] text-white/60">
            Powering Intelligence. Transforming Technology.
          </p>
        </div>
        <div className="flex flex-col items-start gap-1 text-[11px] text-white/50 sm:items-end">
          <p>
            © {new Date().getFullYear()} Veltronix Technologies. All rights
            reserved.
          </p>
          <p className="text-white/40">
            Built with modern web, cloud, and AI-native practices.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;