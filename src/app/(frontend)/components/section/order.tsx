"use client";

import { useState } from "react";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    phone: "",
    jenisDesain: "",
    lantai: "",
    ukuran: "",
    paket: "",
    budget: "",
    alamat: "",
  });

  const nomorAdmin = "6281234567890"; // ganti dengan nomor WA tujuan

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const pesan = `
*Form Order Jasa Arsitek - Bless Architect*
----------------------------
👤 Nama Lengkap: ${formData.nama}
📧 Email: ${formData.email}
📱 No. HP/WA: ${formData.phone}
🏠 Jenis Desain: ${formData.jenisDesain}
🏢 Jumlah Lantai: ${formData.lantai}
📐 Ukuran Lahan: ${formData.ukuran}
📦 Paket Desain: ${formData.paket}
💰 Rencana Budget: ${formData.budget}
📍 Alamat Project: ${formData.alamat}
    `;

    const url = `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="min-h-screen bg-black text-yellow-500 px-6 py-16">
      <div className="max-w-2xl mx-auto bg-zinc-900 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-yellow-400">
          Form Order Jasa Arsitek
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nama */}
          <div>
            <label className="block mb-1 font-semibold">Nama Lengkap *</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
              className="w-full rounded-lg px-4 py-2 bg-black border border-yellow-500 focus:outline-none"
              placeholder="Nama Lengkap"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg px-4 py-2 bg-black border border-yellow-500 focus:outline-none"
              placeholder="Email"
            />
          </div>

          {/* No HP */}
          <div>
            <label className="block mb-1 font-semibold">No. HP / WA *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full rounded-lg px-4 py-2 bg-black border border-yellow-500 focus:outline-none"
              placeholder="+62..."
            />
          </div>

          {/* Jenis Desain */}
          <div>
            <label className="block mb-1 font-semibold">
              Jenis Desain Bangunan *
            </label>
            <select
              name="jenisDesain"
              value={formData.jenisDesain}
              onChange={handleChange}
              required
              className="w-full rounded-lg px-4 py-2 bg-black border border-yellow-500 focus:outline-none"
            >
              <option value="">-- Pilih Jenis Desain --</option>
              <option>Rumah</option>
              <option>Villa</option>
              <option>Ruko</option>
              <option>Apartemen</option>
              <option>Kos</option>
              <option>Hotel</option>
            </select>
          </div>

          {/* Jumlah Lantai */}
          <div>
            <label className="block mb-1 font-semibold">
              Jumlah Lantai Bangunan
            </label>
            <select
              name="lantai"
              value={formData.lantai}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-2 bg-black border border-yellow-500 focus:outline-none"
            >
              <option value="">-- Pilih Jumlah Lantai --</option>
              <option>1 Lantai</option>
              <option>2 Lantai</option>
              <option>3 Lantai</option>
              <option>4+ Lantai</option>
            </select>
          </div>

          {/* Ukuran Lahan */}
          <div>
            <label className="block mb-1 font-semibold">
              Ukuran Lahan (Panjang x Lebar) m / Luas m²
            </label>
            <input
              type="text"
              name="ukuran"
              value={formData.ukuran}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-2 bg-black border border-yellow-500 focus:outline-none"
              placeholder="Kosongkan jika belum diketahui"
            />
          </div>

          {/* Paket Desain */}
          <div>
            <label className="block mb-1 font-semibold">Jenis Paket Desain</label>
            <select
              name="paket"
              value={formData.paket}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-2 bg-black border border-yellow-500 focus:outline-none"
            >
              <option value="">-- Pilih Paket --</option>
              <option>Paket Arsitek</option>
              <option>Paket Interior</option>
              <option>Paket Arsitek + Interior</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="block mb-1 font-semibold">
              Rencana Budget Pembangunan *
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="w-full rounded-lg px-4 py-2 bg-black border border-yellow-500 focus:outline-none"
            >
              <option value="">-- Pilih Budget Pembangunan --</option>
              <option>&lt; 500 Juta</option>
              <option>500 Juta - 1 M</option>
              <option>1 M - 3 M</option>
              <option>3 M - 5 M</option>
              <option>&gt; 5 M</option>
            </select>
          </div>

          {/* Alamat */}
          <div>
            <label className="block mb-1 font-semibold">Alamat Project *</label>
            <input
              type="text"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              required
              className="w-full rounded-lg px-4 py-2 bg-black border border-yellow-500 focus:outline-none"
              placeholder="Provinsi / Kota"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition"
          >
            Kirim via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
