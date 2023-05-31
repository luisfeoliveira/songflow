import React from "react";
import { Image, View, Text, ImageSourcePropType } from "react-native";
import LogoImage from "../../images/logo.png";
import { SafeAreaView } from "react-native-safe-area-context";

const Home: React.FC = () => {
  const imageSource: ImageSourcePropType = LogoImage;

  return (
    <SafeAreaView>
      <Image
        source={imageSource}
        style={{ width: "40%" }}
        resizeMode="contain"
      />
      <Text>Home page</Text>
    </SafeAreaView>
  );
};

export default Home;
