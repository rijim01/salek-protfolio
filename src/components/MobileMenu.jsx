import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  // Sections for scrolling within the homepage
  const sections = ["home", "about", "projects", "contact"];

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                 transition-all duration-300 ease-in-out
                 ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-blue-500 text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Home, About, Projects, Contact → HashLink scrolling */}
      {sections.map((sec) => (
        <HashLink
          key={sec}
          smooth
          to={`/#${sec}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {sec.charAt(0).toUpperCase() + sec.slice(1)}
        </HashLink>
      ))}

      {/* Publications → Separate route */}
      <Link
        to="/publications"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Publications
      </Link>
    </div>
  );
};
