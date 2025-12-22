import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Backend is working!",
    time: new Date().toLocaleTimeString(),
  });
}
