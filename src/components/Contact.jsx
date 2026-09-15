import { useState } from "react";
import { motion } from "framer-motion";
import { SOCIALS } from "../lib/data";

const PROJECT_TYPES = ["Full-Stack", "AI", "Automation", "Lainnya"];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: null });
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Nama wajib diisi";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Email tidak valid";
    if (!form.message.trim()) errs.message = "Pesan wajib diisi";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };

  const inputClass =
    "w-full border-b border-ink bg-transparent px-0 py-3 font-body text-base text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none";

  return (
    <section id="kontak" className="bg-hermes-paper px-6 py-20">
      <div className="mx-auto w-full max-w-[1232px] px-6 py-10 md:px-10 md:py-[80px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-sm font-normal uppercase text-ink"
        >
          KONTAK
        </motion.p>

        <div className="mt-8 grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="font-display text-[clamp(40px,7vw,80px)] font-extralight uppercase leading-[1] tracking-[-0.02em] text-ink"
            >
              PUNYA IDE?
              <br />
              MARI KITA BANGUN.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="mt-6 max-w-[500px] font-body text-base text-ink/80"
            >
              Terbuka untuk peluang, kolaborasi, dan project menarik. Kirim
              pesan atau mulai percakapan.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="mt-10 flex flex-col gap-4"
            >
              {[
                { label: "EMAIL", value: SOCIALS.email, href: `mailto:${SOCIALS.email}` },
                { label: "GITHUB", value: `github.com/${SOCIALS.githubHandle}`, href: SOCIALS.github },
                { label: "LINKEDIN", value: SOCIALS.linkedinHandle, href: SOCIALS.linkedin },
                { label: "INSTAGRAM", value: `@${SOCIALS.instagramHandle}`, href: SOCIALS.instagram },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="font-display text-sm font-medium uppercase tracking-[1.4px] text-ink"
                  >
                    <span className="opacity-60">{l.label}: </span>
                    <span className="border-b border-ink pb-0.5 transition-colors duration-200 hover:border-hermes-accent hover:text-hermes-accent">
                      {l.value}
                    </span>
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {sent ? (
              <div className="border border-ink p-8">
                <p className="font-display text-3xl font-medium uppercase text-ink">
                  TERKIRIM ✓
                </p>
                <p className="mt-4 font-body text-base text-ink/80">
                  Terima kasih, {form.name || "teman"}! Pesanmu sudah diterima.
                  Saya akan membalas secepatnya.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", type: "", message: "" });
                  }}
                  className="mt-6 border border-ink px-6 py-3 font-display text-sm font-medium uppercase tracking-[1.4px] text-ink transition-colors duration-200 hover:bg-ink hover:text-paper-fg"
                >
                  KIRIM PESAN LAIN
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="flex flex-col gap-8">
                <div>
                  <label
                    htmlFor="nama"
                    className="mb-1 block font-display text-sm font-medium uppercase tracking-[1.4px] text-ink"
                  >
                    NAMA
                  </label>
                  <input
                    id="nama"
                    type="text"
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Nama kamu"
                    className={inputClass}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-ink">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block font-display text-sm font-medium uppercase tracking-[1.4px] text-ink"
                  >
                    EMAIL
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="email@kamu.com"
                    className={inputClass}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-ink">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="jenis"
                    className="mb-1 block font-display text-sm font-medium uppercase tracking-[1.4px] text-ink"
                  >
                    JENIS PROJECT
                  </label>
                  <select
                    id="jenis"
                    value={form.type}
                    onChange={set("type")}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="">Pilih jenis project</option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="pesan"
                    className="mb-1 block font-display text-sm font-medium uppercase tracking-[1.4px] text-ink"
                  >
                    PESAN
                  </label>
                  <textarea
                    id="pesan"
                    rows={4}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Ceritakan tentang project kamu"
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-ink">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="self-start bg-ink px-6 py-3 font-display text-sm font-medium uppercase tracking-[1.4px] text-paper-fg transition-opacity duration-200 hover:opacity-80"
                >
                  KIRIM PESAN →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
