import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const productData = await request.json();
    // const { title, sku, barcode, productPrice, salePrice, categoryIds, sellersIds, imageUrl, description,  } =
    //   await request.json();
    // const newProduct = { title, sku, barcode, productPrice, salePrice, categoryIds, sellersIds, imageUrl, description, };
    console.log(productData);
    return NextResponse.json(productData);
  } catch (error) {
    return NextResponse.json({
      message: "Failed to create Category",
      error,
    }, {status: 500});
  }
}
