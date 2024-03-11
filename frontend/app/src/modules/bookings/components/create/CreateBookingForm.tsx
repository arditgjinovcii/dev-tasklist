"use client";

import { createBooking } from "@/app/booking/create/actions";
import Button, { ButtonType } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Link from "next/link";
import { useFormState } from "react-dom";

const CreateBookingForm = () => {
  const [state, formAction] = useFormState(createBooking, {});

  return (
    <form
      className="flex flex-col gap-6 items-start w-full mt-10"
      action={formAction}
    >
      <div>
        <Label name="service">Service</Label>
        <Input name="service" type="text" placeholder="Dental Checkup" />
      </div>
      <div>
        <Label name="doctor_name">Doctor Name</Label>
        <Input name="doctor_name" type="text" placeholder="John Doe" />
      </div>
      <div>
        <Label name="start_time">Start Time</Label>
        <Input name="start_time" type="time" />
      </div>
      <div>
        <Label name="end_time">End Time</Label>
        <Input name="end_time" type="time" />
      </div>
      <div>
        <Label name="date">Date</Label>
        <Input name="date" type="date" />
      </div>
      {state.errors && (
        <ul className="bg-red-800 p-3 text-white rounded-lg font-medium">
          <li className="mb-2">
            <strong>Please fix the following errors and try again:</strong>
          </li>
          {Object.keys(state.errors)?.map((error) => (
            <li className="mt-1 text-sm list-disc ml-4" key={error}>
              {state.errors[error].join("<br />")}
            </li>
          ))}
        </ul>
      )}
      <div className="flex gap-4 w-[400px] max-w-full">
        <Button type={ButtonType.SUBMIT}>Submit</Button>
        <Link
          className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
          href="/"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default CreateBookingForm;
