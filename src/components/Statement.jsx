import { motion } from "framer-motion";

export default function Statement() {
  return (
    <section className="bg-hermes px-6 py-[60px]">
      <div className="mx-auto w-full max-w-[1232px] px-6 py-[60px] md:px-10 md:py-[120px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mx-auto max-w-[1000px] text-center font-display text-[clamp(28px,5vw,48px)] font-normal uppercase leading-[1.1] text-paper-fg"
        >
          SAYA TIDAK HANYA MENULIS KODE — SAYA{" "}
          <span className="text-hermes-accent">MEMBANGUN SISTEM</span> YANG
          MEMBANTU IDE BEKERJA.
        </motion.h2>
      </div>
    </section>
  );
}
