import { SOCIAL_LINKS } from "../data/socials";

const HeaderSection = () => {
  return (
    <section
      id="about"
      className="px-4 py-10 sm:px-8 lg:px-[80px] lg:py-[60px] font-[Sora] flex flex-col-reverse lg:flex-row lg:justify-between lg:items-end gap-8 lg:gap-[20px]"
    >
      <div className="relative z-10 w-full lg:min-w-[500px] lg:max-w-[560px] flex flex-col gap-[20px]">
        <div className="text-[28px] lg:text-[48px] font-[800] font-extrabold lg:font-[400] lg:font-regular leading-[32px] lg:leading-[56px] tracking-[-2%] text-[#000000]    ">
          Hello i'm{" "}
          <span className="font-[800] font-extrabold    ">Emmanuel.</span>
        </div>
        <div className="text-[28px] lg:text-[48px] font-[800] font-extrabold lg:font-[400] lg:font-regular leading-[32px] lg:leading-[56px] tracking-[-2%] text-[#000000]    ">
          {" "}
          <span className="font-[800] font-extrabold    ">Fullstack</span>{" "}
          Developer
        </div>

        <div className="font-[400] font-regular text-[16px] leading-[24px] tracking-[2%] text-[#71717A]    ">
          I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to specimen book.
        </div>

        <div className="mt-8 lg:mt-[50px] flex gap-4 sm:gap-[32px]">
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex w-[48px] h-[48px] gap-[8px] p-[12px] items-center justify-center rounded-[4px] border-[2px] border-black bg-white text-black opacity-100 transition-colors hover:bg-black hover:text-white"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <img
        className="w-full h-auto max-w-[280px] sm:max-w-[360px] lg:max-w-[520px] mx-auto lg:mx-0 flex-1 min-w-0  "
        src="/images/Banner.png"
        alt="banner"
      />
    </section>
  );
};

export default HeaderSection;
