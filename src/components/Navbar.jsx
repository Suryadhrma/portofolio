import { useState } from "react"

const links = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#proyek", label: "Proyek" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#kontak", label: "Kontak" },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <h1 className="text-xl font-semibold">Portofolio</h1>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a className="text-sm font-medium text-zinc-300 hover:text-cyan-400 transition-colors duration-200" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-2xl text-zinc-200"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden border-t border-zinc-800 bg-black px-4 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                className="block text-base font-medium text-zinc-300 hover:text-cyan-400 transition-colors duration-200"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar
