const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 px-4 py-8 sm:px-8 lg:px-[80px] font-[Sora]">
      <div className="mx-auto flex max-w-[1160px] flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <a href="#about" className="font-extrabold text-black">
          Emmy.js
        </a>

        <div className="flex flex-col gap-1 text-[14px] text-[#71717A] sm:items-end">
          <span>&copy; {year} Emmanuel. All rights reserved.</span>
          <span>Built with React &amp; Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
