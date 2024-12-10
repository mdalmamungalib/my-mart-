import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const marketData = await request.json();
    console.log(marketData);
    return NextResponse.json(marketData);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to create Category",
        error,
      },
      { status: 500 }
    );
  }
}
