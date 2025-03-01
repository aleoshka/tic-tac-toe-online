import Image from "next/image";
import Logo from "../../icons/logo.png";
import { Profile } from "..";
import { ArrowDownIcon } from "../../icons";
import { Button } from "../../ui";

export const Header = () => {
  return (
    <header className="flex h-24 items-center justify-between px-8 bg-white shadow-lg">
      <div className="flex gap-6 items-center">
        <Image src={Logo} alt="logo" />
        <div className="w-px h-8 bg-slate-200" />
        <Button variant="primary" size="lg">
          Играть
        </Button>
      </div>
      <button className="flex items-center text-start gap-2 cursor-pointer text-teal-600 hover:text-teal-700">
        <Profile id="dudu" />
        <ArrowDownIcon />
      </button>
    </header>
  );
};
