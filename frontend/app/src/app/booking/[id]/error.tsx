"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md shadow-red-700 border-none">
      <h2 className="text-red-600 font-semibold text-3xl mb-4">
        Oops! Something went wrong.
      </h2>
      <p className="text-x1 text-gray-700">{error.message}</p>
      <Link
        href="/"
        className="mt-4 text-blue-600 hover:underline inline-block"
      >
        Back to bookings
      </Link>
    </div>
  );
}
