export default function Navbar() {

    return (
        <>
            {/* Navbar */}
            <nav className="flex items-center justify-between p-6 mx-auto fixed top-0 z-50 w-full backdrop-blur bg-black/15">
                <div className="text-2xl font-bold text-yellow-400">
                    Bless Architect
                </div>
                <ul className="hidden md:flex gap-6 text-white">
                    {["Beranda", "Harga & Layanan", "Profil", "Informasi", "Kontak"].map(
                        (item, i) => (
                            <li
                                key={i}
                                className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
                            >
                                {item}
                            </li>
                        )
                    )}
                </ul>
                <button className="hidden md:block bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition">
                    Hubungi Kami
                </button>
            </nav>
        </>
    )
}