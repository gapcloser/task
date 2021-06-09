import React, { useContext } from "react";

//icons
import { GrSearch } from "react-icons/gr";

//context
import { DataContext } from "../Context/DataProvider";

const Search = () => {
  const { search, setSearch } = useContext(DataContext);
  return (
    <form
      onSubmit={(e) => e.preventDefault(e)}
      className="flex items-center justify-center relative w-full md:w-max shadow-lg rounded-lg"
    >
      <span className="absolute left-0 rounded-l flex items-center justify-center top-0 text-2xl w-16 h-full border-r">
        <GrSearch />
      </span>
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="p-3 sm:p-5 focus:outline-none rounded-lg w-full pl-20 sm:pl-20 md:w-96"
        type="text"
        value={search}
        placeholder="Search Author"
      />
    </form>
  );
};

export default Search;
