import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const location = useLocation(); // to detect current path

  const sections = ["home", "about", "projects", "contact"];

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <HashLink smooth to="/#home" className="font-mono text-xl font-bold text-white">
            Md<span className="text-blue-500"> Salek Miah</span>
          </HashLink>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {sections.map((sec) => (
              <HashLink
                key={sec}
                smooth
                to={location.pathname === "/" ? `#${sec}` : `/#${sec}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </HashLink>
            ))}

            {/* Publications goes to a separate page */}
            <Link to="/publications" className="text-gray-300 hover:text-white transition-colors">
              Publications
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
