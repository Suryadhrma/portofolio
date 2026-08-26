import fotoguwe from "/assets/fotoguwe.png"

const Image = {
  fotoguwe,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/tailwind.png";
import Tools4 from "/assets/tools/js.png";
import Tools5 from "/assets/tools/python.svg";
import Tools6 from "/assets/tools/nodejs.png";
import Tools7 from "/assets/tools/github.png";
import Tools8 from "/assets/tools/laravel.png";
import Tools9 from "/assets/tools/canva.png";
import Tools10 from "/assets/tools/figma.png";
import Tools11 from "/assets/tools/expressjs.png";

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
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Javascript",
    ket: "Language",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Python",
    ket: "Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Github",
    ket: "Repository",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Laravel",
    ket: "Framework",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Canva",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Figma",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Express JS",
    ket: "Framework",
    dad: "1100",
  },
];

import ProyekSuhu from "/assets/proyek/poster_suhu.jpeg";
import ProyekBtc from "/assets/proyek/dashboard_huggingface.png";
import ProyekLearnCheck from "/assets/proyek/learncheck_formative_assesment.png";
import Proyek4Chick from "/assets/proyek/4chick.png";
import ProyekAirport from "/assets/proyek/airport_system.png";
import ProyekHotel from "/assets/proyek/hotman.jpg";
import ProyekSecondShp from "/assets/proyek/design.jpg";

export const listProyek = [
  {
    id: 1,
    gambar: ProyekSuhu,
    nama: "SUHU",
    desk: "Mencari teknisi AC yang datang cepat dengan harga transparan masih sulit dilakukan lewat WhatsApp atau rekomendasi acak. Sebagai Backend Developer, saya membangun REST API dari nol hingga deploy — desain arsitektur database & ERD, state machine untuk status order, penanganan concurrency, hingga integrasi payment gateway.",
    tools: ["Node JS", "Express JS", "MongoDB"],
    dad: "200",
    link: "https://suhuapp.site",
  },
  {
    id: 2,
    gambar: ProyekBtc,
    nama: "Evaluasi Model GRU, LSTM, BiLSTM & xLSTM untuk Prediksi Bitcoin",
    desk: "Memprediksi arah pergerakan harga Bitcoin yang fluktuatif sulit dilakukan dengan satu model saja. Untuk skripsi, saya melatih dan membandingkan kinerja model GRU, LSTM, BiLSTM, dan xLSTM, lalu menyajikannya sebagai simulator trading interaktif untuk menguji strategi berdasarkan prediksi tiap model.",
    tools: ["Python", "GRU", "LSTM", "BiLSTM", "xLSTM"],
    dad: "300",
    link: "https://huggingface.co/spaces/Sryya/BTC_Predict",
  },
  {
    id: 3,
    gambar: ProyekLearnCheck,
    nama: "Learn Check",
    desk: "Peserta kelas Dicoding butuh cara cepat mengetahui pemahamannya di tiap sub-materi tanpa menunggu koreksi manual. Saya membangun fitur formative assessment yang jawabannya dikoreksi dan dievaluasi oleh AI, lalu peserta langsung mendapat feedback otomatis.",
    tools: ["React", "Node JS", "LLM"],
    dad: "400",
    link: "https://learn-check-asah.vercel.app",
  },
  {
    id: 4,
    gambar: Proyek4Chick,
    nama: "4Chick",
    desk: "Website Pengelolaan peternakan ayam",
    tools: ["React", "TailwindCSS", "Node JS", "Express JS", "Figma"],
    dad: "500",
    link: "https://chicks-5853a.firebaseapp.com/",
  },
  {
    id: 5,
    gambar: ProyekAirport,
    nama: "Airport System",
    desk: "Website Management Bandara dengan fitur melihat jadwal flight, booking ticket dll.",
    tools: ["PHP", "LARAVEL", "CSS"],
    dad: "600",
    link: "https://github.com/Suryadhrma/airportsysten",
  },
  {
    id: 6,
    gambar: ProyekHotel,
    nama: "Website Management Hotel",
    desk: "website untuk mengatur hotel dengan fitur melihat ruangan yang tersedia, memesan ruangan, data customer dan data pegawai",
    tools: ["PHP", "LARAVEL", "CSS"],
    dad: "700",
    link: "https://github.com/Suryadhrma/hotelManagement",
  },
  {
    id: 7,
    gambar: ProyekSecondShp,
    nama: "SecondShp",
    desk: "Merancang ui website ecommerce item second",
    tools: ["Figma"],
    dad: "800",
    link: "https://www.figma.com/design/sPD0GScdyT5O1cMzbXXzEe/Secondshpp?node-id=0-1&t=5DvwkiLUhTHywaFI-1",
  },
];

