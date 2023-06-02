import styled from "styled-components/native";
import { GeneralTheme } from "../../styles/theme";

export const SearchInputWrapper = styled.View`
  background-color: ${(props) => GeneralTheme.colors.white};
  max-width: 350px;
  height: 40px;
  border-radius: 8px;
  padding: 5px 13px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
`;
