"use server";

import { fetchAPI } from "@/utils/fetchApi";
import { convertToAMPMFormat } from "@/utils/time";
import { redirect } from "next/navigation";
import { z } from "zod";

const timeFormatRegex = /^(0?[1-9]|1[0-2]):[0-5][0-9] [AP]M$/;
const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;

const schema = z.object({
  service: z
    .string()
    .min(1, "Service is required and must be at least 1 character long."),
  doctor_name: z
    .string()
    .min(1, "Doctor name is required and must be at least 1 character long."),
  start_time: z
    .string()
    .regex(timeFormatRegex, 'Please enter time in the format "HH:MM AM/PM"'),
  end_time: z
    .string({
      required_error: "End time is required",
    })
    .regex(timeFormatRegex, 'Please enter time in the format "HH:MM AM/PM"'),
  date: z
    .string({
      required_error: "Date is required",
    })
    .regex(dateFormatRegex, 'Please enter date in the format "YY-MM-DD"'),
});

export async function createBooking(prevState: any, formData: FormData) {
  let start_time = formData.get("start_time");
  let end_time = formData.get("end_time");

  if (start_time) {
    start_time = convertToAMPMFormat(start_time as string);
  }
  if (end_time) {
    end_time = convertToAMPMFormat(end_time as string);
  }

  const validatedFields = schema.safeParse({
    service: formData.get("service"),
    doctor_name: formData.get("doctor_name"),
    start_time,
    end_time,
    date: formData.get("date"),
  });

  // Return early if the form data is invalid
  if (validatedFields.success === false) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  await fetchAPI("/bookings", "POST", validatedFields.data);

  redirect("/");
}
