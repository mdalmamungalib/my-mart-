import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const newTrainings = await request.json();
    
    console.log("", newTrainings);
    return NextResponse.json(newTrainings);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to create Training",
        error,
      },
      { status: 500 }
    );
  }
}
