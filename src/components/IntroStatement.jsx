import { motion } from "framer-motion";

export default function IntroStatement() {
  return (
    <section className="bg-hermes px-6 py-20">
      <div className="mx-auto w-full max-w-[1232px] px-6 py-10 md:px-10 md:py-[80px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-[900px] font-display text-[clamp(28px,5vw,48px)] font-normal uppercase leading-[1.1] text-paper-fg"
        >
          TEKNOLOGI YANG BAIK BUKAN HANYA TERLIHAT CANGGIH — TETAPI{" "}
          <span className="text-hermes-accent">MENYELESAIKAN MASALAH</span>.
        </motion.h2>
      </div>
    </section>
  );
}
