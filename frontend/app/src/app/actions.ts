"use server";

import { Booking } from "@/modules/bookings/types/Booking";
import { fetchAPI } from "@/utils/fetchApi";

export async function getBookings() {
  const bookings = await fetchAPI("/bookings");
  return bookings as Booking[];
}
