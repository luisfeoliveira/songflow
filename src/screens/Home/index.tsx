import React from "react";
import { Image, View, Text, ImageSourcePropType } from "react-native";
import LogoImage from "../../images/logo.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Avatar from "../../components/Avatar";
import { Header } from "./styles";

const Home: React.FC = () => {
  const imageSource: ImageSourcePropType = LogoImage;

  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <Header>
        <Avatar />
        <Image
          source={imageSource}
          style={{ width: "40%" }}
          resizeMode="contain"
        />
        <View style={{ width: 45 }}></View>
      </Header>
    </SafeAreaView>
  );
};

export default Home;
