import db from "lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export default async function POST(request) {
  try {
    //extract use credentials
    const { name, email, password } = await request.json();
    //check if user already exists by email address  (for uniqueness)
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return (
        NextResponse.json({
          data: null,
          message: "User already exists",
        }),
        { status: 409 }
      );
    }
    //hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);
    //if user does not exist, create a new one
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    console.log(newUser);
    return NextResponse.json(newUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create a user",
        error,
      },
      { status: 500 }
    );
  }
}
