import clsx from "clsx";
import Image from "next/image";

export const Profile = ({ className, name, rating, avatar }) => {
  return (
    <div
      className={clsx(
        "flex items-center text-start gap-2 text-teal-600",
        className,
      )}
    >
      <Image className="size-[48px] rounded-3xl" src={avatar} alt="avatar" />
      <div className="overflow-hidden">
        <div className="text-lg truncate">{name}</div>
        <div className="text-slate-400 text-xs">Рейтинг: {rating}</div>
      </div>
    </div>
  );
};
