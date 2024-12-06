"use client";
import { makePostRequest } from "../../../../../../lib/apiRequest.js";
import FormHeader from "../../../../../../components/backoffice/FormHeader/FormHeader.jsx";
import ImageInput from "../../../../../../components/Forminput/ImageInput.jsx";
import SubmitButton from "../../../../../../components/Forminput/SubmitButton.jsx";
import TextareaInput from "../../../../../../components/Forminput/TextareaInput.jsx";
import TextInput from "../../../../../../components/Forminput/TextInput.jsx";
import { generateSlug } from "../../../../../../lib/generateSlug.js";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectInput from "components/Forminput/SelectInput.jsx";

const NewProduct = () => {
  const [imageUrl, setImageUrl] = useState("");
  const categories = [
    {
      id: 1,
      title: "Category 1",
    },
    {
      id: 2,
      title: "Category 2",
    },
    {
      id: 3,
      title: "Category 3",
    },
  ];
  const sellers = [
    {
      id: 1,
      title: "Sellers 1",
    },
    {
      id: 2,
      title: "Sellers 2",
    },
    {
      id: 3,
      title: "Sellers 3",
    },
  ];
  const [loading, setLoading] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    setLoading(true);
    const slug = generateSlug(data?.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    console.log(data);

    makePostRequest(
      setLoading,
      "api/categories",
      data,
      "Category",
      reset
    );
    setImageUrl("");
  }
  return (
    <div>
      <FormHeader title={"New Category"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-5xl p-4 mx-auto mt-12 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Product Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Product SKU"
            name="sku"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Product Barcode"
            name="barcode"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Product Price (Before Discount)"
            type="number"
            name="productPrice"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Product Price (Discounted)"
            type="number"
            name="salePrice"
            register={register}
            errors={errors}
          />
          <SelectInput
            label="Select Category"
            name="categoryIds"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
          />
          <SelectInput
            label="Select Sellers"
            name="sellersIds"
            register={register}
            errors={errors}
            className="w-full"
            options={sellers}
          />

          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="productImageUploader"
            label={"Product Image"}
          />
          <TextareaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle={"Save Category"}
          LoadingButtonTitle={"Creating Category Please Wait..."}
        />
      </form>

      {/* -id
           -title
           -slug
           -description
           -images[]
           -sku
           -barcode
           -productPrice
           -selPrice
           -category
           -farmer
           -tags[]
           */}
    </div>
  );
};

export default NewProduct;
