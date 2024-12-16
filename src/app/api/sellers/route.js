import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const newSeller = await request.json();
    console.log(newSeller);
    return NextResponse.json(newSeller);
  } catch (error) {
    return NextResponse.json({
      message: "Failed to create Seller",
      error,
    }, {status: 500});
  }
}
