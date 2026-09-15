import certMsibPenyelesaian from "../assets/certificates/msib-penyelesaian.png";
import certMsibMentor from "../assets/certificates/msib-mentor.png";
import certMsibKeterampilan from "../assets/certificates/msib-keterampilan-inti.png";
import certMsibRpl from "../assets/certificates/msib-rekayasa-pl.png";
import certMsibBackend from "../assets/certificates/msib-backend-golang.png";
import certMsibDatabase from "../assets/certificates/msib-database.png";
import certMsibInspirational1 from "../assets/certificates/msib-inspirational-1.png";
import certMsibInspirational2 from "../assets/certificates/msib-inspirational-2.png";

import certCampusVisit from "../assets/certificates/campus-visit.png";
import certSurabayadev from "../assets/certificates/surabayadev.png";
import certBootcampReact from "../assets/certificates/bootcamp-react.png";
import certBootcampFlutter from "../assets/certificates/bootcamp-flutter.png";

// ============================================================
// DATA CONFIG — ganti semua isi di sini untuk update website
// ============================================================

export const SITE = {
  name: "TRIO ADHI",
  fullName: "TRIO ADHI PAMUNGKAS S",
  role: "FULL-STACK DEVELOPER & AI ENGINEER",
  tagline: "MEMBANGUN WEB. MENGEMBANGKAN AI. MENYELESAIKAN MASALAH.",
  year: "2025",
  status: "TERBUKA UNTUK KOLABORASI TERPILIH",
};

export const NAV = {
  left: [
    { label: "PROYEK", href: "#proyek" },
    { label: "KEAHLIAN", href: "#keahlian" },
  ],
  right: [
    { label: "SERTIFIKAT", href: "#sertifikasi" },
    { label: "TENTANG", href: "#tentang" },
    { label: "KONTAK", href: "#kontak" },
  ],
  cta: { label: "HUBUNGI", href: "#kontak" },
};

export const PROJECTS = [
  {
    id: 1,
    name: "BIOTERA — Perpustakaan Digital",
    category: "Full-Stack Web Development",
    year: "2025",
    description:
      "Website perpustakaan digital keanekaragaman hayati Indonesia: flora, fauna, ekosistem, dan konservasi dengan status IUCN.",
    tech: ["Next.js", "Tailwind", "Supabase", "PostgreSQL", "CMS"],
  },
  {
    id: 2,
    name: "Dives Corp — Sistem Manajemen Proyek",
    category: "Web Application · Client Project",
    year: "2025",
    description:
      "Dashboard internal (Mini ERP) untuk biro jasa renovasi & konstruksi: manajemen proyek, RAB, BV, dan analisis HSPK/AHSP.",
    tech: ["React", "Tailwind", "MySQL", "Dashboard", "ERP"],
  },
  {
    id: 3,
    name: "Fareast MC Indonesia — Website Komunitas",
    category: "Full-Stack Web Development",
    year: "2024",
    description:
      "Website resmi komunitas motor klasik: profil, struktur organisasi, berita, galeri, kalender event touring & workshop.",
    tech: ["Next.js", "React", "Tailwind", "Supabase", "Google Maps"],
  },
  {
    id: 4,
    name: "MSIB — Fullstack Golang & AI",
    category: "Studi Independen · Ruangguru Camp",
    year: "2024",
    description:
      "Program Magang & Studi Independen Batch 7: pengembangan fullstack dengan Golang, backend web, dan integrasi AI.",
    tech: ["Golang", "PostgreSQL", "REST API", "AI Integration"],
    certificates: [
      { image: certMsibPenyelesaian, title: "Sertifikat Penyelesaian MSIB" },
      { image: certMsibMentor, title: "Apresiasi Asisten Mentor" },
      { image: certMsibKeterampilan, title: "Keterampilan Inti" },
      { image: certMsibRpl, title: "Rekayasa Piranti Lunak" },
      { image: certMsibBackend, title: "Backend Web dengan Golang" },
      { image: certMsibDatabase, title: "Sistem Manajemen Basis Data" },
      { image: certMsibInspirational1, title: "Inspirational Class Vol. 1" },
      { image: certMsibInspirational2, title: "Inspirational Class Vol. 2" },
    ],
  },
  {
    id: 5,
    name: "TAPS — Landing Page Energi",
    category: "Frontend Development",
    year: "2024",
    description:
      "Landing page untuk platform optimasi energi: desain responsif, animasi, dan fokus pada konversi.",
    tech: ["React", "CSS", "Responsive Design"],
  },
];

