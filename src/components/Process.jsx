import { motion } from "framer-motion";
import { PROCESS } from "../lib/data";

export default function Process() {
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
          DARI MASALAH MENJADI PRODUK
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="mt-6 max-w-[900px] font-display text-[clamp(32px,7vw,80px)] font-normal uppercase leading-[0.9] text-ink"
        >
          CARA KERJA SAYA.
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
          {PROCESS.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="relative border-t border-ink pt-6"
            >
              <span className="font-display text-[48px] font-light uppercase leading-none text-ink opacity-30">
                {step.id}
              </span>
              <h3 className="mt-3 font-display text-2xl font-medium uppercase text-ink">
                {step.title}
              </h3>
              <p className="mt-2 font-body text-base text-ink/80">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
