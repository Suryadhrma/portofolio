import { useState } from 'react';
import DataImage, { listPengalaman } from "./data";
import {listTools, listProyek} from "./data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
      <div className="animate__animated animate__fadeInUp animate__delay-3s">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.fotoguwe} alt="Herp Image"  loading="lazy" className="w-10 rounded-md" />
          <q>Lets Colaborate 🔥</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">
          Halo Saya Surya
        </h1>
        <p className="text-base/loose mb-6 opacity-50 justify-between">
           Saya adalah seorang mahasiswa Teknik Informatika di Universitas Dinamika Bangsa Jambi
           yang memiliki ketertarikan yang tinggi terhadap perkembangan teknologi dan inovasi. 
           Saya memiliki semangat yang tinggi untuk mempelajari hal-hal baru, terutama di bidang 
           pemrograman, pengembangan aplikasi dan cyber security.
        </p>

        <div className="flex items-center sm:gap-4 gap-2">
          <a className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600" href="https://www.linkedin.com/in/m-surya-dharma-khazinatul-azror-635aa228a ">
            Linkedln <FontAwesomeIcon icon={faLinkedin} className="" />
          </a>
          <a className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600" href="#proyek">
            Lihat Proyek <i className="ri-download-line ri-lg"></i>
          </a>
        </div>

      </div>
      <img src={DataImage.fotoguwe} alt="Hero Image"  loading="lazy" className="w-[500px] md:ml-auto
      animate__animated animate__fadeInUp animate__delay-4s"/>
    </div>

    {/* Tentang */}
    <div className="tentang mt-32 py-10" id="tentang">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
      data-aos="fade-up" data-aos-duration="1000">
        <img src={DataImage.fotoguwe} alt="Image"  loading="lazy" className="w-12 rounded-md mb-10 sm:hidden"/>
        <p className="text-base/loose mb-10 ">
           Saat ini, saya aktif mengembangkan 
           keterampilan teknis saya melalui proyek-proyek akademik dan kegiatan ekstrakurikuler.
        </p>
      <div className="flex items-center justify-between ">
        <img src={DataImage.fotoguwe} alt="Image "  loading="lazy" className="w-12 rounded-md sm:block hidden" />
        <div className="flex items-center gap-6">
          <div>
            <h1 className="text-4xl mb-1">
              8 
            </h1>
            <p> Proyek Selesai</p>
          </div>
          <div>
            <h1 className="text-4xl mb-1">
              1 
            </h1>
            <p>
              Tahun Pengalaman
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* tools */}
    <div className="Tools mt-32">
      <h1 data-aos="fade-up" data-aos-duration="1000" className="text-4xl/snug font-bold mb-4">
        Tools Yang Digunakan
      </h1>
      <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className="xl:w-2/5 lg:2/4 md:w-2/3 sm:w-3/4 w-full text-base/looser opacity-50 ">
        Berikut Ini Beberapa Tools Yang Biasa Saya Gunakan
      </p>

      <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

        {listTools.map((tool) => (
          <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-600 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
            <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy" />
            <div>
              <h4 className="font-bold">
                {tool.nama}
              </h4>
              <p className="opacity-50">
                {tool.ket}
              </p>
            </div>
          </div>
        ))}

      </div>
     </div>
    </div>

    {/* Proyek */}
    <div className="proyek mt-32 py-10" id="proyek">
      <h1 className="text-center text-4xl font-bold mb-2 "data-aos="fade-up" data-aos-duration="1000">
          Proyek
      </h1>
      <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Inilah beberapa proyek saya
      </p>
      <div className="proyek-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {listProyek.map((proyek) => (
          <div className="p-4 bg-zinc-800 rounded-md" key={proyek.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
            <img src={proyek.gambar} alt="proyek image" loading="lazy"/>
            <div>
              <h1 className="text-2xl font-bold my-4">
                {proyek.nama}
              </h1>
              <p className="text-base/loose mb-4">
                {proyek.desk}
              </p>
              <div className=" flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                ))}
              </div>
                <div className="mt-8 text-center">
                  {proyek.link ? (
                    <a 
                      href={proyek.link} 
                      className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lihat Projek
                    </a>
                  ) : (
                    <button 
                      className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600 w-full cursor-not-allowed opacity-50"
                      disabled
                    >
                      Belum Tersedia
                    </button>
                  )}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Pengalaman */}
    <div className="proyek mt-32 py-10" id="proyek">
      <h1 className="text-center text-4xl font-bold mb-2 "data-aos="fade-up" data-aos-duration="1000">
          Pengalaman
      </h1>
      <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Beberapa pengalaman saya
      </p>
      <div className="proyek-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {listPengalaman.map((pengalaman) => (
          <div className="p-4 bg-zinc-800 rounded-md" key={pengalaman.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={pengalaman.dad}>
            <img src={pengalaman.gambar} alt="proyek image" loading="lazy"/>
            <div>
              <h1 className="text-2xl font-bold my-4">
                {pengalaman.nama}
              </h1>
              <p className="text-base/loose mb-4">
                {pengalaman.desk}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    {/* Kontak */}
    <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Kontak Disini</p>
        <form action="https://formsubmit.co/abcdefckdh@gmail.com" method="POST" 
        className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" autoComplete="off">
          <div className="flex flex-col gap-6 ">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama" className="border border-zinc-500 p-2 rounded-md" required />
            </div>
             <div className="flex flex-col gap-2">
              <label className="font-semibold" >Email</label>
              <input type="text" name="email" placeholder="Masukkan Email" className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2" >
              <label className="font-semibold" >Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Masukkan Pesan" className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer  border border-zinc-600 hover:bg-violet-600 " type="submit">
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
    </div>

  </>
  )
}

export default App
