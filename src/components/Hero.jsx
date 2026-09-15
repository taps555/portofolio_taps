import { motion } from "framer-motion";
import heroArt from "../assets/trio-hero.png";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const line = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-dvh flex-col justify-center bg-hermes px-6 pb-20 pt-[160px]"
    >
      <div className="mx-auto grid w-full max-w-[1232px] grid-cols-1 items-center gap-10 px-6 py-10 md:px-10 md:py-14 lg:grid-cols-2 lg:gap-16">
        {/* Kolom kiri: teks */}
        <div>
          {/* Label dekoratif kiri atas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex items-center gap-4"
          >
            <span className="font-display text-sm font-medium uppercase tracking-[1.4px] text-paper-fg">
              2025 / FULL-STACK + AI
            </span>
            <span className="h-px w-16 bg-paper-fg/60" />
          </motion.div>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="font-display text-[clamp(44px,7vw,100px)] font-extralight uppercase leading-[0.95] tracking-[-0.02em] text-paper-fg"
          >
            <motion.span variants={line} className="block">
              SAYA BANGUN
            </motion.span>
            <motion.span variants={line} className="block">
              PRODUK DIGITAL
            </motion.span>
            <motion.span variants={line} className="block">
              YANG BEKERJA
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="mt-6 max-w-[500px] font-body text-base font-normal text-paper-fg/80"
          >
            Full-Stack Developer &amp; AI Engineer. Membangun aplikasi web,
            sistem backend, dan solusi AI yang fungsional, scalable, dan
            berdampak.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: [0.4, 0, 0.2, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#proyek"
              className="bg-hermes-accent px-6 py-3 font-display text-sm font-medium uppercase tracking-[1.4px] text-hermes transition-opacity duration-200 hover:opacity-80"
            >
              LIHAT PROYEK →
            </a>
            <a
              href="#kontak"
              className="border border-paper-fg px-6 py-3 font-display text-sm font-medium uppercase tracking-[1.4px] text-paper-fg transition-colors duration-200 hover:bg-hermes-paper hover:text-hermes"
            >
              HUBUNGI SAYA
            </a>
          </motion.div>
        </div>

        {/* Kolom kanan: ilustrasi ala referensi */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="relative mx-auto w-full max-w-[520px] lg:max-w-none"
        >
          {/* Glow radial di belakang gambar — kesan memancarkan cahaya */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(242,242,242,0.10) 0%, rgba(242,242,242,0.04) 45%, transparent 70%)",
            }}
          />

          {/* Gambar — blend-mode lighten menyatukan biru gambar dgn background hero */}
          <motion.img
            src={heroArt}
            alt="Ilustrasi Trio Adhi Pamungkas S — Full-Stack Developer & AI Engineer"
            loading="eager"
            draggable={false}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full select-none object-contain"
            style={{ mixBlendMode: "lighten" }}
          />
        </motion.div>
      </div>

      {/* Angka dekoratif kanan bawah */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mx-auto block w-full max-w-[1232px] px-6 text-right font-display text-sm font-medium uppercase tracking-[1.4px] text-paper-fg md:px-10"
      >
        −6.2088 / 106.8456
      </motion.span>
    </section>
  );
}
