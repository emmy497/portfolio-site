// PLACEHOLDER CONTENT — bio paragraphs copied from the reference design
// (start year, age range, stack, socials). Swap this for your real story
// before this goes live; specific claims like "began in 2015" or "early
// thirties" shouldn't be left in unless they're actually true for you.
const AboutMeSection = () => {
  return (
    <section
      id="about-me"
      className="px-4 py-12 sm:px-8 lg:px-[80px] lg:py-[60px] font-[Sora]"
    >
      <div className="mx-auto flex max-w-[1160px] flex-col gap-8 lg:flex-row lg:items-center lg:gap-[64px]">
        <img
          src="/images/about-me-illustration.png"
          alt="Illustration of me"
          className="w-full max-w-[320px] mx-auto lg:mx-0 lg:max-w-[530px] lg:w-[530px] aspect-[530/572] shrink-0 object-cover"
        />

        <div className="flex flex-col gap-4 lg:gap-[24px]">
          <div className="font-[400] text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-2%] text-black">
            About <span className="font-extrabold">Me</span>
          </div>

          <p className="text-[15px] lg:text-[16px] leading-relaxed text-black">
            I'm a passionate, self-proclaimed designer who specializes in
            full stack development (React.js &amp; Node.js). I am very
            enthusiastic about bringing the technical and visual aspects of
            digital products to life. User experience, pixel perfect design,
            and writing clear, readable, highly performant code matters to
            me.
          </p>

          <p className="text-[15px] lg:text-[16px] leading-relaxed text-black">
            I began my journey as a web developer in 2015, and since then,
            I've continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way.
            Now, in my early thirties, 7 years after starting my web
            development journey, I'm building cutting-edge web applications
            using modern technologies such as Next.js, TypeScript, Nestjs,
            Tailwindcss, Supabase and much more.
          </p>

          <p className="text-[15px] lg:text-[16px] leading-relaxed text-black">
            When I'm not in full-on developer mode, you can find me
            hovering around on twitter or on indie hacker, witnessing the
            journey of early startups or enjoying some free time. You can
            follow me on Twitter where I share tech-related bites and build
            in public, or you can follow me on GitHub.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
