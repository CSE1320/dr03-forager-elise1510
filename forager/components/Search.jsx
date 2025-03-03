import React from 'react';

const Search = ({ setSearchTerm, onFilterClick }) => {
  return (
    <div className="flex items-center justify-center gap-3 w-[337.336px] h-[39px] bg-white rounded-[19.5px]">
      {/* Search Icon (Left) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="24"
        viewBox="0 0 26 24"
        fill="none"
        className="w-[25.244px] h-[24px] flex-shrink-0"
      >
        <path
          d="M20.6165 21L13.9898 14.7C13.4639 15.1 12.8591 15.4167 12.1754 15.65C11.4917 15.8833 10.7642 16 9.9928 16C8.08193 16 6.46489 15.3707 5.14166 14.112C3.81843 12.8533 3.15646 11.316 3.15576 9.5C3.15506 7.684 3.81703 6.14667 5.14166 4.888C6.46629 3.62933 8.08334 3 9.9928 3C11.9023 3 13.5197 3.62933 14.845 4.888C16.1703 6.14667 16.8319 7.684 16.8298 9.5C16.8298 10.2333 16.7071 10.925 16.4617 11.575C16.2163 12.225 15.8832 12.8 15.4624 13.3L22.0891 19.6L20.6165 21ZM9.9928 14C11.3076 14 12.4254 13.5627 13.3461 12.688C14.2668 11.8133 14.7268 10.7507 14.7261 9.5C14.7254 8.24933 14.2654 7.187 13.3461 6.313C12.4268 5.439 11.309 5.00133 9.9928 5C8.67658 4.99867 7.55916 5.43633 6.64055 6.313C5.72193 7.18967 5.26157 8.252 5.25947 9.5C5.25736 10.748 5.71772 11.8107 6.64055 12.688C7.56337 13.5653 8.68079 14.0027 9.9928 14Z"
          fill="black"
          fillOpacity="0.5"
        />
      </svg>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for a mushroom"
        className="flex-1 text-center text-black text-opacity-50 font-nunito text-base font-normal leading-normal outline-none placeholder:text-black placeholder:text-opacity-50"
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
      />

      {/* Filter Icon (Right) */}
      <svg
        onClick={onFilterClick} // Trigger the FilterSettings screen
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        className="w-[19.336px] h-[21.753px] flex-shrink-0 cursor-pointer"
      >
        <path
          d="M13.293 20.3967C13.3413 20.7592 13.2205 21.1458 12.9426 21.3996C12.8308 21.5116 12.698 21.6005 12.5518 21.6611C12.4057 21.7217 12.249 21.753 12.0907 21.753C11.9325 21.753 11.7758 21.7217 11.6296 21.6611C11.4834 21.6005 11.3506 21.5116 11.2388 21.3996L6.39342 16.5542C6.26171 16.4253 6.16156 16.2677 6.10077 16.0937C6.03999 15.9198 6.02022 15.7341 6.04301 15.5513V9.36458L0.255088 1.9575C0.058865 1.7056 -0.0296749 1.38627 0.00881546 1.06929C0.0473059 0.752311 0.209697 0.463452 0.460505 0.265833C0.690089 0.0966667 0.943838 0 1.20967 0H18.1263C18.3922 0 18.6459 0.0966667 18.8755 0.265833C19.1263 0.463452 19.2887 0.752311 19.3272 1.06929C19.3657 1.38627 19.2771 1.7056 19.0809 1.9575L13.293 9.36458V20.3967ZM3.67467 2.41667L8.45967 8.53083V15.2008L10.8763 17.6175V8.51875L15.6613 2.41667H3.67467Z"
          fill="#579076"
        />
      </svg>
    </div>
  );
};

export default Search;