import { SOCIAL_LINKS } from "../data/socials";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 px-4 py-8 sm:px-8 lg:px-[80px] font-[Sora]">
      <div className="mx-auto flex max-w-[1160px] flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <a href="#about" className="font-extrabold text-black">
          Emmy.js
        </a>

        <div className="flex gap-3">
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="flex h-[36px] w-[36px] items-center justify-center rounded-[4px] text-black/60 transition-colors duration-200 hover:bg-black hover:text-white"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <span className="text-[14px] text-[#71717A]">
          &copy; {year} Emmanuel Israel
        </span>
      </div>
    </footer>
  );
};

export default Footer;
