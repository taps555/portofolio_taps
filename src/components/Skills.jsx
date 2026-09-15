import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS } from "../lib/data";

export default function Skills() {
  const [openSkill, setOpenSkill] = useState(null);

  const toggle = (id) => setOpenSkill((prev) => (prev === id ? null : id));

  return (
    <section id="keahlian" className="bg-hermes px-6 py-20">
      <div className="mx-auto w-full max-w-[1232px] px-6 py-10 md:px-10 md:py-[80px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-sm font-normal uppercase text-paper-fg"
        >
          APA YANG SAYA KERJAKAN
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="mt-6 max-w-[900px] font-display text-[clamp(32px,7vw,80px)] font-normal uppercase leading-[0.9] text-paper-fg"
        >
          KEAHLIAN YANG SAYA KUASAI.
        </motion.h2>

        {/* Accordion keahlian */}
        <div className="mt-4">
          {SKILLS.map((s, i) => {
            const isOpen = openSkill === s.id;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.05,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="border-b border-paper-fg/20"
              >
                <button
                  onClick={() => toggle(s.id)}
                  aria-expanded={isOpen}
                  className="group flex w-full cursor-pointer items-center justify-between gap-4 py-7 text-left transition-colors duration-200 hover:bg-paper-fg/5 focus:outline-none"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-display text-[48px] font-light uppercase leading-none text-paper-fg opacity-30 transition-opacity duration-200 group-hover:opacity-100">
                      {String(s.id).padStart(2, "0")}
                    </span>
                    <h3
                      className={`font-display text-2xl font-medium uppercase transition-colors duration-200 md:text-3xl ${
                        isOpen ? "text-hermes-accent" : "text-paper-fg group-hover:text-hermes-accent"
                      }`}
                    >
                      {s.title}
                    </h3>
                  </div>

                  <span
                    className={`shrink-0 border border-paper-fg px-4 py-2 font-display text-sm font-medium uppercase tracking-[1.4px] transition-all duration-200 group-hover:bg-paper-fg group-hover:text-hermes ${
                      isOpen ? "bg-hermes-accent border-hermes-accent text-hermes" : "bg-transparent text-paper-fg"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[680px] pb-8 pl-[76px] font-body text-base text-paper-fg/80 md:pl-[88px] md:text-lg">
                        {s.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
