import { FiExternalLink } from "react-icons/fi";
import Reveal from "./Reveal";

// PLACEHOLDER CONTENT — titles and copy come from the reference design.
// Replace each entry with a real project before this goes live.
//
// To use a real screenshot: drop the file in public/images and set `image`
// to its path (e.g. "/images/crypto-screener.png"). Any project without an
// `image` renders a labelled placeholder block instead of a broken <img>.
interface Project {
  number: string;
  title: string;
  description: string;
  href: string;
  image?: string;
}

const PROJECTS: Project[] = [
  {
    number: "01",
    title: "Crypto Screener Application",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    href: "#",
  },
  {
    number: "02",
    title: "Euphoria - Ecommerce (Apparels) Website Template",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    href: "#",
  },
  {
    number: "03",
    title: "Blog Website Template",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    href: "#",
  },
];

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
        {PROJECTS.map(({ number, title, description, href, image }, index) => {
          // Alternating sides on desktop, matching the reference: 01 and 03
          // lead with the image, 02 leads with the text. On mobile everything
          // stacks image-first, so the order classes only apply from lg up.
          const imageFirst = index % 2 === 0;

          return (
            <Reveal key={number}>
              <article className="grid items-center gap-6 lg:grid-cols-2 lg:gap-[64px]">
                <a
                  href={href}
                  aria-label={`Open ${title}`}
                  className={`group block overflow-hidden rounded-[12px] bg-[#1A1A1A] ${
                    imageFirst ? "" : "lg:order-2"
                  }`}
                >
                  {image ? (
                    <img
                      src={image}
                      alt={title}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  ) : (
                    <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 border border-dashed border-white/20 px-4 text-center transition-colors duration-300 group-hover:border-white/40">
                      <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/40">
                        Screenshot
                      </span>
                      <span className="text-[15px] text-white/60">{title}</span>
                    </div>
                  )}
                </a>

                <div className={imageFirst ? "" : "lg:order-1"}>
                  <div className="text-[32px] lg:text-[48px] font-extrabold leading-none text-white">
                    {number}
                  </div>

                  <h3 className="mt-3 lg:mt-[20px] text-[20px] lg:text-[28px] font-bold leading-snug text-white">
                    {title}
                  </h3>

                  <p className="mt-3 lg:mt-[16px] text-[15px] lg:text-[16px] leading-relaxed text-white/60">
                    {description}
                  </p>

                  <a
                    href={href}
                    aria-label={`Open ${title}`}
                    className="mt-5 lg:mt-[24px] inline-flex h-[44px] w-[44px] items-center justify-center rounded-[4px] border-[2px] border-white/25 text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default MyProjectsSection;
