import { RevealOnScroll } from "../components/RevealOnScroll.jsx";
import { publicationsData } from "../assets/publicationsData.js";

export const PublicationsPage = () => {
  return (
    <section className="min-h-screen py-24 bg-black">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center text-white">
            All Publications
          </h1>
          {publicationsData.map((pub, index) => (
            <PublicationCard key={index} {...pub} />
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};

// Card Component (reuse same as in Home section)
const PublicationCard = ({ title, journal, year, status, description, methods, doi }) => {
  return (
    <div className="mb-6 p-6 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/40 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition">
      <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
      <p className="text-sm text-blue-400 mb-1">{journal} {year && `• ${year}`}</p>
      <span className="inline-block mb-3 text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">{status}</span>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {methods.map((m, i) => (
          <span key={i} className="text-xs bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full">{m}</span>
        ))}
      </div>
      {doi && <a href={doi} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">View DOI →</a>}
    </div>
  );
};
