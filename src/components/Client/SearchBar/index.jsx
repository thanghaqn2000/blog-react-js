import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <div className="relative flex items-center">
        <input
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200
            rounded-md pl-5 pr-3 py-2 transition duration-300 ease focus:outline-none
            focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Tiêu đề bài viết"
          value={searchTerm}
          onChange={handleInputChange} // Cập nhật giá trị khi người dùng nhập
        />

        <button
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          type="button"
          onClick={handleSearch}
        >
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
