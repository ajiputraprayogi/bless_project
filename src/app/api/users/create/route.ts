import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { supabase } from "@/lib/supabaseClient"; // pastikan path sesuai

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert ke Supabase
    const { data, error } = await supabase
      .from("users") // pastikan nama tabel di Supabase
      .insert([
        {
          name,
          email,
          password: hashedPassword,
        },
      ])
      .select()
      .single(); // ambil satu record yang baru dibuat

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { message: "Failed to create user" },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    console.error("Error creating user:", err);
    return NextResponse.json(
      { message: "Failed to create user" },
      { status: 500 }
    );
  }
}
