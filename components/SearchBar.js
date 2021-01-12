import React, { useState } from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  font-size: 1.4rem; //14px
  background: url("https://api.iconify.design/feather-search.svg?color=%23B7B7B7")
    no-repeat 15px center / 25px 25px;
  background-color: var(--main-bg-color);
  border: 2px solid var(--main-bg-color);
  border-radius: var(--border-radius);
  color: var(--black);
  width: 300px;
  padding: 13px 13px 13px 60px;
  transition: border 0.4s;
  &::placeholder {
    color: var(--gray-search);
  }
  &:hover {
    border: 2px solid var(--main-color);
  }
`;

const SearchBar = ({searchValue, setSearchValue}) => {
  const refreshInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <Input
        type="search"
        placeholder="Search city"
        value={searchValue}
        onChange={refreshInput}
      />
    </div>
  );
};

export default SearchBar;
