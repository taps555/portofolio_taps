import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TECHNOLOGIES } from "../lib/data";

export default function Technologies() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="bg-hermes-paper px-6 py-20">
      <div className="mx-auto w-full max-w-[1232px] px-6 py-10 md:px-10 md:py-[80px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-sm font-normal uppercase text-ink"
        >
          TEKNOLOGI
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="mt-6 max-w-[900px] font-display text-[clamp(32px,7vw,80px)] font-normal uppercase leading-[0.9] text-ink"
        >
          TOOLS YANG SAYA GUNAKAN SEHARI-HARI.
        </motion.h2>

        {/* Daftar teknologi — klik untuk highlight */}
        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-16">
          {TECHNOLOGIES.map((t, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.li
                key={t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 2) * 0.05,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="border-b border-ink"
              >
                <button
                  onClick={() => toggle(i)}
                  aria-pressed={isOpen}
                  className={`group flex w-full cursor-pointer items-center justify-between py-4 text-left font-display text-[clamp(28px,4vw,48px)] font-normal uppercase leading-none transition-colors duration-200 focus:outline-none ${
                    isOpen
                      ? "bg-ink text-hermes-accent"
                      : "text-ink hover:bg-ink hover:text-hermes-accent"
                  }`}
                >
                  <span>{t}</span>
                  <span className="font-display text-base font-medium uppercase tracking-[1.4px] opacity-60">
                    {isOpen ? "AKTIF" : "···"}
                  </span>
                </button>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
