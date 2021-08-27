const SearchBox = () => {
  return (
    <div className="flex items-center justify-center bg-[#323232] py-2 px-4 rounded">
      <button className="">
        <label htmlFor="search-box" className="cursor-pointer">
          <svg width="21" height="21" viewBox="0 0 21 21">
            <path
              id="icon-search"
              d="M13.9 4.142A6.9 6.9 0 114.142 13.9 6.9 6.9 0 0113.9 4.142zm1.67 10.298a8.501 8.501 0 10-1.13 1.13c.008.01.017.018.026.027l4.242 4.243a.8.8 0 001.132-1.132l-4.243-4.242a.923.923 0 00-.027-.026z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </label>
      </button>
      <input
        type="text"
        className="bg-[#323232] w-full py-2 px-4 outline-none placeholder-gray-200"
        id="search-box"
        placeholder="Search Item"
      />
    </div>
  );
};

export default SearchBox;
