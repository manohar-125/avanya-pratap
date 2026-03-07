"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const departments = [
  {
    name: "Rural Development Department, Uttar Pradesh",
    logo: "/departments/rural.jpg",
    smallLogo: true,
  },
  {
    name: "Commercial Tax Department, Uttar Pradesh",
    logo: "/departments/commercial_tax.png",
    smallLogo: true,
  },
  {
    name: "Department of Military Affairs",
    logo: "/departments/military.png",
  },
  {
    name: "State Consumer Disputes Redressal Commission",
    logo: "/departments/consumer.jpg",
  },
  {
    name: "Rural Engineering Department",
    logo: "/departments/engineering.png",
  },
  {
    name: "Higher Education Department, Uttar Pradesh",
    logo: "/departments/higher_education_department_uttar_pradesh.png",
  },
  {
    name: "Panchayati Raj Department, Uttar Pradesh",
    logo: "/departments/panchayati_raj_dept.png",
  },
  {
    name: "Pradhan Mantri Awas Yojana - Gramin",
    logo: "/departments/pmayg.png",
  },
  {
    name: "Directorate of Electrical Safety, Uttar Pradesh",
    logo: "/departments/directorate of elecrtical safety.png",
  },
];

// Each card: w-72 (288px) + mx-4 on each side (16px * 2 = 32px) = 320px
const CARD_WIDTH = 320;

export default function DepartmentsCarousel() {
  const [current, setCurrent] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Measure container to correctly center the active card
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % departments.length);
    }, 4000);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % departments.length);
    startInterval(); // reset interval so manual click doesn't fight auto-slide
  }, [startInterval]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? departments.length - 1 : prev - 1));
    startInterval();
  }, [startInterval]);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startInterval]);

  // Center the active card within the container
  const translateX = containerWidth / 2 - (current * CARD_WIDTH + CARD_WIDTH / 2);

  return (
    <section className="py-10 md:py-16 lg:py-20 overflow-visible">
      <div className="max-w-6xl mx-auto text-center px-8">
        <div className="inline-block backdrop-blur-lg bg-white/40 border border-white/50 rounded-full px-5 py-2 mb-6 shadow-md">
          <span className="text-primary font-semibold text-sm tracking-wide">Proudly Served</span>
        </div>
        <h2 className="text-4xl font-bold text-secondary tracking-tight">
          Departments Worked With
        </h2>

        <p className="mt-4 text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
          Successfully executed projects across various government
          departments with compliance and quality assurance.
        </p>

        <div className="relative mt-10 md:mt-12 flex items-center justify-center">

          {/* Left Arrow */}
          <button
            onClick={prev}
            aria-label="Previous department"
            className="absolute left-0 z-30 backdrop-blur-lg bg-white/40 border border-white/50 shadow-xl p-3 rounded-full hover:bg-white/60 hover:scale-105 transition-all duration-300 text-secondary hover:text-primary"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Carousel Container */}
          <div ref={containerRef} className="relative w-full overflow-hidden">
            <div
              className="flex items-center transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {departments.map((dept, index) => {
                const isActive = index === current;

                return (
                  <div
                    key={index}
                    className={`
                      relative mx-4 w-72 shrink-0
                      transition-all duration-700 ease-in-out
                      ${isActive ? "opacity-100" : "opacity-60"}
                    `}
                  >
                  <div
                    className={`
                      relative z-10 backdrop-blur-lg rounded-2xl p-6 h-[240px] flex flex-col transition-all duration-500
                      ${isActive
                        ? "bg-white/50 border border-white/60 shadow-2xl ring-1 ring-primary/20"
                        : "bg-white/25 border border-white/40 shadow-md"
                      }
                    `}
                  >
                      {/* Logo — fixed height container */}
                      <div className={`${dept.smallLogo ? "h-32" : "h-36"} w-full flex items-center justify-center flex-shrink-0`}>
                        <Image
                          src={dept.logo}
                          alt={dept.name}
                          width={dept.smallLogo ? 120 : 160}
                          height={dept.smallLogo ? 120 : 160}
                          className={`object-contain ${dept.smallLogo ? "max-h-28" : "max-h-32"} max-w-full transition-opacity duration-700`}
                          priority={index === 0}
                        />
                      </div>

                      {/* Name — fixed min-height, clamped to 3 lines */}
                      <div className="flex-1 flex items-center justify-center pt-3">
                        <h3 className="text-xs font-semibold text-secondary/70 text-center uppercase tracking-wider line-clamp-3 leading-relaxed">
                          {dept.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            aria-label="Next department"
            className="absolute right-0 z-30 backdrop-blur-lg bg-white/40 border border-white/50 shadow-xl p-3 rounded-full hover:bg-white/60 hover:scale-105 transition-all duration-300 text-secondary hover:text-primary"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}