import { useContext } from "react";
import styled from "@emotion/styled";

// Context
import { SearchContext } from "../../../Context/SearchContext";

const Input = styled.input`
  font-size: clamp(1rem, 10vw, 1.4rem);
  background: url("./assets/searchIcon.svg") no-repeat 15px center / 20px 20px;
  background-color: var(--main-bg-color);
  border: 2px solid var(--main-bg-color);
  border-radius: var(--border-radius);
  color: var(--black);
  width: 300px;
  padding: 7px 14px 7px 45px;
  transition: border 0.4s;
  z-index: 2;
  position: relative;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  &::placeholder {
    color: var(--gray-search);
  }
  &:hover,
  :focus {
    border: 2px solid var(--main-color);
  }

  /* MOBILE 375 */
  @media only screen and (max-width: 767px) {
    min-width: 90vw;
    max-width: 90vw;
    margin-top: 20px;
    /* background-color: red; */
  }
`;

const SearchBar = () => {
  // Context Data
  const { searchValue, setSearchValue, searchFetchData } = useContext(
    SearchContext
  );
  const refreshInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <form onSubmit={searchFetchData} aria-labelledby="searchBar">
      <label htmlFor="searchBar" style={{ display: "none" }}>
        Search City
      </label>
      <Input
        type="search"
        placeholder="Search city"
        value={searchValue}
        onChange={refreshInput}
        id="searchBar"
        name="Search City Bar"
      />
    </form>
  );
};

export default SearchBar;
