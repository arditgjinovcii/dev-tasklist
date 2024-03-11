import { Booking } from "@/modules/bookings/types/Booking";
import BookingCard from "./BookingCard";

interface BookingsListProps {
  bookings: Booking[];
}

const BookingsList = ({ bookings }: BookingsListProps) => {
  return (
    <div className="gap-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {bookings.map((booking) => (
        <BookingCard key={booking.id} booking={booking} />
      ))}
    </div>
  );
};

export default BookingsList;
