import db from "lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { isActive, imageUrl, description, title, slug } =
      await request.json();
    const newCategory = await db.category.create({
      data: { isActive, imageUrl, description, title, slug },
    });
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
