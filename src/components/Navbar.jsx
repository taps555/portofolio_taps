import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NAV, SITE, SOCIALS } from "../lib/data";
import ThemeToggle from "./ThemeToggle";

function IconInstagram(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function IconLinkedin(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v2.5" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconGithub(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Navbar({ dark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  const socialLinks = [
    {
      label: "Instagram",
      href: SOCIALS.instagram,
      Icon: IconInstagram,
    },
    {
      label: "LinkedIn",
      href: SOCIALS.linkedin,
      Icon: IconLinkedin,
    },
    {
      label: "GitHub",
      href: SOCIALS.github,
      Icon: IconGithub,
    },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[110] mx-auto max-w-[1440px] transition-all duration-300 ${
        scrolled
          ? "bg-hermes border-b border-paper-fg/20 pt-3 pb-2"
          : "bg-transparent border-b border-transparent pt-[35px] pb-[17.5px]"
      }`}
    >
      {/* Desktop nav: grid 3 kolom, logo center */}
      <nav
        aria-label="Navigasi utama"
        className="mx-auto hidden w-full max-w-[1232px] items-center px-6 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-6"
      >
        <div className="flex justify-start gap-8">
          {NAV.left.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-sm font-medium uppercase tracking-[1.4px] text-paper-fg transition-colors duration-200 hover:text-hermes-accent"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#top"
          className="flex shrink-0 flex-col text-center font-display text-[32px] font-medium uppercase leading-[0.9] tracking-normal text-paper-fg"
        >
          <span>{SITE.name.split(" ")[0]}</span>
          <span>{SITE.name.split(" ")[1]}</span>
        </a>

        <div className="flex items-center justify-end gap-5">
          {NAV.right.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-sm font-medium uppercase tracking-[1.4px] text-paper-fg transition-colors duration-200 hover:text-hermes-accent"
            >
              {item.label}
            </a>
          ))}

          {/* Ikon sosial media */}
          <div className="flex items-center gap-1" aria-label="Sosial media">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="flex h-8 w-8 items-center justify-center text-paper-fg transition-colors duration-200 hover:text-hermes-accent"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>

          <ThemeToggle dark={dark} onToggle={onToggleTheme} />

          <a
            href={NAV.cta.href}
            className="border border-paper-fg bg-transparent px-4 py-2 font-display text-sm font-medium uppercase tracking-[1.4px] text-paper-fg transition-colors duration-200 hover:bg-paper-fg hover:text-hermes"
          >
            {NAV.cta.label}
          </a>
        </div>
      </nav>

      {/* Mobile nav */}
      <nav
        aria-label="Navigasi mobile"
        className="mx-auto flex w-full max-w-[1232px] items-center justify-between px-6 md:hidden"
      >
        <button
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-8 w-8 flex-col justify-center gap-[6px] border-none bg-transparent p-0"
        >
          <span
            className={`block h-[2px] w-6 bg-paper-fg transition-transform duration-300 ${
              open ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-paper-fg transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-paper-fg transition-transform duration-300 ${
              open ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </button>

        <a
          href="#top"
          onClick={close}
          className="flex flex-col text-center font-display text-2xl font-medium uppercase leading-[0.9] text-paper-fg"
        >
          <span>{SITE.name.split(" ")[0]}</span>
          <span>{SITE.name.split(" ")[1]}</span>
        </a>

        <div className="flex items-center gap-2">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-7 w-7 items-center justify-center text-paper-fg transition-colors hover:text-hermes-accent"
            >
              <Icon className="h-[15px] w-[15px]" />
            </a>
          ))}
          <ThemeToggle dark={dark} onToggle={onToggleTheme} />
        </div>
      </nav>

      {/* Mobile slide-in menu */}
      <motion.div
        initial={false}
        animate={{ x: open ? "0%" : "100%" }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="fixed inset-y-0 right-0 z-[120] flex w-[75%] max-w-xs flex-col gap-2 bg-hermes-paper px-8 pt-24 md:hidden"
      >
        {[...NAV.left, ...NAV.right].map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={close}
            className="border-b border-ink py-4 font-display text-3xl font-medium uppercase text-ink transition-colors hover:text-hermes-accent"
          >
            {item.label}
          </a>
        ))}

        {/* Sosial media di menu mobile */}
        <div className="mt-8 flex items-center gap-4">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center border border-ink text-ink transition-colors hover:bg-ink hover:text-hermes-accent"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
