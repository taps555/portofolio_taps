import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CERTIFICATIONS, EDUCATION } from "../lib/data";

export default function Certifications() {
  const [openGroup, setOpenGroup] = useState(null);
  const [selected, setSelected] = useState(null);

  const toggleGroup = (id) =>
    setOpenGroup((prev) => (prev === id ? null : id));

  return (
    <section id="sertifikasi" className="bg-hermes-paper px-6 py-20">
      <div className="mx-auto w-full max-w-[1232px] px-6 py-10 md:px-10 md:py-[80px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-sm font-normal uppercase text-ink"
        >
          SERTIFIKASI & PENDIDIKAN
        </motion.p>

        {/* Pendidikan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.4, 0, 0.2, 1] }}
          className="mt-8 flex flex-wrap items-baseline justify-between gap-4 border-b border-ink pb-8"
        >
          <div>
            <h3 className="font-display text-3xl font-medium uppercase text-ink md:text-4xl">
              {EDUCATION.school}
            </h3>
            <p className="mt-2 font-display text-sm font-medium uppercase tracking-[1.4px] text-ink opacity-60">
              {EDUCATION.faculty}
            </p>
          </div>
          <span className="font-display text-2xl font-normal uppercase text-ink opacity-60">
            {EDUCATION.period}
          </span>
        </motion.div>

        {/* Daftar grup sertifikasi — accordion, klik untuk mekar */}
        <div className="mt-4">
          {CERTIFICATIONS.map((group, gi) => {
            const isOpen = openGroup === group.id;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: gi * 0.08,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="border-b border-ink"
              >
                {/* Baris header — tombol expand */}
                <button
                  onClick={() => toggleGroup(group.id)}
                  aria-expanded={isOpen}
                  className="group flex w-full cursor-pointer items-center justify-between gap-4 py-8 text-left transition-colors duration-200 hover:bg-ink/5 focus:outline-none"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-display text-[48px] font-light uppercase leading-none text-ink opacity-30 transition-opacity duration-200 group-hover:opacity-100">
                      {String(group.id).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-medium uppercase text-ink md:text-3xl">
                        {group.group}
                      </h3>
                      <p className="mt-1 font-display text-sm font-medium uppercase tracking-[1.4px] text-ink opacity-60">
                        {group.year} · {group.items.length} SERTIFIKAT
                      </p>
                    </div>
                  </div>

                  <span
                    className={`shrink-0 border border-ink px-4 py-2 font-display text-sm font-medium uppercase tracking-[1.4px] text-ink transition-all duration-200 group-hover:bg-ink group-hover:text-paper-fg ${
                      isOpen ? "bg-ink text-paper-fg" : "bg-transparent"
                    }`}
                  >
                    {isOpen ? "TUTUP −" : "LIHAT +"}
                  </span>
                </button>

                {/* Grid sertifikat — mekar saat diklik */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-4 pb-10 sm:grid-cols-3 lg:grid-cols-4">
                        {group.items.map((cert, i) => (
                          <button
                            key={i}
                            onClick={() => setSelected(cert)}
                            className="group/card relative aspect-[4/3] overflow-hidden border border-ink bg-white p-0 transition-all duration-200 hover:opacity-90 focus:outline-none"
                            aria-label={`Lihat sertifikat ${cert.title}`}
                          >
                            <img
                              src={cert.image}
                              alt={cert.title}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-300 group-hover/card:scale-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 opacity-0 transition-opacity duration-200 group-hover/card:opacity-100">
                              <p className="text-left font-display text-xs font-medium uppercase tracking-[1.2px] text-white">
                                {cert.title}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Popup lightbox */}
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
              className="relative max-h-[90vh] w-full max-w-4xl overflow-auto bg-black/40 p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-2 top-2 z-10 bg-paper-fg px-3 py-1 font-display text-sm font-medium uppercase tracking-[1.4px] text-black transition-colors hover:bg-hermes-accent hover:text-black"
                aria-label="Tutup popup"
              >
                TUTUP ×
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full object-contain"
              />
              <p className="mt-3 px-2 pb-2 text-center font-display text-sm font-medium uppercase tracking-[1.4px] text-paper-fg">
                {selected.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
