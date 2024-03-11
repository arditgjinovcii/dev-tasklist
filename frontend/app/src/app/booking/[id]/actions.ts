import { fetchAPI } from "@/utils/fetchApi";
import { Booking } from "@/modules/bookings/types/Booking";

// API endpoint not provided. Following code uses API getBookingById/:id:

export async function getBookingById(id) {
  const booking = await fetchAPI(`/booking/${id}`);
  return booking as Booking;
}
