"use client";
import { makePostRequest } from "../../../../../lib/apiRequest.js";
import { generateSlug } from "../../../../../lib/generateSlug.js";
import FormHeader from "components/backoffice/FormHeader/FormHeader.jsx";
import ImageInput from "components/Forminput/ImageInput.jsx";
import SubmitButton from "components/Forminput/SubmitButton.jsx";
import TextareaInput from "components/Forminput/TextareaInput.jsx";
import TextInput from "components/Forminput/TextInput.jsx";

import React, { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import SelectInput from "components/Forminput/SelectInput.jsx";
import ToggleInput from "components/Forminput/ToggleInput.jsx";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Training = () => {
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

  // Quill Editor
  const [content, setContent] = useState("");
//Custom Tool Bar
  // const modules = {
  //   toolbar: [
  //     [{ header: [1, 2, false] }],
  //     ["bold", "italic", "underline", "strike", "blockquote"],
  //     [{ list: "ordered" }, { list: "bullet" }],
  //     ["link", "color", "image"],
  //     [{ "code-block": true }],
  //     ["clean"],
  //   ],
  // };
  // const formats = [
  //   "header",
  //   "bold",
  //   "italic",
  //   "underline",
  //   "strike",
  //   "blockquote",
  //   "list",
  //   "bullet",
  //   "link",
  //   "indent",
  //   "image",
  //   "code-block",
  //   "color",
  // ];
  // Quill Editor End

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
      <FormHeader title={"New Training"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-5xl p-4 mx-auto mt-12 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Training Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select Category"
            name="categoryId"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
          />
          <TextareaInput
            label="Training Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="trainingImageUploader"
            label={"Training Thumbnail"}
          />

          {/* content */}
          {/* <div className="sm:col-span-2">
                <label
                  htmlFor="content"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Blog Content
                </label>
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  formats={formats}
                />
              </div> */}
          {/* content End */}

          {/* toggle input */}
          <ToggleInput
            name={"isActive"}
            register={register}
            label={"Publish Your Training"}
            falseTitle={"Draft"}
            trueTitle={"Active"}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle={"Create Training"}
          LoadingButtonTitle={"Creating Training Please Wait..."}
        />
      </form>

      {/* -id
           -title
           -ExpertID
           -category
           -slug
           -description
           -content => rich text
           -image */}
    </div>
  );
};

export default Training;
