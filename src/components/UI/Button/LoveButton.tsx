import React from "react";
// import { IMovie } from "../../../types/type.movie";

interface IProps {
  onAddFavorite: () => void;
  style?: string;
}
const LoveButton = ({ onAddFavorite, style = "" }: IProps) => {
  return (
    <button
      onClick={onAddFavorite}
      className={`flex-none flex items-center justify-center ${style} w-9 h-9 rounded-md text-gray-400 border border-gray-300`}
      type="button"
      aria-label="like"
    >
      <svg width="20" height="20" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        />
      </svg>
    </button>
  );
};

export default LoveButton;