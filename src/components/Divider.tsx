import React from "react";

const Divider = ({
  containerClassName,
  backgroundColor,
}: {
  containerClassName: string;
  backgroundColor: string;
}) => {
  return (
    <div className={`${containerClassName} `}>
      <div className="dark:hidden">
        <svg viewBox="0 0 500 200">
          <path
            d="M 0 10 C 150 40 300 0 500 20 L 500 0 L 0 0"
            fill={backgroundColor}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Divider;
