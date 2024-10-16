"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { toast } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { sendContactForm } from "@/lib/utils";

export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [capValue, setCapValue] = useState();
  const onCaptchaChange = (value: any) => {
    setCapValue(value);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormError({ ...formError, [e.target.name]: "" });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSubmitHandler = async () => {
    if (!capValue) {
      toast.error("Please verify the captcha");
      return;
    }
    if (formData.name === "") {
      setFormError({ ...formError, name: "Name is required" });
      return;
    }
    if (formData.email === "") {
      setFormError({ ...formError, email: "Email is required" });
      return;
    }
    if (isEmail(formData.email)) {
      setFormError({ ...formError, email: "Invalid Email format" });
      return;
    }
    if (formData.message === "") {
      setFormError({ ...formError, message: "Message is required" });
      return;
    }

    try {
      setLoading(true);
      await sendContactForm(formData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Error while submitting the form, try later");
    }
  };

  return (
    <div className="w-[35%] max-md:w-full">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4  shadow-input bg-white dark:bg-black">
        <h2 className="font-bold max-md:hidden text-xl text-neutral-800 dark:text-neutral-200">
          Get in touch
        </h2>
        {/* <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Login to aceternity if you can because we don&apos;t have a login flow
          yet
        </p> */}

        <form className="my-8">
          {/* <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Durden" type="text" />
            </LabelInputContainer>
          </div> */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="firstname">Full Name</Label>
            <Input
              placeholder="Tyler"
              type="text"
              onChange={handleChange}
              name="name"
              value={formData.name}
            />
            {formError.name && <p className="text-red-500">{formError.name}</p>}
            <BottomGradient />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
            {formError.email && (
              <p className="text-red-500">{formError.email}</p>
            )}
            <BottomGradient />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <textarea
              onChange={handleChange}
              name="message"
              value={formData.message}
              placeholder="Your message here"
              rows={6}
              className="flex w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400"
            />
            {formError.message && (
              <p className="text-red-500">{formError.message}</p>
            )}
            <BottomGradient />
          </LabelInputContainer>
          <div className=" mx-auto overflow-hidden my-4 w-full flex justify-center items-center">
            <ReCAPTCHA
              sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET}`}
              onChange={onCaptchaChange}
            />
          </div>
          <button
            type="button"
            // disabled={loading}
            onClick={onSubmitHandler}
            className="p-[3px] relative w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Send &rarr;
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-focus/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-focus/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
