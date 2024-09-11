import { useState } from "react";
import className from "classnames/bind";
import styles from "./InputSearch.module.scss";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";

const cx = className.bind(styles);
function InputSearch() {
  const navigate = useNavigate();
  const [isInputFocused, setInputFocused] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    const convertedValue = slugify(search, {
      replacement: "-",
      lower: true,
      strict: true,
    });
    navigate(`/categories/${convertedValue}`);
    setSearch("");
  };
  return (
    <form
      onSubmit={handleSearch}
      className={`flex items-center overflow-hidden rounded-full border-2 ${
        isInputFocused ? "border-org" : "border-gray-200"
      }`}
    >
      <input
        className={`${cx(
          "searchInput",
        )} w-auto rounded-full border-0 ps-4 font-medium text-darkLight placeholder-gray-400 outline-none focus:border-transparent focus:ring-0 text-black`}
        type="text"
        name="nameSearch"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        id="nameSearch"
        placeholder="Search"
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />
    </form>
  );
}

export default InputSearch;
