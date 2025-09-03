"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ChatMessage {
  type: "user" | "bot";
  text: string;
}

export default function ContractorChatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  // Database sederhana: keyword regex + paragraf jawaban
  const knowledgeBase: { pattern: RegExp; response: string }[] = [
    {
      pattern: /harga|biaya|ongkos/i,
      response:
        "Biaya kontraktor desain rumah biasanya tergantung luas bangunan, kompleksitas desain, dan bahan yang digunakan. Kami bisa memberikan estimasi setelah mengetahui kebutuhan spesifik Anda.",
    },
    {
      pattern: /waktu|lama|durasi/i,
      response:
        "Waktu pengerjaan desain rumah rata-rata 2-4 minggu, tergantung jumlah revisi dan tingkat detail yang diinginkan.",
    },
    {
      pattern: /revisi|perubahan/i,
      response:
        "Kami menyediakan 2-3 kali revisi gratis selama proses desain agar hasil sesuai keinginan Anda.",
    },
    {
      pattern: /portfolio|contoh|hasil/i,
      response:
        "Silakan cek portfolio kami di website resmi untuk melihat contoh desain rumah yang telah kami kerjakan.",
    },
    {
      pattern: /kontak|hubungi|telp|email/i,
      response:
        "Anda bisa menghubungi kami melalui email: info@desainrumah.com atau telepon: 0812-3456-7890.",
    },
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Cari jawaban sesuai regex
    const found = knowledgeBase.find((item) => item.pattern.test(input));

    const botMessage: ChatMessage = {
      type: "bot",
      text: found
        ? found.response
        : "Maaf, saya belum bisa menjawab pertanyaan itu. Bisa Anda perjelas?",
    };

    // Simulasi delay bot
    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 300);

    setInput("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-xl shadow-md flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-center">Chatbot Kontraktor Rumah</h2>

      <div className="flex-1 overflow-y-auto h-64 border p-2 rounded-md flex flex-col gap-2">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-2 rounded-lg max-w-[80%] ${
              msg.type === "user" ? "bg-blue-100 self-end" : "bg-gray-100 self-start"
            }`}
          >
            {msg.text}
          </motion.div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 border rounded-md p-2 focus:outline-blue-400"
          type="text"
          placeholder="Tanya tentang kontraktor rumah..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 rounded-md hover:bg-blue-600 transition"
        >
          Kirim
        </button>
      </div>
    </div>
  );
}
