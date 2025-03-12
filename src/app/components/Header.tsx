"use client";

import MenuItem from "./MenuItem";
import { RiMovie2AiFill } from "react-icons/ri";
import { IoMdMoon } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import useTheme from "@/app/hooks/useTheme";

const Header = () => {
  const [theme, toggleTheme] = useTheme("light");
  return (
    <header className="flex justify-between items-center text-white">
      <div className="flex gap-5 font-bold">
        <div>
          <MenuItem url="/" title="Home" Icon={FaHome} />
        </div>
        <div>
          <MenuItem url="/about" title="About" Icon={FaInfoCircle} />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <IoMdMoon
          className="cursor-pointer font-bold text-3xl"
          onClick={() => toggleTheme()}
        />
        <p>{theme}</p>
        <button className="px-2 font-bold text-md py-2 bg-red-600 rounded-md hidden md:block">
          Vista Stream
        </button>
        <RiMovie2AiFill className="text-red-500 font-bold text-3xl" />
      </div>
    </header>
  );
};

export default Header;
