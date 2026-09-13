import { useState } from "react";
import type { FormEvent } from "react";
import { SOCIAL_LINKS, EMAIL } from "../data/socials";
import Reveal from "./Reveal";

const FIELD_CLASSES =
  "w-full rounded-[4px] border-[2px] border-black/15 bg-white px-4 py-3 text-[15px] text-black placeholder:text-black/40 transition-colors duration-200 focus:border-black focus:outline-none";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [error, setError] = useState("");

  const update = (field: keyof typeof form) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (error) setError("");
  };

  // No backend yet, so this hands off to the visitor's mail client with
  // everything pre-filled — which genuinely works rather than pretending to
  // send. To switch to a real endpoint later, replace the window.location
  // line with a fetch() POST; nothing else here needs to change.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.message.trim()) {
      setError("Please tell me how I can help.");
      return;
    }

    const body = [
      `Name: ${form.name || "—"}`,
      `Email: ${form.email || "—"}`,
      `Website: ${form.website || "—"}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Portfolio enquiry from ${form.name || "someone"}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="px-4 py-12 sm:px-8 lg:px-[80px] lg:py-[60px] font-[Sora]"
    >
      <div className="mx-auto grid max-w-[1160px] gap-10 lg:grid-cols-2 lg:gap-[80px] lg:items-center">
        <Reveal>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            noValidate
          >
            <input
              type="text"
              value={form.name}
              onChange={(e) => update("name")(e.target.value)}
              placeholder="Your name"
              aria-label="Your name"
              className={FIELD_CLASSES}
            />
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email")(e.target.value)}
              placeholder="Email"
              aria-label="Email"
              className={FIELD_CLASSES}
            />
            <input
              type="url"
              value={form.website}
              onChange={(e) => update("website")(e.target.value)}
              placeholder="Your website (If exists)"
              aria-label="Your website (if it exists)"
              className={FIELD_CLASSES}
            />
            <textarea
              value={form.message}
              onChange={(e) => update("message")(e.target.value)}
              placeholder="How can I help?*"
              aria-label="How can I help?"
              rows={5}
              className={`${FIELD_CLASSES} resize-y min-h-[120px]`}
            />

            {error && (
              <p role="alert" className="text-[14px] text-[#B4552D]">
                {error}
              </p>
            )}

            <div className="mt-2 flex flex-wrap items-center gap-4 sm:gap-[32px]">
              <button
                type="submit"
                className="rounded-[4px] bg-black px-6 py-[14px] text-[15px] font-semibold text-white transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:bg-black/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Get In Touch
              </button>

              <div className="flex gap-3 sm:gap-4">
                {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                    className="flex h-[44px] w-[44px] items-center justify-center rounded-[4px] border-[2px] border-black bg-white text-black transition-colors duration-200 hover:bg-black hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </form>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex flex-col gap-4 lg:gap-[24px]">
            <h2 className="font-[400] text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-2%] text-black">
              Let's <span className="font-extrabold">talk</span> for
              <br className="hidden sm:block" /> Something special
            </h2>

            <p className="text-[15px] lg:text-[16px] leading-relaxed text-[#71717A]">
              I'm open to backend and full-stack roles, and to interesting
              freelance work. Tell me what you're building and I'll get back to
              you.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 w-fit text-[17px] lg:text-[22px] font-bold break-all text-black underline-offset-4 transition-colors duration-200 hover:underline"
            >
              {EMAIL}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
