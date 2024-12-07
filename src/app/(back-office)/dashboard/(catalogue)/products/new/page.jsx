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
import { Plus, X } from "lucide-react";

const NewProduct = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [tags, setTags] = useState(["tag1", "tag2"]);
  const [showTagForm, setShowTagForm] = useState(false);
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
      "api/products",
      data,
      "Product",
      reset
    );
    setImageUrl("");
  }
  return (
    <div>
      <FormHeader title={"New Product"} />
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
            className="w-full"
          />
          <TextInput
            label="Product Barcode"
            name="barcode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Price (Before Discount)"
            type="number"
            name="productPrice"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Price (Discounted)"
            type="number"
            name="salePrice"
            register={register}
            errors={errors}
            className="w-full"
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

          <div className="sm:col-span-2">
            {showTagForm ? (
              <div className="flex items-center w-full">
                <div className="flex w-full ">
                  <input
                    type="text"
                    id="voice-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Create Tags..."
                    required
                  />
                  <button className=" flex items-center space-x-2 py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <Plus className="w-4 h-4 "/>
                    <span>Add</span>
                  </button>
                  <button onClick={() => setShowTagForm(false)} className="p-4 ml-2 bg-red-600 rounded-full">
                    <X className="w-4 h-4 "/>
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowTagForm(true)}
                type="button"
                className="flex items-center px-4 py-2 space-x-2 "
              >
                <Plus />
                <span>Add Tags</span>
              </button>
            )}
          </div>
          <TextareaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />
        </div>

        <SubmitButton
          isLoading={loading}
          buttonTitle={"Save Product"}
          LoadingButtonTitle={"Creating Product Please Wait..."}
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
