import clsx from "clsx";
import Image from "next/image";
import DuduIcon from "../../icons/dudu.png";
import BubuIcon from "../../icons/bubu.png";

export const Profile = ({ className, id }) => {
  return (
    <div
      className={clsx(
        "flex items-center text-start gap-2 text-teal-600",
        className,
      )}
    >
      <Image
        className="size-[48px] rounded-3xl"
        src={id === "dudu" ? DuduIcon : BubuIcon}
        alt="avatar"
      />
      <div>
        <div className="text-lg">{id === "dudu" ? "Dudu" : "Bubu"}</div>
        <div className="text-slate-400 text-xs">Рейтинг: 1230</div>
      </div>
    </div>
  );
};
