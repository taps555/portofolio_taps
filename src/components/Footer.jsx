import { SITE, SOCIALS } from "../lib/data";

export default function Footer() {
  return (
    <>
      {/* Footer 1 — off-white */}
      <footer className="bg-hermes-paper px-6 py-16 text-ink">
        <div className="mx-auto w-full max-w-[1232px] px-6 md:px-10">
          <p className="font-display text-[clamp(32px,5vw,48px)] font-normal uppercase leading-none">
            {SITE.name}
          </p>
          <p className="mt-3 font-display text-sm font-medium uppercase tracking-[1.4px]">
            {SITE.role}
          </p>
          <p className="mt-1 font-display text-sm font-medium uppercase tracking-[1.4px] opacity-60">
            {SITE.status}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-ink pt-6">
            <p className="font-display text-sm uppercase tracking-[1.4px] opacity-60">
              © {SITE.year} {SITE.fullName}
            </p>
            <div className="flex items-center gap-4 font-display text-sm uppercase tracking-[1.4px] opacity-60">
              <a href="#" className="transition-colors hover:text-hermes-accent">
                KETENTUAN
              </a>
              <span>|</span>
              <a href="#" className="transition-colors hover:text-hermes-accent">
                PRIVASI
              </a>
            </div>
            <a
              href="#top"
              className="font-display text-sm font-medium uppercase tracking-[1.4px] transition-colors hover:text-hermes-accent"
            >
              KEMBALI KE ATAS ↑
            </a>
          </div>
        </div>
      </footer>

      {/* Footer 2 — biru */}
      <footer className="bg-hermes px-6 pb-5 pt-16 text-paper-fg">
        <div className="mx-auto w-full max-w-[1232px] px-6 md:px-10">
          <p className="font-display text-[clamp(28px,5vw,48px)] font-normal uppercase leading-none">
            {SITE.fullName}
          </p>
          <p className="mt-3 font-display text-sm font-medium uppercase tracking-[1.4px] opacity-80">
            {SITE.tagline}
          </p>
          <a
            href={`mailto:${SOCIALS.email}`}
            className="mt-2 inline-block border-b border-paper-fg pb-0.5 font-display text-sm font-medium uppercase tracking-[1.4px] transition-colors hover:border-hermes-accent hover:text-hermes-accent"
          >
            {SOCIALS.email}
          </a>

          <div className="mt-12 grid grid-cols-1 gap-10 border-t border-paper-fg/20 pt-10 sm:grid-cols-3">
            <nav aria-label="Footer navigasi" className="flex flex-col gap-3">
              <span className="font-display text-sm font-medium uppercase tracking-[1.4px] opacity-60">
                MENU
              </span>
              <a
                href="#proyek"
                className="font-display text-sm uppercase tracking-[1.4px] transition-colors hover:text-hermes-accent"
              >
                PROYEK
              </a>
              <a
                href="#keahlian"
                className="font-display text-sm uppercase tracking-[1.4px] transition-colors hover:text-hermes-accent"
              >
                KEAHLIAN
              </a>
              <a
                href="#tentang"
                className="font-display text-sm uppercase tracking-[1.4px] transition-colors hover:text-hermes-accent"
              >
                TENTANG
              </a>
            </nav>

            <nav aria-label="Footer sosial" className="flex flex-col gap-3">
              <span className="font-display text-sm font-medium uppercase tracking-[1.4px] opacity-60">
                SOSIAL
              </span>
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noreferrer"
                className="font-display text-sm uppercase tracking-[1.4px] transition-colors hover:text-hermes-accent"
              >
                GITHUB
              </a>
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-display text-sm uppercase tracking-[1.4px] transition-colors hover:text-hermes-accent"
              >
                LINKEDIN
              </a>
              <a
                href={SOCIALS.instagram}
                target="_blank"
                rel="noreferrer"
                className="font-display text-sm uppercase tracking-[1.4px] transition-colors hover:text-hermes-accent"
              >
                INSTAGRAM
              </a>
            </nav>

            <nav aria-label="Footer lainnya" className="flex flex-col gap-3">
              <span className="font-display text-sm font-medium uppercase tracking-[1.4px] opacity-60">
                LAINNYA
              </span>
              <a
                href="#kontak"
                className="font-display text-sm uppercase tracking-[1.4px] transition-colors hover:text-hermes-accent"
              >
                KONTAK
              </a>
              <a
                href="#top"
                className="font-display text-sm uppercase tracking-[1.4px] transition-colors hover:text-hermes-accent"
              >
                KEMBALI KE ATAS
              </a>
            </nav>
          </div>

          <p className="mt-10 border-t border-paper-fg/20 pt-4 font-display text-sm uppercase tracking-[1.4px] opacity-60">
            MIT LICENSE · {SITE.year}
          </p>
        </div>
      </footer>
    </>
  );
}
