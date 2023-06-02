import { DefaultTheme } from "styled-components";
interface CustomTheme extends DefaultTheme {
  colors: {
    primary: string;
    secondary: string;
    white: string;
    black: string;
    background: string;
  };
  fonts: {
    regular: string;
    bold: string;
    light: string;
    medium: string;
    semibold: string;
  };
}

const GeneralTheme: CustomTheme = {
  colors: {
    primary: "#8D4FCB",
    secondary: "#4C7DFA",
    white: "#FFFFFF",
    black: "#424242",
    background: "#F5F4FF",
  },
  fonts: {
    regular: "Poppins-Regular",
    bold: "Poppins-Bold",
    light: "Poppins-Light",
    medium: "Poppins-Medium",
    semibold: "Poppins-SemiBold",
  },
};

export { GeneralTheme };
