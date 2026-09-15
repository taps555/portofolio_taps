import { motion } from "framer-motion";
import { ABOUT_TEXT, STATS } from "../lib/data";

export default function About() {
  return (
    <section id="tentang" className="bg-hermes px-6 py-20">
      <div className="mx-auto w-full max-w-[1232px] px-6 py-10 md:px-10 md:py-[80px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-sm font-normal uppercase text-paper-fg"
        >
          SEDIKIT TENTANG SAYA
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="mt-6 max-w-[900px] font-display text-[clamp(32px,7vw,80px)] font-normal uppercase leading-[0.9] text-paper-fg"
        >
          DEVELOPER YANG MEMBANGUN DARI NOL.
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[2fr_3fr] md:gap-16">
          {/* Terminal dekoratif */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="border border-paper-fg/30 p-5 font-body text-sm leading-relaxed text-paper-fg/80"
          >
            <div className="mb-4 flex items-center gap-2 border-b border-paper-fg/20 pb-3">
              <span className="h-2.5 w-2.5 border border-paper-fg/60" />
              <span className="h-2.5 w-2.5 border border-paper-fg/60" />
              <span className="h-2.5 w-2.5 border border-paper-fg/60" />
              <span className="ml-2 font-display text-xs uppercase tracking-[1.4px] opacity-60">
                trio@dev:~
              </span>
            </div>
            <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed md:text-sm">
{`> whoami
fullstack_developer + ai_engineer
> cat skills.json
{ "frontend": ["react", "next.js"],
  "backend": ["node", "python"],
  "ai": ["llm", "automation"] }
> status
currently building new things_`}
            </pre>
          </motion.div>

          {/* Teks */}
          <div>
            {ABOUT_TEXT.map((t, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="mb-6 max-w-[680px] font-body text-base text-paper-fg/90 md:text-lg"
              >
                {t}
              </motion.p>
            ))}

            {/* Statistik */}
            <div className="mt-10 grid grid-cols-2 gap-px bg-paper-fg/20 md:grid-cols-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="bg-hermes p-5"
                >
                  <span className="font-display text-[48px] font-normal uppercase leading-none text-hermes-accent">
                    {s.value}
                  </span>
                  <p className="mt-3 font-display text-sm font-medium uppercase tracking-[1.4px] text-paper-fg opacity-60">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
