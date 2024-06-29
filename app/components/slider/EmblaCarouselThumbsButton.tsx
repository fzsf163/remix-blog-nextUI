import React from "react";

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
  img: string;
};

export const Thumb: React.FC<PropType> = props => {
  const { selected, index, onClick, img } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected " : ""
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        <img
          src={img}
          className={`size-20 rounded-lg hover:scale-95 transition-transform duration-150 ease-in-out ${
            selected ? "border-2 border-blue-300" : ""
          }`}
        ></img>
      </button>
    </div>
  );
};