export const SKILLS = [
  {
    id: 1,
    title: "FULL-STACK DEVELOPMENT",
    description:
      "Membangun aplikasi web end-to-end: frontend, backend, database, hingga deployment.",
  },
  {
    id: 2,
    title: "AI ENGINEERING",
    description:
      "Mengembangkan fitur dan aplikasi berbasis AI, LLM, dan intelligent workflow.",
  },
  {
    id: 3,
    title: "BACKEND & API",
    description:
      "Membuat API yang aman, terstruktur, scalable, dan mudah diintegrasikan.",
  },
  {
    id: 4,
    title: "FRONTEND DEVELOPMENT",
    description:
      "Antarmuka yang cepat, responsive, accessible, dan berpengalaman baik.",
  },
  {
    id: 5,
    title: "DATABASE & ARCHITECTURE",
    description:
      "Merancang struktur data dan arsitektur sistem untuk kebutuhan produk.",
  },
  {
    id: 6,
    title: "AUTOMATION & INTEGRATION",
    description:
      "Menghubungkan layanan dan mengotomatisasi proses kerja repetitif.",
  },
];

export const TECHNOLOGIES = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Golang",
  "Python",
  "REST API",
  "PostgreSQL",
  "MySQL",
  "Supabase",
  "Tailwind CSS",
  "Git",
  "Docker",
  "Google Maps API",
  "AI / LLM Integration",
  "Cloud Deployment",
];

export const ABOUT_TEXT = [
  "Saya developer yang senang membangun sesuatu dari nol — dari struktur sistem, antarmuka, backend, API, hingga eksplorasi AI untuk masalah nyata.",
  "Setiap produk harus punya tujuan jelas, pengalaman baik, dan fondasi teknis yang bisa berkembang.",
];

export const STATS = [
  { value: "4+", label: "TAHUN BELAJAR & MEMBANGUN" },
  { value: "20+", label: "EKSPERIMEN & PROJECT" },
  { value: "100%", label: "FULL-STACK COVERAGE" },
  { value: "∞", label: "RASA INGIN TAHU" },
];

export const PROCESS = [
  {
    id: "01",
    title: "PAHAMI",
    description: "Memahami masalah, target pengguna, dan tujuan produk.",
  },
  {
    id: "02",
    title: "RANCANG",
    description: "Menyusun struktur sistem, user flow, dan solusi teknis.",
  },
  {
    id: "03",
    title: "BANGUN",
    description:
      "Mengembangkan frontend, backend, database, API, dan integrasi.",
  },
  {
    id: "04",
    title: "SEMPURNAKAN",
    description: "Testing, iterasi, optimasi, dan deployment.",
  },
];

// ============================================================
// SERTIFIKASI & PENDIDIKAN
// ============================================================
export const EDUCATION = {
  school: "Universitas 17 Agustus 1945 Surabaya",
  faculty: "Fakultas Teknik — Informatika",
  period: "2021 — 2025",
};

export const CERTIFICATIONS = [
  {
    id: 1,
    group: "MSIB — Ruangguru Camp × Kampus Merdeka",
    year: "2024",
    items: [
      { image: certMsibPenyelesaian, title: "Sertifikat Penyelesaian MSIB — Fullstack Golang & AI" },
      { image: certMsibMentor, title: "Apresiasi Asisten Mentor" },
      { image: certMsibKeterampilan, title: "Keterampilan Inti" },
      { image: certMsibRpl, title: "Rekayasa Piranti Lunak" },
      { image: certMsibBackend, title: "Pemrograman Backend Web dengan Golang" },
      { image: certMsibDatabase, title: "Sistem Manajemen & Teknologi Basis Data" },
      { image: certMsibInspirational1, title: "Inspirational Class Vol. 1 — Career Preparation" },
      { image: certMsibInspirational2, title: "Inspirational Class Vol. 2 — Stand Out in Job Market" },
    ],
  },
  {
    id: 2,
    group: "Komunitas & Event",
    year: "2024",
    items: [
      { image: certCampusVisit, title: "Campus Visit 2024 ELCC UNTAG SBY × E2C PENS — Documentation Division" },
      { image: certSurabayadev, title: "SurabayaDev Anniversary 10th — Main Event" },
    ],
  },
  {
    id: 3,
    group: "Mini Bootcamp — Edspert.id × Widya Edu",
    year: "2023",
    items: [
      { image: certBootcampReact, title: "Introduction to React JS — Web Developer" },
      { image: certBootcampFlutter, title: "Introduction to Flutter — Mobile Developer" },
    ],
  },
];

// ============================================================
// SOCIAL / CONTACT LINKS — ganti dengan link asli kamu
// ============================================================
export const SOCIALS = {
  email: "trio@email.com",
  github: "https://github.com/taps555",
  linkedin: "https://www.linkedin.com/in/trio-adhi-pamungkas-s-05742435b",
  instagram: "https://instagram.com/raadith04_",
  instagramHandle: "raadith04_",
  githubHandle: "taps555",
  linkedinHandle: "Trio Adhi Pamungkas S",
};
