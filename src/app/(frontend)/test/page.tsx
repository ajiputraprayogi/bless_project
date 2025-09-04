"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Atlas Museum",
    desc: "Nunc non ornare quam, sed ullamcorper urna. Quisque ac dolor at lorem commodo aliquet, sed iaculis elit.",
    img: "/images/design/villa1.jpg",
    size: "col-span-2 row-span-2", // lebih gede
  },
  {
    title: "Axel Towers",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    img: "/images/design/villa2.jpg",
    size: "",
  },
  {
    title: "Glass Hotel",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    img: "/images/design/villa3.jpg",
    size: "",
  },
  {
    title: "The Roof Building",
    desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    img: "/images/design/sketch1.jpg",
    size: "row-span-2", // tinggi
  },
  {
    title: "Bridge River",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: "/images/design/sketch2.jpg",
    size: "",
  },
  {
    title: "The Lost Mountain",
    desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    img: "/images/design/sketch3.jpg",
    size: "col-span-2", // lebar
  },
];

export default function Page() {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-6 md:px-12 lg:px-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-yellow-400 uppercase tracking-widest mb-2">
          Recent Work
        </p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Take A Look At Our Latest <br /> Projects
        </h2>
      </div>

      {/* Mobile: slider | Desktop: bento grid */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="
          flex gap-6 overflow-x-auto sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-4 sm:auto-rows-[300px] 
          scrollbar-hide
        "
      >
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className={`
              min-w-[80%] sm:min-w-0 
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
                <h3 className="text-lg font-semibold mb-2">{proj.title}</h3>
                <p className="text-gray-300 text-sm">{proj.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
