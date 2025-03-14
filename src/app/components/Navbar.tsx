"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Navbar = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div className="my-10 w-full p-5 bg-slate-900 flex justify-center items-center">
      <div className="space-x-5 text-md font-semibold text-white">
        <Link
          href="/?genre=trending"
          className={`${genre === "trending" ? "text-red-600" : "text-white"}`}
        >
          Trending
        </Link>
        <Link
          href="/?genre=top-rated"
          className={`${genre === "top-rated" ? "text-red-600" : "text-white"}`}
        >
          Top Rated
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
