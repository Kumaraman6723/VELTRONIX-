import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#031D33] px-6 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#F5C242]">
            CONTACT
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Let&apos;s Discuss Your Next Transformation Initiative
          </h2>
          <p className="mt-3 text-sm text-white/80">
            Share a brief about your requirements and our team will connect with
            you to explore how Veltronix Technologies can help.
          </p>
        </div>
        <form className="space-y-4 rounded-2xl border border-white/10 bg-[#031D33] p-6 text-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium text-white/80">
                Name
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-white/10 bg-[#031827] px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-[#0A4FFF]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-white/80">
                Work Email
              </label>
              <input
                type="email"
                className="w-full rounded-md border border-white/10 bg-[#031827] px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-[#0A4FFF]"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-white/80">
              Company
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-white/10 bg-[#031827] px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-[#0A4FFF]"
              placeholder="Organization name"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-white/80">
              What can we help you with?
            </label>
            <textarea
              rows={4}
              className="w-full rounded-md border border-white/10 bg-[#031827] px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-[#0A4FFF]"
              placeholder="Share a brief about your project, challenges, or goals."
            />
          </div>
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="rounded-full bg-[#F5C242] px-6 py-3 text-sm font-semibold text-[#031D33] shadow-lg shadow-black/40 transition hover:-translate-y-0.5 hover:bg-[#ffd465]"
            >
              Submit Inquiry
            </button>
            <p className="text-xs text-white/60">
              By submitting, you agree to be contacted by Veltronix Technologies
              regarding your inquiry.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;


