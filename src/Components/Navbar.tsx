import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

// Plain <a href="#..."> on purpose, not react-router's NavLink/Link — these
// are same-page anchors, not routes. NavLink intercepts the click and does
// client-side routing instead, which skips the browser's native "scroll to
// the element with this id" behavior entirely (that's what index.css's
// `scroll-behavior: smooth` is animating).
const NAV_LINKS = [
  { href: "#about", label: "About Me" },
  { href: "#skills", label: "Skills" },
  { href: "#project", label: "Project" },
  { href: "#contact", label: "Contact Me" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative font-[Sora]">
      <div className="flex px-4 py-[24px] sm:px-8 lg:px-[80px] justify-between items-center">
        <div className="font-extrabold ">Emmy.js</div>

        <div className="hidden lg:flex gap-[32px] items-center text-[20px] font-[600] font-semibold leading-[24px] tracking-[-2%] capitalize    ">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </div>

        <a
          href="/IsraelEmmanuel.pdf"
          download="Emmanuel-Israel-CV.pdf"
          className="hidden lg:flex bg-[#000000] items-center gap-[8px] cursor-pointer text-white py-[16px] px-[20px] rounded-[4px] transition-transform duration-200 ease-out hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          Resume
          <img src="/images/download.png" alt="" />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="lg:hidden flex items-center justify-center"
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* mobile menu panel — always mounted (not `menuOpen &&`) so the
          grid-rows transition below can actually animate; a conditionally
          rendered element has no "before" state to transition from. */}
      <div
        aria-hidden={!menuOpen}
        className={`lg:hidden absolute inset-x-0 top-full z-20 grid transition-[grid-template-rows] duration-300 ease-in-out ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`flex flex-col gap-4 border-t border-black bg-white px-4 py-6 sm:px-8 text-[18px] font-[600] capitalize transition-opacity duration-300 ${
              menuOpen ? "opacity-100 delay-100" : "opacity-0"
            }`}
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                tabIndex={menuOpen ? undefined : -1}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="/IsraelEmmanuel.pdf"
              download="Emmanuel-Israel-CV.pdf"
              tabIndex={menuOpen ? undefined : -1}
              onClick={() => setMenuOpen(false)}
              className="bg-[#000000] flex w-fit items-center gap-[8px] cursor-pointer text-white py-[12px] px-[18px] rounded-[4px]"
            >
              Resume
              <img src="/images/download.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
