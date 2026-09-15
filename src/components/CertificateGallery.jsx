import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CertificateGallery({ certificates, accentColor }) {
  const [selected, setSelected] = useState(null);

  if (!certificates || certificates.length === 0) return null;

  return (
    <div className="mt-8">
      <p className="mb-4 font-display text-sm font-medium uppercase tracking-[1.4px] opacity-60">
        SERTIFIKAT ({certificates.length})
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {certificates.map((cert, i) => (
          <button
            key={i}
            onClick={() => setSelected(cert)}
            className="group relative aspect-[4/3] overflow-hidden border bg-white p-0 transition-all duration-200 hover:opacity-90 focus:outline-none"
            style={{ borderColor: accentColor }}
            aria-label={`Lihat sertifikat ${cert.title}`}
          >
            <img
              src={cert.image}
              alt={cert.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-left font-display text-xs font-medium uppercase tracking-[1.4px] text-white">
                {cert.title}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Popup */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-auto bg-hermes-paper p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-2 top-2 z-10 bg-hermes px-3 py-1 font-display text-sm font-medium uppercase tracking-[1.4px] text-paper-fg transition-colors hover:bg-hermes-accent hover:text-hermes"
                aria-label="Tutup popup"
              >
                TUTUP ×
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full object-contain"
              />
              <p className="mt-3 px-2 pb-2 text-center font-display text-sm font-medium uppercase tracking-[1.4px] text-hermes">
                {selected.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
