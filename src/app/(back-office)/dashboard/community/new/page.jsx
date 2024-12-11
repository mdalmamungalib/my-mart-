"use client";
import { makePostRequest } from "../../../../../lib/apiRequest.js";
import { generateSlug } from "../../../../../lib/generateSlug.js";
import FormHeader from "components/backoffice/FormHeader/FormHeader.jsx";
import ImageInput from "components/Forminput/ImageInput.jsx";
import SubmitButton from "components/Forminput/SubmitButton.jsx";
import TextareaInput from "components/Forminput/TextareaInput.jsx";
import TextInput from "components/Forminput/TextInput.jsx";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectInput from "components/Forminput/SelectInput.jsx";
import ToggleInput from "components/Forminput/ToggleInput.jsx";

const Community = () => {
  const [imageUrl, setImageUrl] = useState("");
  const markets = [
    {
      id: 1,
      title: "Phone Sellers Market",
    },
    {
      id: 2,
      title: "Cloth Sellers Market",
    },
    {
      id: 3,
      title: "Laptop Sellers Market",
    },
    {
      id: 4,
      title: "Farmers Sellers Market",
    },
  ];
  const [loading, setLoading] = useState(false);

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { isActive: true },
  });

  const isActive = watch("isActive");
  async function onSubmit(data) {
    setLoading(true);
    const slug = generateSlug(data?.name);
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
            label="Name"
            name="name"
            register={register}
            errors={errors}
          />
          <SelectInput
            label="Select Markets"
            name="marketsIds"
            register={register}
            errors={errors}
            className="w-full"
            options={markets}
            multiple={false}
          />
          <TextareaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="categoryImageUploader"
            label={"Category Image"}
          />
          {/* toggle input */}
          <ToggleInput
            name={"isActive"}
            register={register}
            label={"Publish Your Category"}
            falseTitle={"Draft"}
            trueTitle={"Active"}
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
           -description-image */}
    </div>
  );
};

export default Community;