import Link from "next/link";
import { RiMovie2AiFill } from "react-icons/ri";
import { IoMdMoon } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
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
    </div>
  );
}
