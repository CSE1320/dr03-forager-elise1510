import React from 'react';

const Search = ({ setSearchTerm, onFilterClick }) => {
  return (
    <div className="flex items-center justify-center gap-3 w-[337.336px] h-[39px] bg-white rounded-[19.5px]">
      {/* Search Icon (Left) */}
      <img
        src="/search-icon.svg"
        alt="Search Icon"
        width="26"
        height="24"
        className="w-[25.244px] h-[24px] flex-shrink-0"
      />

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for a mushroom"
        className="flex-1 text-center text-black text-opacity-50 font-nunito text-base font-normal leading-normal outline-none placeholder:text-black placeholder:text-opacity-50"
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
      />

      {/* Filter Icon (Right) */}
      <img
        src="/vector.svg"
        alt="Filter Icon"
        width="20"
        height="22"
        className="w-[19.336px] h-[21.753px] flex-shrink-0 cursor-pointer"
        onClick={onFilterClick} // Trigger the FilterSettings screen
      />
    </div>
  );
};

export default Search;