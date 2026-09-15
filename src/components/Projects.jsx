import { motion } from "framer-motion";
import { PROJECTS } from "../lib/data";
import CertificateStack from "./CertificateStack";

export default function Projects() {
  return (
    <section id="proyek" className="bg-hermes-paper px-6 py-20">
      <div className="mx-auto w-full max-w-[1232px] px-6 py-10 md:px-10 md:py-[80px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-sm font-normal uppercase text-ink"
        >
          PROYEK TERPILIH
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="mt-6 max-w-[900px] font-display text-[clamp(32px,7vw,80px)] font-normal uppercase leading-[0.9] text-ink"
        >
          PROJECT CLIENT & KARYA YANG PERNAH SAYA BANGUN.
        </motion.h2>

        <div className="mt-16">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="group grid cursor-pointer grid-cols-1 gap-6 border-b border-ink py-8 transition-colors duration-200 hover:bg-ink/5 md:grid-cols-[100px_1fr_auto] md:items-center md:gap-8 md:py-10"
            >
              {/* Nomor */}
              <span className="font-display text-[48px] font-light uppercase leading-none text-ink opacity-30 transition-opacity duration-200 group-hover:opacity-100">
                #{String(p.id).padStart(2, "0")}
              </span>

              {/* Info tengah */}
              <div>
                <h3 className="font-display text-2xl font-medium uppercase text-ink">
                  {p.name}
                </h3>
                <p className="mt-1 font-display text-sm font-medium uppercase tracking-[1.4px] text-ink opacity-60">
                  {p.category}
                </p>
                <p className="mt-3 max-w-[680px] font-body text-base text-ink/80">
                  {p.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="border border-ink px-2 py-1 font-display text-sm font-medium uppercase text-ink"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Kanan: tahun + stack sertifikat */}
              <div className="flex flex-row items-center gap-8 md:flex-col md:items-end md:gap-6">
                <span className="font-display text-2xl font-normal uppercase text-ink">
                  {p.year}
                </span>

                {/* Stack sertifikat untuk project ini */}
                {p.certificates && p.certificates.length > 0 && (
                  <CertificateStack
                    certificates={p.certificates}
                    accentColor="var(--color-hermes)"
                  />
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
