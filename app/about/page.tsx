import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Avanya Pratap Service and Construction — a registered government contractor capable of delivering civil and infrastructure projects across India.",
};

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-28 px-8 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-white/60 to-secondary/10"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block backdrop-blur-lg bg-white/40 border border-white/50 rounded-full px-5 py-2 mb-6 shadow-md">
              <span className="text-primary font-semibold text-sm tracking-wide">
                About Our Company
              </span>
            </div>
          </div>

          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-2xl"></div>
            <Image
              src="/logo.jpeg"
              alt="Avanya Group"
              width={200}
              height={200}
              className="relative mx-auto object-contain rounded-full shadow-2xl border-4 border-white/50"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-secondary tracking-tight mb-6">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Avanya Pratap Service and Construction is a registered government
            contractor delivering compliant civil infrastructure and public
            sector project execution across India since 2025.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10 rounded-2xl blur-2xl transition-all duration-300 group-hover:blur-3xl"></div>
              <div className="relative backdrop-blur-lg bg-white/30 border border-white/50 rounded-2xl p-8 shadow-2xl hover:bg-white/40 hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[280px]">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <div className="w-4 h-4 bg-primary rounded-md"></div>
                </div>
                <h2 className="text-xl font-bold text-secondary tracking-tight mb-4">
                  Who We Are
                </h2>
                <p className="text-gray-500 leading-relaxed text-sm flex-1">
                  Established in 2025, Avanya Pratap Service and Construction is
                  a registered government contractor delivering compliant civil
                  infrastructure across multiple central and state departments
                  nationwide. We have been engaged with key infrastructure and
                  engineering departments including RES, PWD, and CPWD across
                  various project engagements, with a consistent record of
                  structured, on-time execution.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10 rounded-2xl blur-2xl transition-all duration-300 group-hover:blur-3xl"></div>
              <div className="relative backdrop-blur-lg bg-white/30 border border-white/50 rounded-2xl p-8 shadow-2xl hover:bg-white/40 hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[280px]">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <h2 className="text-xl font-bold text-secondary tracking-tight mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-500 leading-relaxed text-sm flex-1">
                  To be India&apos;s most reliable government execution partner
                  — participating in and delivering public sector tenders with
                  quality, transparency, and commitment to national
                  infrastructure outcomes.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10 rounded-2xl blur-2xl transition-all duration-300 group-hover:blur-3xl"></div>
              <div className="relative backdrop-blur-lg bg-white/30 border border-white/50 rounded-2xl p-8 shadow-2xl hover:bg-white/40 hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[280px]">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <div className="w-4 h-4 bg-primary rounded-sm rotate-45"></div>
                </div>
                <h2 className="text-xl font-bold text-secondary tracking-tight mb-4">
                  Why Choose Us
                </h2>
                <ul className="space-y-3 text-gray-500 text-sm flex-1">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                    <span>
                      Registered and compliant with all government procurement
                      norms
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                    <span>
                      Active participant on the Government e-Marketplace (GeM)
                      portal for transparent and compliant public procurement
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                    <span>
                      Experienced across central and state departments including
                      RES, PWD, and CPWD
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                    <span>
                      Transparent reporting, quality-assured execution, and 140+
                      completed projects since 2025
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block backdrop-blur-lg bg-white/40 border border-white/50 rounded-full px-5 py-2 mb-5 shadow-md">
              <span className="text-primary font-semibold text-sm tracking-wide">
                Our Leadership
              </span>
            </div>
            <h2 className="text-3xl font-bold text-secondary tracking-tight mb-3">
              Leadership Messages
            </h2>
            <div className="w-12 h-0.5 bg-primary/40 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "A P Maurya",
                designation: "Executive Manager",
                photo: "/leaders/executive_manager.png",
                photoStyle: { objectPosition: "center 10%" },
                message:
                  "At our organization, we are committed to delivering government projects with structured planning, compliance, and accountability. Our focus remains on quality execution and long-term institutional trust. — Atul Prakash Maurya."
              },
              {
                name: "R M Gupta",
                designation: "Operational Manager",
                photo: "/leaders/operational_manager.jpeg",
                photoStyle: { objectPosition: "center 10%" },
                message:
                  "We ensure systematic coordination and timely execution across all engagements. Our operational framework is designed to maintain efficiency, transparency, and adherence to government standards. — Ram Manohar Gupta."
              },
              {
                name: "S M Gupta",
                designation: "Technical Head",
                photo: "/leaders/technical_head.JPG",
                photoStyle: { objectPosition: "33% center" },
                message:
                  "Our technical approach emphasizes precision, compliance, and sustainable implementation. We continuously strengthen our processes to meet evolving public sector requirements. — Shyam Manohar Gupta."
              },
            ].map((leader) => (
              <div key={leader.name} className="group relative">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10 rounded-xl blur-2xl transition-all duration-300 group-hover:blur-3xl"></div>
                <div className="relative backdrop-blur-lg bg-white/30 border border-white/50 rounded-xl p-6 shadow-lg hover:bg-white/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center min-h-[320px]">
                  {/* Avatar */}
                  <div className="w-36 h-36 rounded-full bg-white/50 border-2 border-white/60 shadow-md mb-5 flex items-center justify-center overflow-hidden shrink-0">
                    {leader.photo ? (
                      <Image
                        src={leader.photo}
                        alt={leader.name}
                        width={144}
                        height={144}
                        className="w-full h-full object-cover"
                        style={leader.photoStyle}
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full bg-primary/50"></div>
                      </div>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-secondary tracking-tight uppercase">
                    {leader.name}
                  </h3>
                  <p className="text-primary font-medium text-xs uppercase tracking-wider mt-1 mb-4">
                    {leader.designation}
                  </p>
                  <div className="w-8 h-0.5 bg-primary/30 rounded-full mb-4"></div>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {leader.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
