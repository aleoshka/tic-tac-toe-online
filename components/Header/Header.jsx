import Image from "next/image";
import Logo from "../../icons/header/logo.svg";
import { Profile } from "../Profile";
import ArrowDownIcon from "../../icons/header/arrow-down.svg";

export const Header = () => {
  return (
    <header className="flex h-24 items-center justify-between px-8 bg-white shadow-lg">
      <div className="flex gap-6 items-center">
        <Image src={Logo} alt="logo" />
        <div className="w-px h-8 bg-slate-200" />
        <button className="w-44 rounded-lg text-white py-2 bg-teal-600 text-2xl cursor-pointer hover:bg-teal-700 transition-colors">
          Играть
        </button>
      </div>
      <button className="flex items-center text-start gap-2 cursor-pointer">
        <Profile hover="hover:text-teal-700" id="dudu" />
        <Image src={ArrowDownIcon} alt="arrow-down" />
      </button>
    </header>
  );
};
