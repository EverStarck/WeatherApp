import React, { useState } from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  font-size: 1.2rem; //14px
  background: url("https://api.iconify.design/feather-search.svg?color=%23B7B7B7")
    no-repeat 15px center / 20px 20px;
  background-color: var(--main-bg-color);
  border: 2px solid var(--main-bg-color);
  border-radius: var(--border-radius);
  color: var(--black);
  width: 300px;
  padding: 7px 14px 7px 45px;
  transition: border 0.4s;
  &::placeholder {
    color: var(--gray-search);
  }
  &:hover,
  :focus {
    border: 2px solid var(--main-color);
  }
`;

const SearchBar = ({ searchValue, setSearchValue, searchFetchData }) => {
  const refreshInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <form onSubmit={searchFetchData}>
      <Input
        type="search"
        placeholder="Search city"
        value={searchValue}
        onChange={refreshInput}
      />
    </form>
  );
};

export default SearchBar;