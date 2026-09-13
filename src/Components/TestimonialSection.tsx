import Reveal from "./Reveal";

// PLACEHOLDER CONTENT — names and quotes come from the reference design.
// These are not real testimonials; replace them with genuine ones (or remove
// the section) before this goes live.
//
// `avatar` is optional: without one, the card falls back to the person's
// initials rather than a broken image.
interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    name: "Evren Shah",
    role: "Designer",
  },
  {
    quote:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    name: "Flora Sheen",
    role: "Designer",
  },
  {
    quote:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    name: "Evren Shah",
    role: "Designer",
  },
];

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const TestimonialSection = () => {
  return (
    <section
      id="testimonial"
      className="px-4 py-12 sm:px-8 lg:px-[80px] lg:py-[60px] font-[Sora]"
    >
      <Reveal>
        <div className="text-center font-[400] text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-2%] text-black mb-8 lg:mb-[48px]">
          My <span className="font-extrabold">Testimonial</span>
        </div>
      </Reveal>

      <div className="mx-auto grid max-w-[1160px] gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[32px]">
        {TESTIMONIALS.map(({ quote, name, role, avatar }, index) => {
          // The middle card is inverted in the reference. On a two-column
          // tablet layout that would land in an odd spot, so the fill is tied
          // to the index and simply travels with it.
          const filled = index === 1;

          return (
            <Reveal key={`${name}-${index}`} delay={index * 120} className="h-full">
              <figure
                className={`flex h-full flex-col items-center gap-5 rounded-[12px] border p-6 lg:p-[32px] text-center transition-transform duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
                  filled
                    ? "bg-black border-black text-white"
                    : "bg-white border-black/10 text-black shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
                }`}
              >
                {avatar ? (
                  <img
                    src={avatar}
                    alt={name}
                    className="h-[64px] w-[64px] shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <span
                    className={`flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full text-[18px] font-bold ${
                      filled ? "bg-white/10 text-white" : "bg-black/5 text-black"
                    }`}
                  >
                    {initialsOf(name)}
                  </span>
                )}

                <blockquote
                  className={`text-[15px] lg:text-[16px] font-semibold leading-relaxed ${
                    filled ? "text-white" : "text-black"
                  }`}
                >
                  {quote}
                </blockquote>

                <hr
                  className={`w-[56px] border-t ${
                    filled ? "border-white/25" : "border-black/15"
                  }`}
                />

                <figcaption className="flex flex-col gap-1">
                  <span className="text-[16px] font-bold">{name}</span>
                  <span
                    className={`text-[14px] ${
                      filled ? "text-white/60" : "text-black/50"
                    }`}
                  >
                    {role}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialSection;
