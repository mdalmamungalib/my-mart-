"use client";
import SubmitButton from "components/Forminput/SubmitButton";
import TextInput from "components/Forminput/TextInput";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [emailErr, setEmailErr] = useState("");
  async function onSubmit(data) {
    try {
      console.log(data);
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (response.ok) {
        console.log(responseData);
        setLoading(false);
        toast.success("User Created Successfully");
        reset();
        router.push("/");
      } else {
        setLoading(false);
        if (response.status === 409) {
          setEmailErr("User with this Email already exists");
          toast.error("User with this Email already exists");
        } else {
          // Handle other errors
          console.error("Server Error:", responseData.error);
          toast.error("Oops Something Went wrong");
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Something Went wrong, Please Try Again");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <TextInput
        label={"Full Name"}
        name={"name"}
        register={register}
        errors={errors}
      />
      <TextInput
        label={"Email"}
        name={"email"}
        register={register}
        errors={errors}
        type="email"
      />
      {emailErr && (
        <small className="text-sm text-red-600 ">{emailErr}</small>
      )}
      <TextInput
        label={"Password"}
        name={"password"}
        register={register}
        errors={errors}
        type="password"
      />
      <div>
        <SubmitButton
          isLoading={loading}
          buttonTitle={"Register"}
          LoadingButtonTitle={"Registering Please Wait..."}
          style={"w-full text-center"}
        />

        <p className="py-4 text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-lime-600 hover:underline dark:text-lime-500"
          >
            Login
          </Link>
        </p>
      </div>
    </form>
  );
}