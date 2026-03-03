"use client";

import Image from "next/image";

const rowOne = [
  { name: "Acer",     logo: "/brand-partners/acer.png" },
  { name: "Microtek", logo: "/brand-partners/microtek.png" },
  { name: "Nilkamal", logo: "/brand-partners/nilkamal.png" },
  { name: "Orient",   logo: "/brand-partners/orient.png" },
  { name: "Surya",    logo: "/brand-partners/surya.png" },
];

const rowTwo = [
  { name: "Lapcare", logo: "/brand-partners/lapcare.png" },
  { name: "Signx",   logo: "/brand-partners/signx.png" },
  { name: "Vertiv",  logo: "/brand-partners/vertiv.png" },
  { name: "Wybor",   logo: "/brand-partners/wybor.png" },
];

export default function BrandPartners() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
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
          <div className="relative backdrop-blur-lg bg-white/30 border border-white/50 rounded-3xl p-8 shadow-2xl">

            {/* Row 1 — 5 cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 mb-5">
              {rowOne.map((partner, index) => (
                <div
                  key={partner.name}
                  className="group flex items-center justify-center p-6 backdrop-blur-lg bg-white/40 border border-white/50 rounded-2xl shadow-lg hover:bg-white/60 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-default"
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={240}
                    height={160}
                    className="object-contain h-16 w-auto max-w-full transition-all duration-300"
                    priority={index < 5}
                  />
                </div>
              ))}
            </div>

            {/* Row 2 — 4 cards, centered */}
            <div className="flex flex-wrap justify-center gap-5">
              {rowTwo.map((partner) => (
                <div
                  key={partner.name}
                  className="w-[calc(50%-10px)] sm:w-48 group flex items-center justify-center p-6 backdrop-blur-lg bg-white/40 border border-white/50 rounded-2xl shadow-lg hover:bg-white/60 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-default"
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={240}
                    height={160}
                    className="object-contain h-16 w-auto max-w-full transition-all duration-300"
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
