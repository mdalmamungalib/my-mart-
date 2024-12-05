import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { banners,  imageUrl, description } =
      await request.json();
    const newBanner = { banners,  imageUrl, description };
    console.log(newBanner);
    return NextResponse.json(newBanner);
  } catch (error) {
    return NextResponse.json({
      message: "Failed to create Banner",
      error,
    }, {status: 500});
  }
}
