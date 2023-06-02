import styled from "styled-components/native";
import { GeneralTheme } from "./theme";

export const BigTitle = styled.Text<{ color?: string }>`
  font-size: 20px;
  font-family: "Poppins-Bold";
  color: ${(props) => (props.color ? props.color : GeneralTheme.colors.white)};
`;
export const SmallTitle = styled.Text``;
export const Label = styled.Text``;
export const ButtonText = styled.Text``;
export const RegularText = styled.Text``;
