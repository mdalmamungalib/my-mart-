import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const newCoupon = await request.json();
    console.log(newCoupon);
    return NextResponse.json(newCoupon);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to create Coupon",
        error,
      },
      { status: 500 }
    );
  }
}
