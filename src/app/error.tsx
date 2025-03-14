"use client";
import { useEffect } from "react";

type errorProps = {
  error: string;
  reset: () => void;
};

const Error = ({ error, reset }: errorProps) => {
  useEffect(() => {
    console.log("error", error);
  }, [error]);

  return (
    <div className="text-center">
      <h1 className="text-red-500 text-xl font-semibold mb-5">
        Snap! Something went wrong. Please try again later.
      </h1>
      <div
        className="text-yellow-300 hover:text-yellow-400 cursor-pointer"
        onClick={() => reset()}
      >
        Try Again
      </div>
    </div>
  );
};

export default Error;
