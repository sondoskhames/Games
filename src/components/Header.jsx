import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const links = [
  { label: "Home", to: "/" },
  { label: "Our Shop", to: "/shop" },
  { label: "Product Details", to: "/product-details" },
  { label: "Contact Us", to: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `rounded-full px-5 py-2.5 text-[15px] text-white transition hover:bg-white/10 ${
      isActive ? "bg-white/10" : ""
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-brand transition-all ${
        scrolled ? "rounded-b-3xl py-3 shadow-lg" : "py-6"
      }`}
    >
      <div className="wrap flex items-center justify-between">
        <Logo />

        {/* قائمة الشاشات الكبيرة */}
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <NavLink key={l.label} to={l.to} end className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-coral ml-3">
            Sign In
          </Link>
        </nav>

        {/* زرار قائمة الموبايل */}
        <button
          className="text-3xl text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* قائمة الموبايل */}
      {open && (
        <nav className="wrap mt-4 flex flex-col gap-1 md:hidden">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              end
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-2 text-white hover:bg-white/10"
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-coral mt-2 text-center"
          >
            Sign In
          </Link>
        </nav>
      )}
    </header>
  );
}