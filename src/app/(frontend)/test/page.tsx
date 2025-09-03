/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, Variants } from "framer-motion";
import { FiHome } from "react-icons/fi";
import { GiHammerNails, GiDeskLamp } from "react-icons/gi";
import SpotlightCard from '@/components/reactbits/spotlight';


export default function LuxuryContractor() {
  const infoData = [
    {
      title: "Desain Rumah Mewah",
      text: "Kami menciptakan desain rumah yang mewah dan elegan, sesuai dengan gaya hidup Anda. Setiap detail dirancang untuk memberikan kenyamanan dan kemewahan tiada tara.",
      icon: <FiHome size={32} className="text-yellow-400" />,
    },
    {
      title: "Konstruksi & Renovasi",
      text: "Tim profesional kami menangani konstruksi dan renovasi rumah mewah dengan presisi tinggi. Pastikan proyek selesai tepat waktu dan sesuai standar kualitas premium.",
      icon: <GiHammerNails size={32} className="text-yellow-400" />,
    },
    {
      title: "Konsultasi & Interior",
      text: "Kami memberikan konsultasi desain interior dan eksterior untuk rumah mewah Anda. Transformasikan hunian menjadi karya seni yang memukau dan nyaman untuk keluarga.",
      icon: <GiDeskLamp size={32} className="text-yellow-400" />,
    },
  ];

  // Variants untuk animasi entrance
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 mx-auto fixed top-0 z-50 w-full backdrop-blur bg-black/15">
        <div className="text-2xl font-bold text-yellow-400">
          Bless Architect
        </div>
        <ul className="hidden md:flex gap-6">
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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <img
          src="/images/background/bg1.jpg"
          alt="Hero House"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative z-10 text-center max-w-2xl px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400 text-glow-gold">
            Bless Luxury <br /> <span className="text-white">Architect</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
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
        viewport={{ once: false, amount: 0.5 }}
      >
        {infoData.map((item, idx) => (
          <motion.div
            key={idx}
            variants={card}
            whileHover={{
              scale: 1.05,
              rotate: [0, 2, -2, 0], // swing sekali jalan
              // boxShadow: "0px 20px 30px rgba(255,215,0,0.3)", // shadow emas
              transition: {
                scale: { type: "tween", duration: 0.3 },
                rotate: { type: "tween", duration: 0.4 },
              },
            }}
            className="bg-gray-900 rounded-xl flex flex-col gap-4 cursor-pointer"
          >
            <SpotlightCard
              className="custom-spotlight-card flex flex-col gap-4 relative overflow-hidden"
              spotlightColor="rgba(229, 226, 23, 0.2)"
            >
              {/* Overlay gradien untuk mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent pointer-events-none md:hidden"></div>

              <div>{item.icon}</div>
              <h3 className="font-semibold text-xl text-yellow-400">{item.title}</h3>
              <p className="text-gray-300 flex-1">{item.text}</p>
              <button className="mt-auto w-1/3 bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition">
                Pelajari
              </button>
            </SpotlightCard>

          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}
