import Image from "next/image";
import clsx from "clsx";
import DuduIcon from "../../icons/header/dudu.png";
import BubuIcon from "../../icons/header/bubu.png";

export const Profile = ({ hover, id }) => {
  return (
    <div
      className={clsx(
        "w-[180px] flex items-center text-start gap-2 text-teal-600",
        hover,
      )}
    >
      <Image
        className="size-[48px] rounded-3xl"
        src={id === "dudu" ? DuduIcon : BubuIcon}
        alt="avatar"
      />
      <div>
        <div>{id === "dudu" ? "Dudu" : "Bubu"}</div>
        <div className="text-slate-400 text-xs">Рейтинг: 1230</div>
      </div>
    </div>
  );
};
