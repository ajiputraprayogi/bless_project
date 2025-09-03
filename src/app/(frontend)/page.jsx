"use client";

import { motion } from "framer-motion";
import { FiHome } from "react-icons/fi";
import { GiHammerNails, GiDeskLamp } from "react-icons/gi";

export default function RealEstateHome() {
const infoData = [
  {
    title: "Desain Rumah Mewah",
    text: "Kami menciptakan desain rumah mewah yang elegan dan fungsional, sesuai dengan gaya hidup Anda. Setiap detail dirancang untuk memberikan kenyamanan dan kemewahan tiada tara.",
    icon: <FiHome size={32} />,
  },
  {
    title: "Konstruksi & Renovasi",
    text: "Tim profesional kami menangani konstruksi dan renovasi rumah mewah dengan presisi tinggi. Pastikan proyek selesai tepat waktu dan sesuai standar kualitas premium.",
    icon: <GiHammerNails size={32} />,
  },
  {
    title: "Konsultasi & Interior",
    text: "Kami memberikan konsultasi desain interior dan eksterior untuk rumah mewah Anda. Transformasikan hunian menjadi karya seni yang memukau dan nyaman untuk keluarga.",
    icon: <GiDeskLamp size={32} />,
  },
];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="text-gray-800 rounded-2xl">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 mx-auto fixed top-0 z-50 w-full backdrop-blur bg-black/15 text-white">
        <div className="text-2xl font-bold font-white mix-blend-difference">
          Bless Architect
        </div>
        <ul className="hidden md:flex gap-6">
          {["Home", "Harga & Layanan", "Profil", "Informasi", "Kontak"].map(
            (item, i) => (
              <li
                key={i}
                className="hover:text-yellow-300 transition-colors duration-300 ease-in-out cursor-pointer mix-blend-overlay"
              >
                {item}
              </li>
            )
          )}
        </ul>
        <button className="hidden md:block bg-white text-black px-4 py-2 rounded-full hover:bg-gray-800 transition">
          Hubungi Kami
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center rounded-2xl">
        <img
          src="/images/background/bg1.jpg"
          alt="Hero House"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative z-10 text-center max-w-2xl text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bless Luxury <br />{" "}
            <span className="text-glow-gold">Architect</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Transformasikan rumah impian Anda menjadi kenyataan dengan desain
            mewah dan eksklusif.
          </p>
        </motion.div>
      </section>

      {/* Info Section */}
      <motion.section
        className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }} // sekali jalan = false, muncul di tengah
      >
        {infoData.map((item, idx) => (
          <motion.div
            key={idx}
            variants={card}
            whileHover={{
              scale: 1.05,
              y: -5,
              rotate: [0, 2, -2, 0],
              boxShadow: "0px 20px 30px rgba(0,0,0,0.1)",
              transition: {
                scale: { type: "tween", duration: 0.3 },
                y: { type: "tween", duration: 0.3 },
                rotate: { type: "tween", duration: 0.4 },
              },
            }}
            className="bg-white p-6 rounded-xl flex flex-col gap-4 cursor-pointer"
          >
            <div className="text-black">{item.icon}</div>
            <h3 className="font-semibold text-xl">{item.title}</h3>
            <p className="text-gray-600 flex-1">{item.text}</p>
            <button className="mt-auto w-1/3 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
              Pelajari
            </button>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}
