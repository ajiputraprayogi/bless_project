"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import Label from "@/components/form/Label"; // sesuaikan import Label
import bcrypt from "bcryptjs";

export default function CreateUserForm() {
  const router = useRouter();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Hash password sebelum dikirim (opsional di client, bisa juga di server)
      const hashedPassword = await bcrypt.hash(password, 10);

      const res = await fetch("/api/users/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: nama, email, password: hashedPassword }),
      });

      if (!res.ok) throw new Error("Gagal menyimpan user");

      alert("User berhasil ditambahkan!");
      router.push("/backend/users"); // kembali ke tabel user
    } catch (err) {
      console.error(err);
      alert("Gagal menambahkan user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      <div>
        <Label>Nama</Label>
        <Input
          type="text"
          id="nama"
          name="nama"
          required
          onChange={(e) => setNama(e.target.value)}
          placeholder="Input Nama"
        />
      </div>

      <div>
        <Label>Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Input Email"
        />
      </div>

      <div>
        <Label>Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Input Password"
        />
      </div>

      <div></div> {/* Kosong agar grid tetap rapi */}

      <div></div>
      <div className="flex justify-end">
        <Button
          size="sm"
          className="mr-2"
          variant="danger"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            router.back();
          }}
        >
          Kembali
        </Button>

        <Button size="sm" variant="primary" type="submit" disabled={loading}>
          {loading ? "Menyimpan..." : "Simpan"}
        </Button>
      </div>
    </form>
  );
}
