"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import { trace } from "console";
import CustomEmail from "@/email/custom-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  //   console.log("Running on server");
  //   console.log(formData.get("email"));
  //   console.log(formData.get("message"));
  const email = formData.get("email");
  const message = formData.get("message");

  //* simple server-side validation
  if (!validateString(email, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Jabeed Portfolio <onboarding@resend.dev>",
      to: "shivamt73885@gmail.com",
      subject: "Message from portfolio contact form",
      reply_to: email,
      //   text: message,
      react: React.createElement(CustomEmail, {
        message: message,
        email: email,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
