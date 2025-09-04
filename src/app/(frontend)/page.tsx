/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, Variants } from "framer-motion";
import { FiHome } from "react-icons/fi";
import { GiHammerNails, GiDeskLamp } from "react-icons/gi";
import SpotlightCard from '@/components/reactbits/spotlight';
import Image from "next/image";


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

  // Data Card Design
  const projects = [
    {
      title: "Villa Atlas",
      desc: "Villa mewah dengan arsitektur modern dan detail artistik, menghadirkan suasana elegan sekaligus nyaman.",
      img: "/images/design/villa1.jpg",
      size: "col-span-2 row-span-2", // lebih gede
    },
    {
      title: "Villa Axel",
      desc: "Hunian eksklusif dengan desain kontemporer, dilengkapi pencahayaan alami dan tata ruang yang luas.",
      img: "/images/design/villa2.jpg",
      size: "",
    },
    {
      title: "Villa Kaca",
      desc: "Konsep villa berlapis kaca penuh untuk menikmati panorama alam secara maksimal, cocok untuk liburan keluarga.",
      img: "/images/design/villa3.jpg",
      size: "",
    },
    {
      title: "Sketch Villa Tropis",
      desc: "Sketsa rancangan villa tropis dengan ventilasi alami, nuansa kayu, dan keterhubungan dengan alam sekitar.",
      img: "/images/design/sketch1.jpg",
      size: "row-span-2", // tinggi
    },
    {
      title: "Sketch Villa Minimalis",
      desc: "Desain awal villa minimalis yang menonjolkan garis bersih, tata ruang efisien, dan konsep terbuka.",
      img: "/images/design/sketch2.jpg",
      size: "",
    },
    {
      title: "Sketch Villa Resort",
      desc: "Konsep sketsa villa resort dengan area terbuka luas, kolam renang, dan sentuhan arsitektur modern.",
      img: "/images/design/sketch3.jpg",
      size: "col-span-2", // lebar
    },
    {
      title: "Villa Atlas",
      desc: "Villa mewah dengan arsitektur modern dan detail artistik, menghadirkan suasana elegan sekaligus nyaman.",
      img: "/images/design/villa1.jpg",
      size: "col-span-2 row-span-2", // lebih gede
    },
    {
      title: "Villa Axel",
      desc: "Hunian eksklusif dengan desain kontemporer, dilengkapi pencahayaan alami dan tata ruang yang luas.",
      img: "/images/design/villa2.jpg",
      size: "",
    },
    {
      title: "Villa Kaca",
      desc: "Konsep villa berlapis kaca penuh untuk menikmati panorama alam secara maksimal, cocok untuk liburan keluarga.",
      img: "/images/design/villa3.jpg",
      size: "",
    },
    {
      title: "Sketch Villa Tropis",
      desc: "Sketsa rancangan villa tropis dengan ventilasi alami, nuansa kayu, dan keterhubungan dengan alam sekitar.",
      img: "/images/design/sketch1.jpg",
      size: "row-span-2", // tinggi
    },
    {
      title: "Sketch Villa Minimalis",
      desc: "Desain awal villa minimalis yang menonjolkan garis bersih, tata ruang efisien, dan konsep terbuka.",
      img: "/images/design/sketch2.jpg",
      size: "",
    },
    {
      title: "Sketch Villa Resort",
      desc: "Konsep sketsa villa resort dengan area terbuka luas, kolam renang, dan sentuhan arsitektur modern.",
      img: "/images/design/sketch3.jpg",
      size: "col-span-2", // lebar
    },
  ];
  


  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">

<Image
  src="/images/background/bg11.jpg"
  alt="Hero House"
  fill
  className="absolute inset-0 object-cover"
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

      {/* Motto Section */}
      <motion.section
        className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {infoData.map((item, idx) => (
          <motion.div
            key={idx}
            variants={card}
            animate={{ rotate: 0 }} // default balik ke 0 kalau hover selesai/enggak
            whileHover={{
              scale: 1.05,
              rotate: [0, 2, -2, 0], // swing
              transition: {
                scale: { type: "tween", duration: 0.3 },
                rotate: { type: "tween", duration: 0.4 },
              },
            }}
            className="bg-gray-900 rounded-xl flex flex-col gap-4 cursor-pointer"
          >
            <SpotlightCard
              className=" custom-spotlight-card flex flex-col gap-4 relative overflow-hidden"
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

      <div className="bg-black text-white min-h-screen py-16 px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-yellow-400 uppercase tracking-widest mb-2">
            Karya Kami
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Proyek Desain Terbaru
          </h2>
        </div>

        {/* Mobile: slider | Desktop: bento grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="
              scrollbar-hide flex flex-wrap content-start gap-6 overflow-x-auto
    max-h-[calc(2*16rem+1.5rem)]  /* 2 row item + gap (adjust sesuai h-64) */
    sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-4 sm:auto-rows-[300px]
    sm:grid-flow-dense
        "
        >
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`
              min-w-[100%] sm:min-w-0 
              bg-gray-900 rounded-xl overflow-hidden flex flex-col group ${proj.size}
            `}
            >
              <div className="relative w-full h-64 sm:h-full">
                <Image
                  src={proj.img}
                  alt={proj.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-5">
                  <h3 className="text-lg text-yellow-300 font-semibold mb-2">{proj.title}</h3>
                  <p className="text-gray-300 text-sm">{proj.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
