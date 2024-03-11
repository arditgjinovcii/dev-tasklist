import Booking from "@/modules/bookings/pages/Booking";

const BookingPage = ({
  params,
}: {
  params: {
    id: number;
  };
}) => {
  return <Booking bookingId={params.id} />;
};
export default BookingPage;
