import PropTypes from "prop-types";

export const TechTag = ({ name, color }) => {
  const colorMap = {
    indigo: "border-indigo-500 bg-indigo-700",
    green: "border-green-500 bg-green-700",
    rose: "border-rose-500 bg-rose-700",
    lime: "border-lime-500 bg-lime-700",
    sky: "border-sky-500 bg-sky-700",
    amber: "border-amber-500 bg-amber-700",
    purple: "border-purple-500 bg-purple-700",
    teal: "border-teal-500 bg-teal-700",
    red: "border-red-500 bg-red-700",
    blue: "border-blue-500 bg-blue-700",
    slate: "border-slate-500 bg-slate-700",
    orange: "border-orange-500 bg-orange-700",
    cyan: "border-cyan-500 bg-cyan-700",
    emerald: "border-emerald-500 bg-emerald-700",
    pink: "border-pink-500 bg-pink-700",
    zinc: "border-zinc-500 bg-zinc-700",
    stone: "border-stone-500 bg-stone-700",
  };

  const colorClass = colorMap[color] || colorMap.indigo;

  return (
    <div
      className={`border-2 text-center text-xs rounded-3xl font-bold px-2 py-1 text-white ${colorClass}`}
    >
      {name}
    </div>
  );
};

TechTag.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    "indigo",
    "green",
    "rose",
    "lime",
    "sky",
    "amber",
    "purple",
    "teal",
    "red",
    "blue",
    "slate",
    "orange",
    "cyan",
    "emerald",
    "pink",
    "zinc",
    "stone",
  ]).isRequired,
};
