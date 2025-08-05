import HeroImage from "/assets/hero-img.webp";
import fotoguwe from "/assets/fotoguwe.png"

const Image = {
  HeroImage, fotoguwe,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/laravel.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/expressjs.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Laravel",
    ket: "Framework",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },

    {
    id: 12,
    gambar: Tools12,
    nama: "Express JS",
    ket: "Framework",
    dad: "1200",
  },
];

import Proyek1 from "/assets/proyek/hotman.jpg";
import Proyek2 from "/assets/proyek/lms.jpg";
import Proyek3 from "/assets/proyek/design.jpg";
import Proyek4 from "/assets/proyek/4chick.png";
import Proyek5 from "/assets/proyek/airport_system.png";
import Proyek6 from "/assets/proyek/dashboardLoganalis.png";
import Proyek7 from "/assets/proyek/script-file.png";
import Proyek8 from "/assets/proyek/port-scanner.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Management Hotel",
    desk: "website untuk mengatur hotel dengan fitur melihat ruangan yang tersedia, memesan ruangan, data customer dan data pegawai",
    tools: ["PHP", "LARAVEL", "CSS"],
    dad: "200",
    link: "https://github.com/Suryadhrma/hotelManagement",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "MentorMe",
    desk: "Website Mentoring antar mahasiswa, bisa menawarkan diri sebagai mentor atau trainee",
    tools: ["React", "TailwindCSS", "Node JS", "Express JS"],
    dad: "300",
    link: "https://final-testing-woad.vercel.app/",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "SecondShp",
    desk: "Merancang ui website ecommerce item second",
    tools: ["Figma"],
    dad: "400",
    link: "https://www.figma.com/design/sPD0GScdyT5O1cMzbXXzEe/Secondshpp?node-id=0-1&t=5DvwkiLUhTHywaFI-1",
  },

  {
    id: 4,
    gambar: Proyek4,
    nama: "4Chick",
    desk: "Website Pengelolaan peternakan ayam",
    tools: ["React", "TailwindCSS", "Node JS", "Express JS", "Figma"],
    dad: "500",
    link: "https://chicks-5853a.firebaseapp.com/ ",
  },

    {
    id: 5,
    gambar: Proyek5,
    nama: "Airport System",
    desk: "Website Management Bandara dengan fitur melihat jadwal flight, booking ticket dll.",
    tools: ["PHP", "LARAVEL", "CSS"],
    dad: "600",
    link: "https://github.com/Suryadhrma/airportsysten",
  },

  {
    id: 6,
    gambar: Proyek6,
    nama: "DASHBOARD LOG ANALIZER",
    desk: "Website yang berfungsi untuk menganalisis log",
    tools: ["React", "Python", "TailwindCSS"],
    dad: "700",
    link: "https://github.com/Suryadhrma/Log-Analysis-Dashboard",
  },

  {
    id: 7,
    gambar: Proyek7,
    nama: "Script File Encryptor",
    desk: "Script untuk mengenkripsi file via CLI",
    tools: ["Python"],
    dad: "800",
    link: "https://github.com/Suryadhrma/Script-File-Encryptor",
  },

  {
    id: 8,
    gambar: Proyek8,
    nama: "Script Port Scanner",
    desk: "Script untuk analisis port melalui ip",
    tools: ["Python"],
    dad: "900",
    link: "https://github.com/Suryadhrma/Port-Scanner",
  },
];

import pengalaman1 from "/assets/pengalaman/hunilab.png";
import pengalaman2 from "/assets/pengalaman/menanglomba.png";
import pengalaman3 from "/assets/pengalaman/bandung.png";
import pengalaman4 from "/assets/pengalaman/beasiswacenah.png";
import pengalaman5 from "/assets/pengalaman/digistarclassbe.png";
import pengalaman6 from "/assets/pengalaman/rangersdiginetwork.png";

export const listPengalaman = [

  {
    id: 1,
    gambar: pengalaman1,
    nama: "Asisten Lab",
    desk: "Mengelola operasional laboratorium untuk mendukung kegiatan praktikum, mencakup penyiapan instrumen, perawatan alat, serta memberikan panduan teknis  kepada mahasiswa.",
    dad: "200",
  },

  {
    id: 2,
    gambar: pengalaman2,
    nama: "Juara 2",
    desk: "Mendapatkan juara 2 dalam kompetisi pengembangan mobile apps yang diselenggarakan oleh LOKreatif ",
    dad: "300",
  },

  {
    id: 3,
    gambar: pengalaman3,
    nama: "Pertukaran Mahasiswa Merdeka",
    desk: "Menjalani PMM di Institut Teknologi Bandung Belajar tentang pengembangan perangkat lunak, basis data, pembelajaran mesin, dan sistem paralel terdistribusi. Mempelajari budaya baru yang memperkaya pengalaman pribadi.",
    dad: "400",
  },

    {
    id: 4,
    gambar: pengalaman4,
    nama: "Beasiswa Dumisake",
    desk: "Mendapatkan Beasiswa Prestasi dari pemerintah provinsi jambi ",
    dad: "500",
  },

  {
    id: 5,
    gambar: pengalaman5,
    nama: "Digistar Class By Telkom",
    desk: "Mengikuti kelas pengembangan soft skill berupa kolaborasi, membuat personal branding dan hard skill backend selama kurang lebih satu bulan",
    dad: "600",
  },

  {
    id: 6,
    gambar: pengalaman6,
    nama: "Digistar Network Club",
    desk: "Menjadi rangers di digistar network club, menjadi pic di salah satu event basic cyber security",
    dad: "700",
  },
]
