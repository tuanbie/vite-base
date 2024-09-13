import React, { useState } from "react";
import "./style.css";
import { IoClose } from "react-icons/io5";

interface SearchComponentProps {
  onClose: () => void;
  style: string;
  styleBg: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onClose, style, styleBg }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    // Xử lý gửi dữ liệu tìm kiếm
    console.log("Search submitted:", searchTerm);
  };

  return (
    <div className={`fixed top-0 ${styleBg}`}>
      <div className={`relative flex items-center max-w-screen-lg ${style} `}>
        <button onClick={onClose} className="absolute m-3 text-gray-500 hover:text-gray-700">
          <IoClose className="text-xl" />
        </button>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="pl-12 pr-4 py-2 rounded-3xl border border-gray-300 shadow-sm w-full "
        />
        <button onClick={handleSearchSubmit} className=" absolute right-7 text-gray-500 hover:text-gray-700">
          {/* <SVGComponent /> */}
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