import pengalamanAngkasaPura from "/assets/pengalaman/sertif_magang_bandara.jfif";
import pengalaman1 from "/assets/pengalaman/hunilab.png";
import pengalamanAsah from "/assets/pengalaman/sertif_dicoding_asah.jfif";
import pengalaman5 from "/assets/pengalaman/digistarclassbe.png";
import pengalaman6 from "/assets/pengalaman/rangersdiginetwork.png";
import pengalaman3 from "/assets/pengalaman/bandung.png";
import pengalaman2 from "/assets/pengalaman/menanglomba.png";
import pengalaman4 from "/assets/pengalaman/beasiswacenah.png";

export const listPengalaman = [
  {
    id: 1,
    gambar: pengalamanAngkasaPura,
    nama: "IT Intern - PT Angkasa Pura Indonesia",
    desk: "Magang sebagai IT Intern, menangani pemeliharaan jaringan dan instalasi perangkat komputer di area bandara, serta memberikan dukungan teknis harian kepada pengguna.",
    dad: "200",
  },
  {
    id: 2,
    gambar: pengalaman1,
    nama: "Asisten Laboratorium Komputer",
    desk: "Mengelola operasional laboratorium untuk mendukung kegiatan praktikum, mencakup penyiapan instrumen, perawatan alat, serta memberikan panduan teknis  kepada mahasiswa.",
    dad: "300",
  },
  {
    id: 3,
    gambar: pengalamanAsah,
    nama: "Program ASAH Dicoding Indonesia",
    desk: "Mempelajari pengembangan aplikasi dengan React dan Node.js, termasuk integrasi Large Language Model di sisi back-end.",
    dad: "400",
  },
  {
    id: 4,
    gambar: pengalaman5,
    nama: "Digistar Class By Telkom",
    desk: "Mengikuti kelas pengembangan soft skill berupa kolaborasi, membuat personal branding dan hard skill backend selama kurang lebih satu bulan",
    dad: "500",
  },
  {
    id: 5,
    gambar: pengalaman6,
    nama: "Digistar Network Club",
    desk: "Menjadi rangers di digistar network club, menjadi pic di salah satu event basic cyber security",
    dad: "600",
  },
  {
    id: 6,
    gambar: pengalaman3,
    nama: "Pertukaran Mahasiswa Merdeka",
    desk: "Menjalani PMM di Institut Teknologi Bandung Belajar tentang pengembangan perangkat lunak, basis data, pembelajaran mesin, dan sistem paralel terdistribusi. Mempelajari budaya baru yang memperkaya pengalaman pribadi.",
    dad: "700",
  },
  {
    id: 7,
    gambar: pengalaman2,
    nama: "Juara 2 - LO Kreatif",
    desk: "Mendapatkan juara 2 dalam kompetisi pengembangan mobile apps yang diselenggarakan oleh LOKreatif ",
    dad: "800",
  },
  {
    id: 8,
    gambar: pengalaman4,
    nama: "Beasiswa Dumisake",
    desk: "Mendapatkan Beasiswa Prestasi dari pemerintah provinsi jambi ",
    dad: "900",
  },
]
