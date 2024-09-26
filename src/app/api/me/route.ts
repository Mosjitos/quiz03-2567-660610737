import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Kamolrat Saeboon",
    studentId: "660610737",
  });
};
