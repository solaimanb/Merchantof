import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    console.log(users)

    return NextResponse.json({ users, status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}