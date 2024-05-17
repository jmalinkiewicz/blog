"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Button from "./ui/buttons/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div
      className="grid place-items-center h-full w-full flex-grow
    "
    >
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-4xl font-bold">Something went wrong!</h1>
        <div className="flex-grow-0">
          <Button
            variant="primary"
            action={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
            label="Try again"
          />
        </div>
      </div>
    </div>
  );
}
