"use client";
import { makePostRequest } from "../../../../../../lib/apiRequest.js";
import FormHeader from "../../../../../../components/backoffice/FormHeader/FormHeader.jsx";
import ImageInput from "../../../../../../components/Forminput/ImageInput.jsx";
import SubmitButton from "../../../../../../components/Forminput/SubmitButton.jsx";
import TextareaInput from "../../../../../../components/Forminput/TextAreaInput.jsx";
import TextInput from "../../../../../../components/Forminput/TextInput.jsx";
import { generateSlug } from "../../../../../../lib/generateSlug.js";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const NewCoupons = () => {
  
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    // setLoading(true);
    // const slug = generateSlug(data?.name);
    // data.slug = slug;
    // data.imageUrl = imageUrl;
    console.log(data);

    // makePostRequest(
    //   setLoading,
    //   "api/categories",
    //   data,
    //   "Category",
    //   reset
    // );
   
  }
  return (
    <div>
      <FormHeader title={"New Coupon"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-5xl p-4 mx-auto mt-12 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Campaign Name"
            name="campaignName"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Campaign Code"
            name="campaignCode"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Coupon validity time"
            name="couponValidityTime"
            type="date"
            register={register}
            errors={errors}
          />
         
          
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle={"Save Category"}
          LoadingButtonTitle={"Creating Coupon Please Wait..."}
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

export default NewCoupons;
