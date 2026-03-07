"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Service data
───────────────────────────────────────────────────────────── */
const services = [
  {
    title: "Annual Maintenance Contracts",
    description:
      "Reliable maintenance and support services ensuring uninterrupted operation of infrastructure and equipment.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "IT Infrastructure & Networking",
    description:
      "Deployment and maintenance of IT systems, networking solutions, and digital infrastructure.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Electrical Works",
    description:
      "Execution of electrical installations, wiring, power distribution systems, and maintenance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Civil Construction",
    description:
      "Construction of buildings, structures, and public infrastructure with high quality standards.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Road & Infrastructure Development",
    description:
      "Development and maintenance of roads, highways, and related infrastructure projects.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M4 19l4-14h8l4 14" />
        <line x1="12" y1="5" x2="12" y2="19" strokeDasharray="2 2" />
        <line x1="4" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
  {
    title: "Facility Maintenance & Infrastructure Support",
    description:
      "Comprehensive maintenance services for offices, campuses, and industrial facilities.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 7.76a6 6 0 0 0 0 8.49" />
      </svg>
    ),
  },
  {
    title: "Skilled Manpower Supply",
    description:
      "Providing trained technical and non-technical manpower for government and private projects.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Equipment Installation & Technical Support",
    description:
      "Supply and maintenance of technical equipment, power systems, and industrial hardware.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="2" x2="9" y2="4" />
        <line x1="15" y1="2" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="22" />
        <line x1="15" y1="20" x2="15" y2="22" />
        <line x1="2" y1="9" x2="4" y2="9" />
        <line x1="2" y1="15" x2="4" y2="15" />
        <line x1="20" y1="9" x2="22" y2="9" />
        <line x1="20" y1="15" x2="22" y2="15" />
      </svg>
    ),
  },
  {
    title: "Project Management & Execution",
    description:
      "End-to-end project planning, execution, supervision, and delivery.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────────────────────
   Infinite-loop carousel — tripled array technique.

   Layout math (percentage-based, no pixel measurement needed):
     • Track element width  = (3N / visibleCount) × 100% of viewport
     • Each cell width      = (1 / 3N) × track  =  (1 / visibleCount) × viewport ✓
     • translateX (% of track) = -(offset / 3N) × 100%

   Infinite loop:
     • Offset runs from N to 2N–1 (middle copy).
     • Crossing ≥ 2N  → silently snap back to N  (same visual, forward wrap).
     • Crossing  < N  → silently snap forward to 2N–1 (same visual, backward wrap).
───────────────────────────────────────────────────────────── */
const N = services.length; // 9
const track = [...services, ...services, ...services]; // 27 items
const START_OFFSET = N;

function getVisibleCount(): number {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 768) return 2;
  if (window.innerWidth < 1024) return 3;
  return 4;
}

export default function OurServices() {
  const [offset, setOffset] = useState(START_OFFSET);
  const [visibleCount, setVisibleCount] = useState(4);
  const [animated, setAnimated] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const isSilentSnapping = useRef(false);

  /* ── Responsive visible count ── */
  useEffect(() => {
    const update = () => setVisibleCount(getVisibleCount());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ── Silent boundary snap ── */
  useEffect(() => {
    if (isSilentSnapping.current) return;

    const needsSnap = offset >= 2 * N || offset < N;
    if (!needsSnap) return;

    isSilentSnapping.current = true;
    const timer = setTimeout(() => {
      setAnimated(false);
      setOffset((prev) => (prev >= 2 * N ? prev - N : prev + N));
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimated(true);
          isSilentSnapping.current = false;
        })
      );
    }, 700); // match transition duration
    return () => clearTimeout(timer);
  }, [offset]);

  /* ── Auto-advance timer ── */
  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isSilentSnapping.current)
        setOffset((prev) => prev + 1);
    }, 3500);
  }, []);

  useEffect(() => {
    if (!isPaused) startInterval();
    else if (intervalRef.current) clearInterval(intervalRef.current);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, startInterval]);

  /* ── Manual navigation ── */
  const next = useCallback(() => {
    if (isSilentSnapping.current) return;
    setOffset((prev) => prev + 1);
    startInterval();
  }, [startInterval]);

  const prev = useCallback(() => {
    if (isSilentSnapping.current) return;
    setOffset((prev) => prev - 1);
    startInterval();
  }, [startInterval]);

  /* ── Touch / swipe ── */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
  };

  // Active dot (0-based index within the real 9 services)
  const realIndex = ((offset - N) % N + N) % N;

  // translateX as % of the track's own width
  const translatePct = -(offset / track.length) * 100;

  return (
    <section
      className="relative py-10 md:py-16 lg:py-20 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Section background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block backdrop-blur-lg bg-white/40 border border-white/50 rounded-full px-5 py-2 mb-6 shadow-md">
            <span className="text-primary font-semibold text-sm tracking-wide">
              What We Offer
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary tracking-tight mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            We deliver reliable infrastructure, technical, and facility
            solutions for government and private sector projects.
          </p>
        </div>

        {/* ── Carousel wrapper ── */}
        <div className="relative flex items-center gap-2 sm:gap-3">

          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous service"
            className="shrink-0 z-10 backdrop-blur-lg bg-white/40 border border-white/50 shadow-xl p-2.5 sm:p-3 rounded-full hover:bg-white/60 hover:scale-105 transition-all duration-300 text-secondary hover:text-primary"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Viewport — clips overflow */}
          <div
            className="overflow-hidden w-full"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/*
              Track: width = (27 / visibleCount) * 100% of viewport.
              Each cell: width = (1/27) of track = (1/visibleCount) of viewport. ✓
              translateX is a % of the track's own width.
            */}
            <div
              className="flex items-stretch"
              style={{
                width: `${(track.length / visibleCount) * 100}%`,
                transform: `translateX(${translatePct}%)`,
                transition: animated ? "transform 0.7s ease-in-out" : "none",
              }}
            >
              {track.map((service, i) => (
                <div
                  key={i}
                  className="px-2 sm:px-3 py-1"
                  style={{ width: `${100 / track.length}%` }}
                >
                  {/* Card */}
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="relative h-full backdrop-blur-lg bg-white/40 border border-white/60 rounded-2xl p-4 sm:p-6 shadow-lg flex flex-col items-center text-center gap-3 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:bg-white/60">
                      {/* Icon */}
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                        {service.icon}
                      </div>
                      {/* Title */}
                      <h3 className="text-xs sm:text-sm font-semibold text-secondary leading-snug">
                        {service.title}
                      </h3>
                      {/* Divider */}
                      <div className="w-8 h-0.5 bg-primary/30 rounded-full shrink-0" />
                      {/* Description */}
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next service"
            className="shrink-0 z-10 backdrop-blur-lg bg-white/40 border border-white/50 shadow-xl p-2.5 sm:p-3 rounded-full hover:bg-white/60 hover:scale-105 transition-all duration-300 text-secondary hover:text-primary"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* ── Dot indicators ── */}
        <div className="flex justify-center gap-1.5 mt-8">
          {services.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to service ${i + 1}`}
              onClick={() => {
                if (!isSilentSnapping.current) {
                  setOffset(N + i);
                  startInterval();
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === realIndex
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-secondary/20 hover:bg-secondary/40"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
