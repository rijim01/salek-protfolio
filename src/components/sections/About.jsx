import { RevealOnScroll } from "../RevealOnScroll";
import { Link } from "react-router-dom";
import { useState } from "react";

// Example: Only first 4 publications for Home
const selectedPublications = [
  {
    title:
      "Associations of Internet Use and Pregnancy Loss with Depression and Anxiety among Women in Bangladesh",
    journal: "BMC Women’s Health (Q1)",
    year: "2025",
    status: "Published",
    doi: "https://doi.org/10.1186/s12905-025-04166-4",
  },
  {
    title:
      "Machine Learning Analysis of Factors Influencing Skilled Birth Attendance in Burkina Faso",
    journal: "Scientific Reports (Q1)",
    status: "Under Review",
  },
  {
    title:
      "Exploring Determinants and Spatial Inequalities of Quality Antenatal Care in Nepal",
    journal: "Scientific Reports (Q1)",
    status: "Under Review",
  },
  {
    title:
      "Identifying Key Determinants and Spatial Insights of Skilled Birth Assistance in Bangladesh",
    journal: "Scientific Reports (Q1)",
    status: "Under Review",
  },
];

const statsSkills = [
  "Multilevel Modeling",
  "Survival Analysis",
  "Structural Equation Modeling",
  "Complex Survey Analysis",
  "Epidemiology",
  "Machine Learning Algorithms",
];

const tools = ["R Studio", "Python", "STATA", "SPSS", "MySQL", "ArcGIS"];

export const About = () => {
  const [expanded, setExpanded] = useState(false)
  
  return (
    <section
      id="about"
      className="min-h-screen py-20 flex items-center justify-center bg-black"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 text-gray-300">
          <h2 className="text-4xl font-bold mb-12 text-center bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          {/* ===== Profile ===== */}
          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all mb-10">
            {/* Always visible */}
            <p className="mb-4">
              Hi, I’m <strong>Md Salek Miah</strong>, a passionate Statistician
              and Data Scientist specializing in Epidemiology, Public Health,
              and Machine Learning. I enjoy transforming complex survey data
              into actionable insights and applying advanced statistical
              modeling to solve real-world health problems.
            </p>

            {/* Hidden on small screens unless expanded */}
            <div className={`${expanded ? "block" : "hidden"} md:block`}>
              <p>
                I thrive in collaborative research environments and continuously
                seek opportunities to expand my expertise in data-driven public
                health solutions, spatial epidemiology, and machine learning
                applications.
              </p>
            </div>

            {/* See More / See Less — ONLY on small screens */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 text-blue-400 hover:text-blue-300 transition md:hidden"
            >
              {expanded ? "See less ↑" : "See more ↓"}
            </button>
          </div>
          {/* ===== Selected Publications ===== */}
          <h3 className="text-2xl font-bold mb-6 text-white">
            Selected Publications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {selectedPublications.map((pub, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition bg-white/5"
              >
                <h4 className="text-lg font-semibold text-white">
                  {pub.title}
                </h4>
                <p className="text-sm text-blue-400">
                  {pub.journal} {pub.year && `• ${pub.year}`}
                </p>
                <span className="inline-block mt-2 mb-3 text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">
                  {pub.status}
                </span>
                {pub.doi && (
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    View DOI →
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mb-10">
            <Link
              to="/publications"
              className="px-6 py-3 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition"
            >
              See all publications →
            </Link>
          </div>

          {/* ===== Research Experience ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition bg-white/5">
              <h3 className="text-xl font-bold mb-4">Research Experience</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Research Assistant — Biostatistics, Epidemiology & Public
                  Health, SUST, Sylhet
                </li>
                <li>
                  Contributed to 10 manuscripts under review in WoS Q1 journals
                </li>
                <li>
                  Conducted statistical analyses, machine learning modeling, and
                  spatial data interpretation
                </li>
                <li>
                  Current project: Impact of Pesticides on Farmers’ Health,
                  North-Eastern Bangladesh (2025–26)
                </li>
                <li>
                  Participated in Research & Higher Study Training Program at
                  Cognitive Solution Bangladesh (CSBD)
                </li>
              </ul>
            </div>

            {/* ===== Education & Training ===== */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition bg-white/5">
              <h3 className="text-xl font-bold mb-4">
                Education & Certifications
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  B.Sc. (Hons.) in Statistics — Shahjalal University of Science
                  and Technology, Sylhet
                </li>
                <li>
                  Data Science & Machine Learning with Python — Coursera, 2025
                </li>
                <li>Data Analysis with R — IBM via Coursera, 2024</li>
                <li>
                  Exploratory Data Analysis for Machine Learning — IBM, 2025
                </li>
              </ul>
            </div>
          </div>

          {/* ===== Skills ===== */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition bg-white/5">
            <h3 className="text-xl font-bold mb-4">Skills & Tools</h3>
            <p className="mb-2">Statistics & Machine Learning:</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {statsSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="mb-2">Tools & Technologies:</p>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* ===== Awards & Affiliations ===== */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition bg-white/5 mt-10">
            <h3 className="text-xl font-bold mb-4">Awards & Affiliations</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                Winner, DNA Day Writing Contest – ISCB RSG Bangladesh, 2025
              </li>
              <li>
                Top 10 Performer, Data Hackathon – Comilla University, 2025
              </li>
              <li>
                Research Collaborator, Biostatistics & Epidemiology Research
                Team, SUST
              </li>
              <li>
                Member, International Society for Computational Biology (ISCB)
              </li>
              <li>Member, Bangladesh Statistical Association (BSA)</li>
              <li>
                Member, Daffodil International University Research Society
              </li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
