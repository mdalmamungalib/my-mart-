import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const newProduct = await request.json();
    console.log(newProduct);
    return NextResponse.json(newProduct);
  } catch (error) {
    return NextResponse.json({
      message: "Failed to create Product",
      error,
    }, {status: 500});
  }
}
