import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const newMarket = await request.json();
    console.log(newMarket);
    return NextResponse.json(newMarket);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to create Market",
        error,
      },
      { status: 500 }
    );
  }
}
