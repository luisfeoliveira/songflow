import React from "react";
import { TextInput, View } from "react-native";
import { SearchInputWrapper } from "./styles";
import Search from "../../../assets/icons/Search";
// import Search from "../../../assets/icons/Search";

const SearchInput: React.FC = () => {
  return (
    <SearchInputWrapper>
      <Search />
      <TextInput style={{ flex: 1, marginHorizontal: 5 }} />
    </SearchInputWrapper>
  );
};

export default SearchInput;
