import { Instagram, Linkedin, Facebook } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/sierrabus", label: "Instagram" },
  { icon: Linkedin, href: "https://es.linkedin.com/company/sierrab-s", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/sierrabus/", label: "Facebook" },
];

const SocialSidebar = () => {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="w-9 h-9 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <s.icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
