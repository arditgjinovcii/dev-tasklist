import Title from "@/components/ui/Title";
import Button, { ButtonType } from "@/components/ui/Button";

interface BookingsHeaderProps {
  bookingsLength: number;
}
const BookingsHeader = ({ bookingsLength }: BookingsHeaderProps) => {
  return (
    <div className="flex items-center mb-8 justify-between">
      <Title>
        Bookings{" "}
        <span className="block md:inline text-sm font-medium md:ml-2 text-gray-600">
          Total of {bookingsLength} bookings
        </span>
      </Title>
      <Button type={ButtonType.LINK} href="/booking/create">
        Create Booking
      </Button>
    </div>
  );
};

export default BookingsHeader;
