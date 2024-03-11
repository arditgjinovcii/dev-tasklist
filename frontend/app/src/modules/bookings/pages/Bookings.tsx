import { getBookings } from "@/app/actions";
import BookingsHeader from "../components/list/BookingsHeader";
import BookingsList from "../components/list/BookingsList";

const Bookings = async () => {
  const bookings = await getBookings();

  return (
    <section>
      <BookingsHeader bookingsLength={bookings.length} />
      <BookingsList bookings={bookings} />
    </section>
  );
};

export default Bookings;
