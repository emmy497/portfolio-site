import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import Reveal from "./Reveal";

// To add a screenshot: save the file into public/images with the exact name
// below. Any project without its file on disk falls back to a labelled
// placeholder block rather than a broken <img>.
interface Project {
  number: string;
  title: string;
  stack: string;
  description: string;
  href: string;
  image?: string;
}

const PROJECTS: Project[] = [
  {
    number: "01",
    title: "Estatery — Real Estate Platform",
    stack: "React · TypeScript · Tailwind CSS",
    description:
      "A property rental platform with dynamic search, filtering and listing management. Built on modular components and responsive layouts, scoring 95% on mobile accessibility.",
    href: "https://esstatery-front.vercel.app/",
    image: "/images/estatery.png",
  },
  {
    number: "02",
    title: "WorkNest — Hiring Platform",
    stack: "React · TypeScript · Node.js · MongoDB",
    description:
      "A hiring hub where companies post roles and every candidate is reviewed by a person. Full-stack build: JWT sessions, OTP email verification with hashed, expiring codes, role-based dashboards and Cloudinary uploads.",
    href: "https://work-nest-front.vercel.app/",
    image: "/images/worknest.png",
  },
  {
    number: "03",
    title: "Samiway — Learning Platform",
    stack: "React · Flask · Tailwind CSS",
    description:
      "Interactive learning modules with built-in quiz functionality, serving 500+ students. Integrated with the backend API to synchronise progress tracking and course data.",
    href: "https://samiway.com/",
    image: "/images/samiway.png",
  },
];

const Placeholder = ({ title }: { title: string }) => (
  <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 border border-dashed border-white/20 px-4 text-center transition-colors duration-300 group-hover:border-white/40">
    <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/40">
      Screenshot
    </span>
    <span className="text-[15px] text-white/60">{title}</span>
  </div>
);

const Thumb = ({ image, title }: { image?: string; title: string }) => {
  // A missing file would otherwise render as a broken-image icon, which looks
  // far worse than the placeholder. Fall back on the first load error.
  const [failed, setFailed] = useState(false);

  if (!image || failed) return <Placeholder title={title} />;

  return (
    <>
      {/* Desaturated at rest, full colour on hover — the screenshots are busy,
          and this keeps the section reading as one piece until you engage
          with a card. */}
      <img
        src={image}
        alt={`${title} screenshot`}
        loading="lazy"
        onError={() => setFailed(true)}
        className="aspect-[16/10] w-full object-cover object-top grayscale transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/45 transition-opacity duration-500 ease-out group-hover:opacity-0 motion-reduce:transition-none"
      />
    </>
  );
};

const MyProjectsSection = () => {
  return (
    <section
      id="project"
      className="bg-black px-4 py-12 sm:px-8 lg:px-[80px] lg:py-[60px] font-[Sora]"
    >
      <Reveal>
        <div className="text-center font-[400] text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-2%] text-white mb-8 lg:mb-[48px]">
          My <span className="font-extrabold">Projects</span>
        </div>
      </Reveal>

      <div className="mx-auto flex max-w-[1160px] flex-col gap-12 lg:gap-[80px]">
        {PROJECTS.map(
          ({ number, title, stack, description, href, image }, index) => {
            // Alternating sides on desktop, matching the reference: 01 and 03
            // lead with the image, 02 leads with the text. On mobile everything
            // stacks image-first, so the order classes only apply from lg up.
            const imageFirst = index % 2 === 0;

            return (
              <Reveal key={number}>
                <article className="grid items-center gap-6 lg:grid-cols-2 lg:gap-[64px]">
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${title}`}
                    className={`group relative block overflow-hidden rounded-[12px] bg-[#1A1A1A] ${
                      imageFirst ? "" : "lg:order-2"
                    }`}
                  >
                    <Thumb image={image} title={title} />
                  </a>

                  <div className={imageFirst ? "" : "lg:order-1"}>
                    <div className="text-[32px] lg:text-[48px] font-extrabold leading-none text-white">
                      {number}
                    </div>

                    <h3 className="mt-3 lg:mt-[20px] text-[20px] lg:text-[28px] font-bold leading-snug text-white">
                      {title}
                    </h3>

                    <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-white/40">
                      {stack}
                    </p>

                    <p className="mt-3 lg:mt-[16px] text-[15px] lg:text-[16px] leading-relaxed text-white/60">
                      {description}
                    </p>

                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 lg:mt-[24px] inline-flex items-center gap-2 rounded-[4px] border-[2px] border-white/25 px-4 py-[10px] text-[14px] font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      View live site
                      <FiExternalLink size={16} />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          },
        )}
      </div>
    </section>
  );
};

export default MyProjectsSection;
