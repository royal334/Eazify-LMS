import { NextRequest, NextResponse } from "next/server";
import axios from 'axios'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

     if (!email && !password) {
     return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
     }
  try{
  // Call your Swagger backend endpoint
const res = await axios.post(
  "https://eazify-lms-backend.onrender.com/auth/login",
  { email, password },
  { headers: { "Content-Type": "application/json" } }
);

  if (!res ||  res.status !== 200) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = res.data.token; // Adjust according to your API response

  // Set HTTP-only cookie
  const response = NextResponse.json({ success: true });
  response.cookies.set("token", token, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // 1 day
  });

  return response;
}
  catch (error) {
    console.error("Login error:", error); 
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}