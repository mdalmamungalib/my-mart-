import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const newCategory = await request.json();
    console.log(newCategory);
    return NextResponse.json(newCategory);
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
