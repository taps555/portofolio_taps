import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CertificateStack({ certificates, accentColor }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  if (!certificates || certificates.length === 0) return null;

  // Ambil maksimal 5 cover untuk stack
  const stackCerts = certificates.slice(0, 5);
  const total = certificates.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <div className="mt-2 md:mt-0">
      {/* Stack kartu sertifikat */}
      <button
        onClick={() => setOpen(true)}
        className="group relative block h-[90px] w-[130px] cursor-pointer sm:h-[100px] sm:w-[145px]"
        aria-label="Lihat semua sertifikat"
      >
        {stackCerts.map((cert, i) => {
          const offset = i * 6;
          const rotate = (i - stackCerts.length / 2) * 2;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
              className="absolute left-0 top-0 h-full w-full overflow-hidden border bg-white transition-transform duration-300 group-hover:-translate-y-1"
              style={{
                transform: `translate(${offset}px, ${offset * 0.4}px) rotate(${rotate}deg)`,
                borderColor: accentColor || "var(--color-hermes)",
                zIndex: stackCerts.length - i,
                boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
              }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
          );
        })}
      </button>

      {/* Label klik */}
      <button
        onClick={() => setOpen(true)}
        className="mt-4 block font-display text-xs font-medium uppercase tracking-[1.4px] opacity-60 transition-opacity hover:opacity-100 hover:text-hermes"
      >
        {total} SERTIFIKAT ↗
      </button>

      {/* Popup lightbox semua sertifikat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/95 p-4"
            onClick={() => setOpen(false)}
          >
            {/* Tombol tutup */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-20 bg-paper-fg px-4 py-2 font-display text-sm font-medium uppercase tracking-[1.4px] text-black transition-colors hover:bg-hermes-accent hover:text-hermes"
            >
              TUTUP ×
            </button>

            {/* Navigasi */}
            <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between">
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="bg-paper-fg px-4 py-2 font-display text-sm font-medium uppercase tracking-[1.4px] text-black transition-colors hover:bg-hermes-accent hover:text-hermes"
              >
                ← PREV
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="bg-paper-fg px-4 py-2 font-display text-sm font-medium uppercase tracking-[1.4px] text-black transition-colors hover:bg-hermes-accent hover:text-hermes"
              >
                NEXT →
              </button>
            </div>

            {/* Gambar aktif */}
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="max-h-[80vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={certificates[index].image}
                alt={certificates[index].title}
                className="h-full max-h-[80vh] w-full object-contain"
              />
            </motion.div>

            {/* Judul + indicator */}
            <div className="mt-4 text-center">
              <p className="font-display text-base font-medium uppercase tracking-[1.4px] text-paper-fg">
                {certificates[index].title}
              </p>
              <p className="mt-2 font-display text-sm uppercase tracking-[1.4px] text-paper-fg/60">
                {index + 1} / {total}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
