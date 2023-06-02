import React from "react";
import { AvatarWrapper } from "./styles";
import { BigTitle } from "../../styles/typography";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "styled-components";
import { GeneralTheme } from "../../styles/theme";

const Avatar: React.FC = () => {
  const { colors } = GeneralTheme;
  return (
    <AvatarWrapper>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        locations={[0.33, 0.7396]}
        start={[0.5, 0]}
        end={[0.5, 1]}
        style={{
          flex: 1,
          borderRadius: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BigTitle>L</BigTitle>
      </LinearGradient>
    </AvatarWrapper>
  );
};

export default Avatar;
