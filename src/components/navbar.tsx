import { FiMessageCircle } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="flex items-center gap-2 font-medium tracking-wide text-lg"
        >
          <span className="inline-block w-7 h-7 rounded-md bg-[#FFD700]"></span>
          BARTECH
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `nav-link transition-colors ${
                isActive
                  ? "nav-link--active text-white"
                  : "text-white/90 hover:text-white"
              }`
            }
          >
            Ürünler
          </NavLink>
          <a
            href="https://wa.me/905323150744"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 hover:border-[#FFD700] hover:text-[#FFD700] transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            <FiMessageCircle /> WhatsApp
          </a>
        </nav>

        {/* Mobile inline actions (no hamburger) */}
        <div className="md:hidden flex items-center gap-4">
          <NavLink
            to="/products"
            className="text-white/90 hover:text-white transition-colors"
          >
            Ürünler
          </NavLink>
          <a
            href="https://wa.me/905323150744"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
            className="p-2 rounded-full border border-white/20 hover:border-[#FFD700] hover:text-[#FFD700] transition-colors"
          >
            <FiMessageCircle size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
