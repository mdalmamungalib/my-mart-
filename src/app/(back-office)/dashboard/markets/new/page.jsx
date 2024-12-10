"use client";
import { makePostRequest } from "../../../../../lib/apiRequest.js";
import FormHeader from "components/backoffice/FormHeader/FormHeader.jsx";
import ImageInput from "components/Forminput/ImageInput.jsx";
import SubmitButton from "components/Forminput/SubmitButton.jsx";
import TextInput from "components/Forminput/TextInput.jsx";
import { generateSlug } from "../../../../../lib/generateSlug.js";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ToggleInput from "components/Forminput/ToggleInput.jsx";
import TextareaInput from "components/Forminput/TextareaInput.jsx";

const NewMarkets = () => {
  const [loading, setLoading] = useState(false);
  const [logoUrl, setLogoUrl] = useState("");

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
    
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.logoUrl = logoUrl;
    console.log(data);
    
    makePostRequest(
      setLoading,
      "api/markets",
      data,
      "Markets",
      reset
    );
  }
  return (
    <div>
      <FormHeader title={"New Market"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-5xl p-4 mx-auto mt-12 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Market Title"
            name="title"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={logoUrl}
            setImageUrl={setLogoUrl}
            endpoint="marketLogoUpload"
            label={"Market Logo"}
          />
          <TextareaInput
            label="Market Description"
            name="description"
            register={register}
            errors={errors}
          />
          {/* toggle input */}
          <ToggleInput
            name={"isActive"}
            register={register}
            label={"Market Status"}
            falseTitle={"Draft"}
            trueTitle={"Active"}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle={"Save Market"}
          LoadingButtonTitle={"Creating Market Please Wait..."}
        />
      </form>

      {/* -id
      -Campaign Image
           -Campaign Name
           -Campaign Code
           -Coupon validity time */}
    </div>
  );
};

export default NewMarkets;
