import Link from "next/link";
import { RiMovie2AiFill } from "react-icons/ri";
import { IoMdMoon } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Movie from "./components/Movie";
export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-black p-10">
      <header className="flex justify-between items-center text-white">
        <div className="flex gap-5 font-bold">
          <div>
            <Link href="/about">
              <span className="hidden md:block text-xl">Home</span>
              <FaHome className="cursor-pointer font-bold text-3xl md:hidden" />
            </Link>
          </div>
          <div>
            <Link href="/about">
              <span className="hidden md:block text-xl">About</span>
              <FaInfoCircle className="cursor-pointer font-bold text-3xl md:hidden" />
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <IoMdMoon className="cursor-pointer font-bold text-3xl" />
          <button className="px-2 font-bold text-md py-2 bg-red-600 rounded-md hover:bg-red-700 hidden md:block">
            Vista Stream
          </button>
          <RiMovie2AiFill className="text-red-500 font-bold text-3xl" />
        </div>
      </header>
      <div className="my-10 w-full p-5 bg-slate-900 flex justify-center items-center">
        <div className="space-x-5 text-md font-semibold text-white">
          <Link href="/trending">Trending</Link>
          <Link href="/top-rated">Top Rated</Link>
        </div>
      </div>
      <div className="my-10">
        <div className="flex gap-3">
          <input
            type="text"
            className="py-1 px-2 border border-slate-500 rounded-md outline-none bg-gray-300 w-full text-xl placeholder:text-gray-400"
            placeholder="Search Movie Title..."
          />
          <button className="bg-red-600 px-3 py-1 text-xl rounded-md text-white">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="grid gap-5 grid-cols-12">
        <div className="col-span-12 md:col-span-4 lg:col-span-4">
          <Movie />
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-4">
          <Movie />
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-4">
          <Movie />
        </div>
      </div>
    </div>
  );
}
