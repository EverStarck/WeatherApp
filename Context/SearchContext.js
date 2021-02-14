import React, { useState } from "react";

export const SearchContext = React.useContext();

const SearchProvider = ({ children }) => {
  //Value of the input search
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
