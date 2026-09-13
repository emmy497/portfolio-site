import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import type { IconType } from "react-icons";

export const EMAIL = "emmanuelisrael497@gmail.com";
export const GITHUB = "https://github.com/emmy497";
export const LINKEDIN =
  "https://www.linkedin.com/in/israel-emmanuel-3884bb241";

export interface SocialLink {
  href: string;
  label: string;
  Icon: IconType;
}

// Only profiles that actually exist — shared by the hero and the contact
// section so the two can't drift apart.
export const SOCIAL_LINKS: SocialLink[] = [
  { href: GITHUB, label: "GitHub", Icon: FaGithub },
  { href: LINKEDIN, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: `mailto:${EMAIL}`, label: "Email", Icon: MdMail },
];
