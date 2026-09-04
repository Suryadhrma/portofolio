import DataImage, { listPengalaman } from "./data";
import {listTools, listProyek} from "./data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const tagClass = "font-mono-tag text-xs px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300";
const cardClass = "flex flex-col p-5 bg-zinc-950 border border-zinc-800 rounded-2xl hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-[0_0_40px_-15px_rgba(34,211,238,0.35)] transition-all duration-300";
const primaryBtn = "inline-flex items-center justify-center gap-2 bg-zinc-200 text-zinc-950 font-medium px-5 py-2.5 rounded-full hover:bg-white transition-colors duration-200";
const disabledBtn = "inline-flex items-center justify-center gap-2 bg-zinc-900 text-zinc-600 font-medium px-5 py-2.5 rounded-full border border-zinc-800 cursor-not-allowed";
const eyebrow = "font-mono-tag text-cyan-400 text-sm tracking-widest uppercase mb-3";
const sectionHeading = "text-4xl font-medium tracking-tight mb-2";

function App() {
  return (
    <>
    <div className="hero relative grid md:grid-cols-2 pt-6 md:pt-10 items-center xl:gap-0 gap-8 grid-cols-1" id="beranda">
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 sm:w-96 sm:h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div aria-hidden="true" className="pointer-events-none absolute top-10 -right-16 w-80 h-80 sm:w-96 sm:h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="relative z-10 animate__animated animate__fadeInUp animate__delay-3s">
        <div className="inline-flex items-center gap-3 mb-6 bg-zinc-950 border border-zinc-800 w-fit px-4 py-2 rounded-full">
          <img src={DataImage.fotoguwe} alt="Foto profil Surya"  loading="lazy" className="w-8 h-8 object-cover rounded-full" />
          <q className="text-sm text-zinc-300">Lets Colaborate 🔥</q>
        </div>
        <h1 className="text-5xl sm:text-6xl/[1.05] font-medium mb-6 tracking-tighter">
          Halo Saya Surya
        </h1>
        <p className="text-base/loose mb-8 text-zinc-400">
           Saya lulusan S1 Teknik Informatika Universitas Dinamika Bangsa, Jambi, dengan pengalaman
           magang IT di PT Angkasa Pura Indonesia dan tiga tahun sebagai asisten laboratorium komputer.
           Saat ini saya mencari posisi Staff IT, khususnya di lingkungan yang membutuhkan dukungan
           jaringan, perangkat, dan pengguna secara langsung.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a className={primaryBtn} href="https://www.linkedin.com/in/m-surya-dharma-khazinatul-azror-635aa228a">
            Linkedln <FontAwesomeIcon icon={faLinkedin} className="" />
          </a>
          <a className="inline-flex items-center gap-2 border border-zinc-800 text-zinc-200 px-5 py-2.5 rounded-full hover:bg-zinc-900 transition-colors duration-200" href="#proyek">
            Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
          </a>
        </div>

      </div>
      <img src={DataImage.fotoguwe} alt="Foto profil Surya"  loading="lazy" className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 mx-auto md:mx-0 md:ml-auto rounded-full object-cover border border-zinc-800
      animate__animated animate__fadeInUp animate__delay-4s"/>
    </div>

    {/* Tentang */}
    <div className="tentang mt-20 md:mt-32 py-10" id="tentang">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-6 sm:p-8 bg-zinc-950 border border-zinc-800 rounded-2xl" data-aos="fade-up">
        <img src={DataImage.fotoguwe} alt="Foto profil Surya"  loading="lazy" className="w-12 rounded-full mb-10 sm:hidden"/>
        <p className="text-base/loose mb-10 text-zinc-300">
           Selama magang di PT Angkasa Pura Indonesia, saya menangani pemeliharaan jaringan dan
           instalasi perangkat komputer di area bandara. Pengalaman ini saya perkuat dengan tiga
           tahun menjadi asisten laboratorium komputer, mendampingi praktikum dan merawat
           infrastruktur lab sehari-hari.
        </p>
      <div className="flex items-center justify-between ">
        <img src={DataImage.fotoguwe} alt="Foto profil Surya"  loading="lazy" className="w-12 rounded-full sm:block hidden" />
        <div className="flex items-center gap-6 sm:gap-8">
          <div>
            <h1 className="font-mono-tag text-3xl sm:text-4xl text-cyan-400 mb-1">
              {listProyek.length}
            </h1>
            <p className="text-zinc-400 text-sm">Proyek Selesai</p>
          </div>
          <div>
            <h1 className="font-mono-tag text-3xl sm:text-4xl text-cyan-400 mb-1">
              3+
            </h1>
            <p className="text-zinc-400 text-sm">
              Tahun Pengalaman
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* tools */}
    <div className="Tools mt-20 md:mt-32">
      <p className={eyebrow}>// tools</p>
      <h1 className={sectionHeading}>
        Tools Yang Digunakan
      </h1>
      <p className="xl:w-2/5 lg:2/4 md:w-2/3 sm:w-3/4 w-full text-base/looser text-zinc-400 ">
        Berikut Ini Beberapa Tools Yang Biasa Saya Gunakan
      </p>

      <div className="tools-box mt-10 md:mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3 sm:gap-4" data-aos="fade-up">

        {listTools.map((tool) => (
          <div className="flex items-center gap-3 p-3 sm:p-4 border border-zinc-800 bg-zinc-950 rounded-xl hover:border-cyan-500/40 hover:bg-zinc-900 transition-all duration-300" key={tool.id}>
            <div className="bg-white rounded-lg p-1.5 shrink-0">
              <img src={tool.gambar} alt={tool.nama} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" loading="lazy" />
            </div>
            <div className="min-w-0">
              <h4 className="font-semibold text-sm truncate">
                {tool.nama}
              </h4>
              <p className="text-zinc-500 text-xs truncate">
                {tool.ket}
              </p>
            </div>
          </div>
        ))}

      </div>
     </div>
    </div>

    {/* Proyek */}
    <div className="proyek mt-20 md:mt-32 py-10" id="proyek">
      <p className={`${eyebrow} text-center`}>// proyek</p>
      <h1 className={`${sectionHeading} text-center`}>
          Proyek
      </h1>
      <p className="text-base/loose text-center text-zinc-400 mb-10 md:mb-14">
          Inilah beberapa proyek saya
      </p>

      <div className="proyek-box grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4" data-aos="fade-up">
        {listProyek.map((proyek, i) => (
          <div className={`${cardClass} ${i === 0 ? "lg:col-span-2" : ""}`} key={proyek.id}>
            {i === 0 && <p className={eyebrow}>// terbaru</p>}
            <img src={proyek.gambar} alt={proyek.nama} loading="lazy" className={`w-full object-cover rounded-xl mb-4 ${i === 0 ? "aspect-[21/9]" : "aspect-video"}`}/>
            <h1 className={`font-semibold mb-2 ${i === 0 ? "text-2xl" : "text-xl"}`}>
              {proyek.nama}
            </h1>
            <p className="text-sm text-zinc-400 mb-4 flex-1">
              {proyek.desk}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {proyek.tools.map((tool, i) => (
                <span className={tagClass} key={i}>{tool}</span>
              ))}
            </div>
            <div className="text-center">
              {proyek.link ? (
                <a
                  href={proyek.link}
                  className={`${primaryBtn} w-full`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lihat Projek
                </a>
              ) : (
                <button className={`${disabledBtn} w-full`} disabled>
                  Belum Tersedia
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Pengalaman */}
    <div className="proyek mt-20 md:mt-32 py-10" id="pengalaman">
      <p className={`${eyebrow} text-center`}>// pengalaman</p>
      <h1 className={`${sectionHeading} text-center`}>
          Pengalaman
      </h1>
      <p className="text-base/loose text-center text-zinc-400 mb-10 md:mb-14">
          Beberapa pengalaman saya
      </p>
      <div className="proyek-box grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4" data-aos="fade-up">
        {listPengalaman.map((pengalaman) => (
          <div className={cardClass} key={pengalaman.id}>
            <img src={pengalaman.gambar} alt={pengalaman.nama} loading="lazy" className="w-full aspect-video object-cover rounded-xl mb-4"/>
            <h1 className="text-xl font-semibold mb-2">
              {pengalaman.nama}
            </h1>
            <p className="text-sm text-zinc-400">
              {pengalaman.desk}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Kontak */}
    <div className="kontak mt-20 md:mt-32 sm:p-10 p-0" id="kontak">
        <p className={`${eyebrow} text-center`}>// kontak</p>
        <h1 className={`${sectionHeading} text-center`}>Kontak</h1>
        <p className="text-base/loose text-center mb-10 text-zinc-400">Kontak Disini</p>
        <form action="https://formsubmit.co/m.surya.dharma9f@gmail.com" method="POST"
        className="bg-zinc-950 border border-zinc-800 p-6 sm:p-10 sm:w-fit w-full mx-auto rounded-2xl" autoComplete="off" data-aos="fade-up">
          <div className="flex flex-col gap-6 sm:w-96 w-full">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama" className="bg-zinc-900 border border-zinc-800 focus:border-cyan-500/50 p-2.5 rounded-lg placeholder:text-zinc-500 transition-colors" required />
            </div>
             <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm" >Email</label>
              <input type="text" name="email" placeholder="Masukkan Email" className="bg-zinc-900 border border-zinc-800 focus:border-cyan-500/50 p-2.5 rounded-lg placeholder:text-zinc-500 transition-colors" required />
            </div>
            <div className="flex flex-col gap-2" >
              <label className="font-semibold text-sm" >Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Masukkan Pesan" className="bg-zinc-900 border border-zinc-800 focus:border-cyan-500/50 p-2.5 rounded-lg placeholder:text-zinc-500 transition-colors" required></textarea>
            </div>
            <button className={`${primaryBtn} w-full`} type="submit">
              Kirim Pesan
            </button>
          </div>
        </form>
    </div>

  </>
  )
}

export default App
