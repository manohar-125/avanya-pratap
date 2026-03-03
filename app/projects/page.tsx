import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore completed infrastructure projects delivered by Avanya Pratap Service and Construction across central and state government departments nationwide.",
};

const completedProjects = [
  {
    title: "Rural Engineering Infrastructure",
    department: "Rural Engineering Department",
    year: "2025",
    description:
      "Delivered with structured planning and inter-department coordination across state rural engineering frameworks.",
  },
  {
    title: "Government Infrastructure Works",
    department: "Rural Development Department, Uttar Pradesh",
    year: "2024",
    description:
      "Executed with full adherence to government standards and compliance frameworks under national development schemes.",
  },
  {
    title: "Departmental Premises Work",
    department: "Commercial Tax Department, Uttar Pradesh",
    year: "2024",
    description:
      "Managed through systematic project governance ensuring quality assurance and regulatory compliance throughout.",
  },
  {
    title: "Welfare Infrastructure Works",
    department: "Department of Military Affairs",
    year: "2024",
    description:
      "Handled with precision and strict adherence to all departmental protocols, quality benchmarks, and timelines.",
  },
  {
    title: "Commission Premises Development",
    department: "State Consumer Disputes Redressal Commission",
    year: "2025",
    description:
      "Delivered with focus on timely execution and full compliance with government specification and safety standards.",
  },
  {
    title: "Institutional Infrastructure Works",
    department: "Higher Education Department, Uttar Pradesh",
    year: "2025",
    description:
      "Executed through coordinated project management aligned with departmental requirements and institutional quality norms.",
  },
  {
    title: "Panchayati Raj Infrastructure",
    department: "Panchayati Raj Department, Uttar Pradesh",
    year: "2025",
    description:
      "Managed with structured governance ensuring alignment with state-level panchayati raj directives and compliance standards.",
  },
  {
    title: "Rural Housing Mission Works",
    department: "Pradhan Mantri Awas Yojana \u2013 Gramin",
    year: "2025",
    description:
      "Delivered in strict compliance with national housing mission guidelines, quality assurance protocols, and project deadlines.",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-28 px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white/60 to-secondary/10"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block backdrop-blur-lg bg-white/40 border border-white/50 rounded-full px-5 py-2 mb-6 shadow-md">
              <span className="text-primary font-semibold text-sm tracking-wide">Our Portfolio</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-secondary tracking-tight mb-6">Our Projects</h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            A track record of compliant government project execution across
            multiple central and state departments nationwide.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-14 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { top: "140", bottom: "Completed Projects" },
              { top: "5", bottom: "Ongoing Projects" },
              { top: "Pan India", bottom: "Trusted Government Execution" },
            ].map((stat) => (
              <div key={stat.bottom} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl blur-2xl transition-all duration-300 group-hover:blur-3xl"></div>
                <div className="relative backdrop-blur-lg bg-white/30 border border-white/50 rounded-xl p-6 text-center shadow-lg hover:bg-white/40 hover:-translate-y-1 transition-all duration-300 h-52 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold text-primary mb-2 tracking-tight leading-none whitespace-nowrap">{stat.top}</div>
                  <p className="text-gray-600 font-medium text-sm uppercase tracking-wide whitespace-nowrap">{stat.bottom}</p>
                  <div className="mt-4 w-8 h-0.5 bg-primary/40 mx-auto rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-secondary tracking-tight mb-3">Completed Projects</h2>
            <div className="w-12 h-0.5 bg-primary/40 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {completedProjects.map((project, i) => (
              <div key={i} className="group relative flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-secondary/8 rounded-2xl blur-2xl transition-all duration-300 group-hover:blur-3xl"></div>
                <div className="relative flex-1 backdrop-blur-lg bg-white/30 border border-white/50 rounded-2xl p-5 shadow-2xl hover:bg-white/40 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-bold text-secondary tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    <span className="shrink-0 text-xs bg-white/60 text-gray-500 px-3 py-1 rounded-full font-semibold uppercase tracking-wider border border-white/50 shadow-sm">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-primary font-semibold text-xs uppercase tracking-wide">
                    {project.department}
                  </p>
                  <p className="text-gray-500 leading-relaxed text-xs flex-1">
                    {project.description}
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
