import React, { useState } from "react";
import SVGComponent from "../Button/SendButton";

interface SearchComponentProps {
  onClose: () => void; // Hàm để đóng component
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    // Xử lý gửi dữ liệu tìm kiếm
    console.log("Search submitted:", searchTerm);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white border-b border-gray-300 shadow-lg z-50">
      <div className="relative flex items-center max-w-screen-lg mx-auto p-4">
        <button onClick={onClose} className="absolute top-3 left-3 m-3 text-gray-500 hover:text-gray-700">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 18L18 6M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="pl-12 pr-4 py-2 border border-gray-300 rounded-md shadow-sm w-full"
        />
        <button onClick={handleSearchSubmit} className="absolute right-3 text-gray-500 hover:text-gray-700">
          <SVGComponent />
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
