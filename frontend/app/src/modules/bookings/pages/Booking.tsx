import { getBookings } from "@/app/actions";
// import { getBookingsById } from '@/app/booking/[id]/actions';
import Button, { ButtonType } from "@/components/ui/Button";
import Title from "@/components/ui/Title";

interface BookingProps {
  bookingId: number;
}
const Booking = async ({ bookingId }: BookingProps) => {
  // In case endpoint for getting booking by id was provided by backend
  // const booking = await getBookingById(bookingId);
  const bookings = await getBookings();
  const booking = bookings.find((booking) => booking.id == bookingId);

  if (!booking)
    throw new Error(
      "Booking with that id was not found!  Please check the ID or try again later."
    );

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-xl w-full">
        <Title>Booking {booking.id}</Title>
        <p className="text-lg mt-4 mb-6">
          This booking is with{" "}
          <span className="font-semibold">{booking.doctor_name}</span> and it
          ends on <span className="font-semibold">{booking.end_time}</span>
        </p>
        <Button type={ButtonType.LINK} href="/">
          Back to Bookings
        </Button>
      </div>
    </div>
  );
};

export default Booking;
