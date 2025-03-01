import { CircleIcon, CrossIcon, SquareIcon, TriangleIcon } from "../../icons";

export const GameSymbol = ({ symbol, className }) => {
  const Icon = [CrossIcon, CircleIcon, TriangleIcon, SquareIcon][symbol];

  if (!Icon) return;

  return <Icon className={className} />;
};
