import React from "react";



function Hero() {

  return (

    <header
      id="home"
      className="relative overflow-hidden"
    >

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0A4FFF]/20 via-transparent to-[#F5C242]/10" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:py-24">

        <div className="flex-1">

          <div className="mb-6 flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A4FFF] overflow-hidden ring-2 ring-[#0A4FFF]/60 ring-offset-2 ring-offset-[#031D33]">

              <img

                src="https://res.cloudinary.com/ddoqrvtqn/image/upload/v1765886744/cropped_circle_image_u0nhq5.png"

                alt="Veltronix Technologies logo"

                className="h-full w-full object-cover"

              />

            </div>

            <div>

              <h2 className="text-xs font-semibold tracking-[0.25em] text-[#F5C242]">

                VELTRONIX TECHNOLOGIES

              </h2>

              <p className="text-sm text-white/70">
                IT Consulting • Digital Transformation • AI Solutions
              </p>

            </div>

          </div>

          <h1 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">

            <span className="text-white">Veltronix Technologies</span>

            <span className="block text-[#F5C242]">Powering Intelligence. Transforming Technology.</span>

          </h1>

          <p className="mb-8 max-w-xl text-sm text-white/80 sm:text-base">

            <strong>Veltronix Technologies</strong> delivers enterprise-grade IT consulting,

            digital transformation, and AI-driven solutions that modernize

            operations, unlock automation, and build resilient digital

            platforms. As a leading technology partner, <strong>Veltronix Technologies</strong>

            helps businesses transform their digital infrastructure and achieve

            measurable business outcomes.

          </p>

          <div className="flex flex-wrap gap-4">

            <a

              href="/contact"

              className="rounded-full bg-[#F5C242] px-6 py-3 text-sm font-semibold text-[#031D33] shadow-lg shadow-black/40 transition hover:-translate-y-0.5 hover:bg-[#ffd465]"

            >

              Schedule a Consultation

            </a>

            <a

              href="#services"

              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-[#0A4FFF] hover:bg-white/5"

            >

              Explore Our Services

            </a>

          </div>

          <div className="mt-8 grid gap-4 text-xs text-white/70 sm:grid-cols-3">

            <div>

              <p className="text-lg font-semibold text-white">Enterprise IT</p>

              <p>Consulting, strategy and roadmap for digital-first businesses.</p>

            </div>

            <div>

              <p className="text-lg font-semibold text-white">AI &amp; Automation</p>

              <p>Intelligent platforms, ML models and workflow automation.</p>

            </div>

            <div>

              <p className="text-lg font-semibold text-white">Cloud &amp; ERP</p>

              <p>Cloud engineering and ERP implementations that scale.</p>

            </div>

          </div>

        </div>

        <div className="flex-1">

          <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

            <p className="mb-4 text-xs font-semibold tracking-wide text-[#F5C242]">

              WHY VELTRONIX

            </p>

            <ul className="space-y-3 text-sm text-white/85">
              <li>• Enterprise-grade delivery standards</li>
              <li>• Strategy to execution under one roof</li>
              <li>• Measurable business impact, not just code</li>
              <li>• Modern UX, secure architectures, cloud-native designs</li>
            </ul>

          </div>

        </div>

      </div>

    </header>

  );

}



export default Hero;

