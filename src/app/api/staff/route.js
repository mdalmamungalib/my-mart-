import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const StaffData = await request.json();
    console.log(StaffData);
    return NextResponse.json(StaffData);
  } catch (error) {
    return NextResponse.json({
      message: "Failed to create Category",
      error,
    }, {status: 500});
  }
}
