import type { Metadata } from "next";
import DepartmentsCarousel from "@/components/DepartmentsCarousel";
import BrandPartners from "@/components/BrandPartners";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Avanya Pratap Service and Construction — a trusted government contractor delivering civil infrastructure and public sector services across India.",
};

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-white/60 to-secondary/10"></div>
        
        {/* Ambient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 py-24 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-block backdrop-blur-lg bg-white/40 border border-white/50 rounded-full px-5 py-2 mb-6 shadow-md">
                <span className="text-primary font-semibold text-sm tracking-wide">Government Contractor Since 2024</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-secondary tracking-tight leading-tight mb-8">
                Executing
                <span className="text-primary"> Government</span>
                <br />
                Infrastructure Nationwide
              </h1>

              <p className="text-base md:text-lg text-gray-500 mb-10 md:mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
                Avanya Pratap Service and Construction is a registered government contractor 
                delivering compliant civil infrastructure and public sector projects across 
                India — with 140+ successful project executions.
              </p>
            </div>
            
            <div className="relative w-full max-w-md mx-auto md:mx-0">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-primary/30 to-secondary/30 rounded-3xl blur-2xl"></div>
                <div className="relative backdrop-blur-lg bg-white/30 border border-white/50 rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="backdrop-blur-lg bg-white/40 border border-white/50 rounded-2xl p-6 text-center shadow-xl transition-all duration-300 hover:bg-white/50 hover:-translate-y-0.5">
                      <div className="text-3xl font-bold text-primary mb-1 tracking-tight">140+</div>
                      <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Projects Done</div>
                    </div>
                    <div className="backdrop-blur-lg bg-white/40 border border-white/50 rounded-2xl p-6 text-center shadow-xl transition-all duration-300 hover:bg-white/50 hover:-translate-y-0.5">
                      <div className="text-3xl font-bold text-primary mb-1 tracking-tight">25+</div>
                      <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Departments</div>
                    </div>
                    <div className="backdrop-blur-lg bg-white/40 border border-white/50 rounded-2xl p-6 text-center shadow-xl transition-all duration-300 hover:bg-white/50 hover:-translate-y-0.5">
                      <div className="text-3xl font-bold text-primary mb-1 tracking-tight">2024</div>
                      <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Founded</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-block backdrop-blur-lg bg-white/40 border border-white/50 rounded-full px-5 py-2 mb-5 shadow-md">
              <span className="text-primary font-semibold text-sm tracking-wide">Our Impact</span>
            </div>
            <h2 className="text-3xl font-bold text-secondary tracking-tight mb-3">Numbers That Define Us</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">A track record of compliant government project execution across multiple departments and states</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10 rounded-2xl blur-2xl transition-all duration-300 group-hover:blur-3xl"></div>
              <div className="relative backdrop-blur-lg bg-white/30 border border-white/50 rounded-2xl p-10 text-center shadow-2xl hover:bg-white/40 hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl font-bold text-primary mb-2 tracking-tight">140+</div>
                <p className="text-gray-600 font-medium text-sm uppercase tracking-wider">Completed Projects</p>
                <div className="mt-5 w-8 h-0.5 bg-primary/40 mx-auto rounded-full"></div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10 rounded-2xl blur-2xl transition-all duration-300 group-hover:blur-3xl"></div>
              <div className="relative backdrop-blur-lg bg-white/30 border border-white/50 rounded-2xl p-10 text-center shadow-2xl hover:bg-white/40 hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl font-bold text-primary mb-2 tracking-tight">5</div>
                <p className="text-gray-600 font-medium text-sm uppercase tracking-wider">Ongoing Projects</p>
                <div className="mt-5 w-8 h-0.5 bg-primary/40 mx-auto rounded-full"></div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10 rounded-2xl blur-2xl transition-all duration-300 group-hover:blur-3xl"></div>
              <div className="relative backdrop-blur-lg bg-white/30 border border-white/50 rounded-2xl p-10 text-center shadow-2xl hover:bg-white/40 hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl font-bold text-primary mb-2 tracking-tight">2024</div>
                <p className="text-gray-600 font-medium text-sm uppercase tracking-wider">Established</p>
                <div className="mt-5 w-8 h-0.5 bg-primary/40 mx-auto rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <DepartmentsCarousel />

      {/* BRAND PARTNERS */}
      <BrandPartners />

    </main>
  );
}