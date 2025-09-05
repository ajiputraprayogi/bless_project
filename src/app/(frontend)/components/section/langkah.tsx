"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function StepPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Judul Utama */}
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="text-3xl md:text-4xl font-bold text-center text-yellow-500"
        >
          B. TAHAPAN PEMESANAN JASA ARSITEK DESAIN RUMAH
        </motion.h1>

        {/* Tahap Konsultasi */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="space-y-4 bg-zinc-900 p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-yellow-500">
            B.1. TAHAP KONSULTASI
          </h2>
          <p>Klien memberikan data-data yang diperlukan berupa:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Lokasi Lahan</li>
            <li>Ukuran Lahan</li>
            <li>Style Rumah yang disukai</li>
            <li>Rencana Budget Pembangunan</li>
            <li>
              Rincian Kebutuhan Ruang (contoh dibagi per lantai, kamar, fasilitas)
            </li>
          </ul>
          <p className="text-sm text-green-300">
            * Tim Arsitek akan memberikan sket denah dan penawaran biaya desain
            berdasarkan perkiraan luasan bangunan yang diperlukan.
          </p>
        </motion.div>

        {/* Tahap Pembayaran */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="space-y-6 bg-zinc-900 p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-yellow-500">
            B.2. TAHAP PEMBAYARAN
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-yellow-400">
                B.2.1. PEMBAYARAN TAHAP PERTAMA
              </h3>
              <p>
                Klien melakukan Pembayaran Tahap I sebesar 30% dari total biaya
                desain untuk Pembuatan Denah/Floor Plan.
              </p>
              <p className="text-sm">
                Revisi denah dipersilakan tanpa batas hingga konsep denah
                disetujui.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-yellow-400">
                B.2.2. PEMBAYARAN TAHAP KEDUA
              </h3>
              <p>
                Klien melakukan Pembayaran Tahap II sebesar 50% dari total biaya
                desain untuk pembuatan Gambar 3D dan Render Kasar Exterior.
              </p>
              <p className="text-sm">
                Tahap ini fokus pada bentuk & tampilan bangunan. Revisi hanya
                diperbolehkan untuk tampilan.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-yellow-400">
                B.2.3. PEMBAYARAN TAHAP KETIGA
              </h3>
              <p>
                Pelunasan 20% untuk pembuatan Visual Render Halus (Final) &
                Gambar Teknis (Arsitektur, Struktur, Elektrikal, Plumbing).
              </p>
              <p className="text-sm">
                File final berupa Print Out A3 dan Flash Disk softcopy. Tidak
                ada revisi pada tahap ini.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Kelengkapan Gambar */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="space-y-6 bg-zinc-900 p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-yellow-500">
            C. KELENGKAPAN GAMBAR DESAIN RUMAH
          </h2>

          <div>
            <h3 className="text-xl font-semibold text-yellow-400">
              C.1. TAHAP PERTAMA
            </h3>
            <p>Konsep Denah 2D (2 Dimensi)</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-yellow-400">
              C.2. TAHAP KEDUA
            </h3>
            <p>Konsep Gambar 3D (3 Dimensi) & contoh view desain 3D.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-yellow-400">
              C.3. TAHAP KETIGA
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Visual Render Halus sesuai luas bangunan</li>
              <li>RAB Bangunan Standar</li>
              <li>Gambar Teknis Arsitektur, Struktur, Elektrikal & Plumbing</li>
              <li>Bonus Video 3D Exterior & Interior</li>
            </ul>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="text-center pt-6 border-t border-yellow-700"
        >
          <p className="text-sm text-yellow-400 flex items-center justify-center gap-2">
            <FaCheckCircle /> Semua prosedur ini mengikuti standar profesional
            jasa arsitek desain rumah.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
