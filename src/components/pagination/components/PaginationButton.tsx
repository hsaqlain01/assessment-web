import React from "react";
import { IPaginationButton } from "../interfaces/pagination-button.interface";

const PaginationButton = ({
  handleButtonClick,
  page,
  isActive,
}: IPaginationButton) => {
  const baseClass =
    "relative inline-flex items-center p-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-primary hover:text-black focus:z-20 focus:outline-offset-0";
  const dynamicClass = isActive
    ? `${baseClass} bg-white text-black`
    : `${baseClass} text-white`;

  return (
    <button onClick={handleButtonClick} className={dynamicClass}>
      {page}
    </button>
  );
};

export default PaginationButton;
