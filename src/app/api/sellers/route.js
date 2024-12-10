import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const sellerData = await request.json();
    console.log(sellerData);
    return NextResponse.json(sellerData);
  } catch (error) {
    return NextResponse.json({
      message: "Failed to create Category",
      error,
    }, {status: 500});
  }
}
