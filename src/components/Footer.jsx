import React from 'react'

const Footer = () => {
  return (
    <div className="mt-20 md:mt-32 py-8 border-t border-zinc-800 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">
            Portofolio
        </h1>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-7 text-zinc-400">
            <a className="hover:text-cyan-400 transition-colors duration-200" href="#beranda">Beranda</a>
            <a className="hover:text-cyan-400 transition-colors duration-200" href="#tentang">Tentang</a>
            <a className="hover:text-cyan-400 transition-colors duration-200" href="#proyek">Proyek</a>
            <a className="hover:text-cyan-400 transition-colors duration-200" href="#pengalaman">Pengalaman</a>
            <a className="hover:text-cyan-400 transition-colors duration-200" href="#kontak">Kontak</a>
        </div>
        <div className="flex items-center gap-3 text-zinc-400">
            <a className="hover:text-cyan-400 transition-colors duration-200" href="https://github.com/Suryadhrma">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a className="hover:text-cyan-400 transition-colors duration-200" href="https://www.instagram.com/msryadhrma">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer