import PropTypes from "prop-types";
import { TechTag } from "./TechTag";

export const TechTags = ({ tags }) => {
  return (
    <p className="text-sm mt-1 flex items-center justify-left gap-2 flex-wrap">
      {tags.map((tag, index) => (
        <TechTag key={index} name={tag.name} color={tag.color} />
      ))}
    </p>
  );
};

TechTags.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
};

