"use client";
import { Booking } from "@/modules/bookings/types/Booking";
import Link from "next/link";
import { useMemo } from "react";

interface BookingCardProps {
  booking: Booking;
}
const BookingCard = ({ booking }: BookingCardProps) => {
  const bookingDate = useMemo(() => {
    const date = new Date(booking.date);
    return date.toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }, [booking]);
  return (
    <Link
      className="block rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out bg-gray-100 font-medium py-4 px-6"
      href={`/booking/${booking.id}`}
    >
      A booking on {bookingDate} starting at {booking.start_time}
    </Link>
  );
};

export default BookingCard;
