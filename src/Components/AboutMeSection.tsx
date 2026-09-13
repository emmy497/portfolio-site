import Reveal from "./Reveal";
import { GITHUB, LINKEDIN } from "../data/socials";

const AboutMeSection = () => {
  return (
    <section
      id="about-me"
      className="px-4 py-12 sm:px-8 lg:px-[80px] lg:py-[60px] font-[Sora]"
    >
      <div className="mx-auto flex max-w-[1160px] flex-col gap-8 lg:flex-row lg:items-center lg:gap-[64px]">
        <Reveal className="lg:shrink-0">
          <img
            src="/images/about-me-illustration.png"
            alt="Illustration of me"
            className="w-full max-w-[320px] mx-auto lg:mx-0 lg:max-w-[530px] lg:w-[530px] aspect-[530/572] shrink-0 object-cover"
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="flex flex-col gap-4 lg:gap-[24px]">
            <div className="font-[400] text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-2%] text-black">
              About <span className="font-extrabold">Me</span>
            </div>

            <p className="text-[15px] lg:text-[16px] leading-relaxed text-black">
              I'm a software engineer based in Lagos, with a BSc in Computer
              Science from the University of Lagos. I build responsive,
              user-focused web applications — mostly React and TypeScript on the
              front end, with Node.js, Flask and Django behind them.
            </p>

            <p className="text-[15px] lg:text-[16px] leading-relaxed text-black">
              Most of my work has been on platforms real people depend on: an
              online learning platform serving 500+ students at Samiway, a
              customer self-service portal and analytics dashboards at ICSL, and
              WorkNest, a full-stack hiring platform I built end to end. I care
              about the parts that are easy to get quietly wrong — session
              handling, validation, and interfaces that stay fast as they grow.
            </p>

            <p className="text-[15px] lg:text-[16px] leading-relaxed text-black">
              I currently teach full-stack development at TechStudio Academy,
              working with cohorts of 20–40 students on everything from their
              first component to their first deployed project. Teaching has made
              me a noticeably better engineer — it's hard to hand-wave past
              something when someone is about to ask you why it works. You can
              find my code on{" "}
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                GitHub
              </a>{" "}
              or reach me on{" "}
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutMeSection;
