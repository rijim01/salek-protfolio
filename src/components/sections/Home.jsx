import { useState } from "react";
import { Link } from "react-router-dom";
import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaLinkedin,
  FaGithub,
  FaResearchgate,
  FaKaggle,
  FaGoogle,
} from "react-icons/fa";
import { SiOrcid } from "react-icons/si";

export const Home = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center 
                 relative bg-black 
                 pt-24 sm:pt-28"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-3xl mx-auto">
          {/* ===== NAME ===== */}
          <h1
            className="text-4xl sm:text-5xl md:text-7xl 
                       font-bold mb-6 
                       bg-linear-to-r from-blue-500 to-cyan-400 
                       bg-clip-text text-transparent 
                       leading-snug"
          >
            Md Salek Miah
          </h1>

          {/* ===== INTRO (always visible) ===== */}
          <p className="text-gray-400 text-base sm:text-lg mb-4">
            I am a <strong>Research Assistant</strong> at Shahjalal University of
            Science and Technology (SUST), Sylhet, specializing in{" "}
            <strong>Public Health, Bioinformatics, and Data Science</strong>.
          </p>

          {/* ===== EXTRA TEXT (mobile toggle) ===== */}
          <div className={`${expanded ? "block" : "hidden"} md:block`}>
            <p className="text-gray-400 text-base sm:text-lg mb-6">
              I collaborate with multidisciplinary teams, applying statistical
              modeling, spatial epidemiology, and machine learning to generate
              evidence-based insights. My goal is to bridge the gap between
              theoretical research and practical implementation.
            </p>
          </div>

          {/* ===== SEE MORE / LESS (mobile only) ===== */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="md:hidden mb-6 text-blue-400 hover:text-blue-300 transition"
          >
            {expanded ? "See less ↑" : "See more ↓"}
          </button>

          {/* ===== CTA BUTTONS ===== */}
          <div className="flex justify-center flex-wrap gap-4 mb-8">
            <Link
              to="/publications"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium 
                         transition hover:-translate-y-0.5 
                         hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Publications
            </Link>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 
                         rounded font-medium transition 
                         hover:-translate-y-0.5 
                         hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] 
                         hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>

          {/* ===== SOCIAL LINKS ===== */}
          <div className="flex justify-center flex-wrap gap-6 text-white text-2xl">
            <a
              href="https://www.linkedin.com/in/md-salek-miah-b34309329"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/muhammadsalek"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.researchgate.net/profile/Md-Miah-142"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaResearchgate />
            </a>
            <a
              href="https://orcid.org/0009-0005-5973-461X"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <SiOrcid />
            </a>
            <a
              href="https://www.kaggle.com/muhammadsalekmiah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <FaKaggle />
            </a>
            <a
              href="https://scholar.google.com/citations?user=oV99NYoAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <FaGoogle />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
