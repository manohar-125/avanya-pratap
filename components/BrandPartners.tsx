"use client";

import Image from "next/image";

const partners = [
  { name: "Acer",     logo: "/brand-partners/acer.png" },
  { name: "Microtek", logo: "/brand-partners/microtek.png" },
  { name: "Nilkamal", logo: "/brand-partners/nilkamal.png" },
  { name: "Orient",   logo: "/brand-partners/orient.png" },
  { name: "Surya",    logo: "/brand-partners/surya.png" },
  { name: "Lapcare",  logo: "/brand-partners/lapcare.png" },
  { name: "Signx",    logo: "/brand-partners/signx.png" },
  { name: "Vertiv",   logo: "/brand-partners/vertiv.png" },
  { name: "Wybor",    logo: "/brand-partners/wybor.png" },
  { name: "cp_plus",  logo: "/brand-partners/cp_plus.jpg" },
  { name: "crompton",  logo: "/brand-partners/crompton.png" },
];

export default function BrandPartners() {
  return (
    <section className="py-10 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block backdrop-blur-lg bg-white/40 border border-white/50 rounded-full px-5 py-2 mb-6 shadow-md">
            <span className="text-primary font-semibold text-sm tracking-wide">Trusted Partners</span>
          </div>
          <h2 className="text-4xl font-bold text-secondary tracking-tight mb-3">
            Our Brand Partners
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            We proudly collaborate with leading brands to deliver exceptional
            infrastructure and construction solutions.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-secondary/8 rounded-3xl blur-3xl"></div>
          <div className="relative backdrop-blur-lg bg-white/30 border border-white/50 rounded-3xl p-6 sm:p-8 shadow-2xl">

            {/* Unified responsive grid: 2 cols mobile, 3 cols tablet (md), 4 cols desktop (lg) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {partners.map((partner, index) => (
                <div
                  key={partner.name + index}
                  className="group flex items-center justify-center w-full h-28 sm:h-32 md:h-36 bg-white/40 border border-white/50 rounded-2xl shadow-lg overflow-hidden p-4 transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={400}
                    height={200}
                    className="object-contain max-h-full max-w-full"
                    priority={index < 6}
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
