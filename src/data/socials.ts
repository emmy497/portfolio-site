import {
  FaFacebookF,
  FaRedditAlien,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export interface SocialLink {
  href: string;
  label: string;
  Icon: IconType;
}

// Shared by the hero and the contact section so the two can't drift apart.
// Swap the "#" placeholders for your real profile URLs.
export const SOCIAL_LINKS: SocialLink[] = [
  { href: "#", label: "Facebook", Icon: FaFacebookF },
  { href: "#", label: "Reddit", Icon: FaRedditAlien },
  { href: "#", label: "Twitter", Icon: FaTwitter },
  { href: "#", label: "Discord", Icon: FaDiscord },
];
