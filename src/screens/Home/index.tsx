import React from "react";
import { Image, View, Text, ImageSourcePropType } from "react-native";
import { logo } from "../../images/logo.png";

const Home: React.FC = () => {
  const imageSource: ImageSourcePropType = logo;
  return (
    <View>
      <Image source={imageSource} />
      <Text>dadas</Text>
    </View>
  );
};

export default Home;
