"use client";
import FormHeader from "components/backoffice/FormHeader/FormHeader";
import SubmitButton from "components/Forminput/SubmitButton";
import TextareaInput from "components/Forminput/TextAreaInput";
import TextInput from "components/Forminput/TextInput";
import { generateSlug } from "lib/generateSlug";
import React from "react";
import { useForm } from "react-hook-form";

const NewCategory = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const slug = generateSlug(data?.name);
    data.slug = slug;
    console.log(data);
  }
  return (
    <div>
      <FormHeader title={"New Category"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-5xl p-4 mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Name"
            name="name"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton
          isLoading={false}
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

export default NewCategory;
