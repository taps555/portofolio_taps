import { motion } from "framer-motion";
import heroArt from "../assets/trio-hero.png";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
};

const line = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-dvh flex-col justify-center bg-hermes px-6 pb-20 pt-[160px]"
    >
      <div className="mx-auto grid w-full max-w-[1232px] grid-cols-1 items-center gap-10 px-6 py-10 md:px-10 md:py-14 lg:grid-cols-2 lg:gap-16">
        {/* Kolom kiri: teks perkenalan */}
        <div>
          {/* Label kecil — halo, saya */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-4"
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-2.5 w-2.5 bg-hermes-accent"
              aria-hidden="true"
            />
            <span className="font-display text-sm font-medium uppercase tracking-[1.4px] text-paper-fg">
              Halo, saya
            </span>
            <span className="h-px w-16 bg-paper-fg/40" />
          </motion.div>

          {/* Nama besar dengan reveal animasi */}
          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="font-display text-[clamp(52px,8vw,110px)] font-extralight uppercase leading-[0.92] tracking-[-0.02em] text-paper-fg"
          >
            <motion.span variants={line} className="block">
              TRIO ADHI
            </motion.span>
            <motion.span variants={line} className="block">
              PAMUNGKAS<span className="text-hermes-accent">.</span>
            </motion.span>
          </motion.h1>

          {/* Role dengan typing-swap animasi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1"
          >
            <span className="font-display text-xl font-medium uppercase tracking-[1.4px] text-hermes-accent md:text-2xl">
              Full-Stack Developer
            </span>
            <span className="font-display text-lg uppercase tracking-[1.4px] text-paper-fg/50 md:text-xl">
              /
            </span>
            <span className="font-display text-xl font-medium uppercase tracking-[1.4px] text-paper-fg/80 md:text-2xl">
              AI Engineer
            </span>
          </motion.div>

          {/* Deskripsi singkat */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05, ease: [0.4, 0, 0.2, 1] }}
            className="mt-5 max-w-[500px] font-body text-base font-normal text-paper-fg/80"
          >
            Lulusan Teknik Informatika yang senang membangun aplikasi web
            end-to-end — dari frontend, backend, database, hingga deployment.
            Percaya bahwa teknologi yang baik adalah yang menyelesaikan
            masalah nyata.
          </motion.p>

          {/* Tombol */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#proyek"
              className="bg-hermes-accent px-6 py-3 font-display text-sm font-medium uppercase tracking-[1.4px] text-hermes transition-all duration-200 hover:opacity-80"
            >
              LIHAT PROYEK →
            </a>
            <a
              href="#kontak"
              className="border border-paper-fg px-6 py-3 font-display text-sm font-medium uppercase tracking-[1.4px] text-paper-fg transition-colors duration-200 hover:bg-paper-fg hover:text-hermes"
            >
              HUBUNGI SAYA
            </a>
          </motion.div>

          {/* Info cepat */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-display text-sm font-medium uppercase tracking-[1.4px] text-paper-fg/60"
          >
            <span>📍 Sidoarjo, Indonesia</span>
            <span className="hidden h-1 w-1 bg-paper-fg/40 sm:block" />
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 bg-hermes-accent" />
              Terbuka untuk peluang
            </span>
          </motion.div>
        </div>

        {/* Kolom kanan: ilustrasi */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="relative mx-auto w-full max-w-[480px] lg:max-w-none"
        >
          {/* Glow radial di belakang gambar */}
          <motion.div
            aria-hidden="true"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(242,242,242,0.10) 0%, rgba(242,242,242,0.04) 45%, transparent 70%)",
            }}
          />

          <motion.img
            src={heroArt}
            alt="Ilustrasi Trio Adhi Pamungkas S — Full-Stack Developer & AI Engineer"
            loading="eager"
            draggable={false}
            animate={{ y: [0, -12, 0] }}
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

      {/* Scroll indicator */}
      <motion.a
        href="#proyek"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="mx-auto flex w-full max-w-[1232px] flex-col items-center gap-2 px-6 md:px-10"
        aria-label="Scroll ke bawah"
      >
        <span className="font-display text-xs font-medium uppercase tracking-[1.4px] text-paper-fg/50">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block h-8 w-px bg-paper-fg/50"
        />
      </motion.a>
    </section>
  );
}
