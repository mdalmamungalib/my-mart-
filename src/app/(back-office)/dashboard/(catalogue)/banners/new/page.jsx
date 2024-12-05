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

const NewBanner = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    setLoading(true);
    data.imageUrl = imageUrl;
    console.log(data);

    makePostRequest(
      setLoading,
      "api/banners",
      data,
      "Banner",
      reset
    );
    setImageUrl("");
  }
  return (
    <div>
      <FormHeader title={"New Banner"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-5xl p-4 mx-auto mt-12 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Banner URL"
            name="bannerUrl"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Banner Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="bannerImageUploader"
            label={"Banner Image"}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle={"Save Banner"}
          LoadingButtonTitle={"Creating Banner Please Wait..."}
        />
      </form>

      {/* -id
           -image
           -description 
           -url */}
    </div>
  );
};

export default NewBanner;
