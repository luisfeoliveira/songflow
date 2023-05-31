import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Animated, StyleSheet, Text, View, useColorScheme } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import Home from "./src/screens/Home";
import { useCallback, useEffect, useMemo, useState } from "react";
import logoImage from "./src/images/splash_logo.png";
import Constants from "expo-constants";
import * as Font from "expo-font";
import { ThemeProvider } from "styled-components";
import { GeneralTheme } from "./src/styles/theme";

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function App() {
  return (
    <AnimatedAppLoader image={{ uri: Constants.manifest?.splash?.image }}>
      <MainScreen />
    </AnimatedAppLoader>
  );
}

const Stack = createNativeStackNavigator();

const AnimatedAppLoader = ({ children }: any) => {
  return <AnimatedSplashScreen>{children}</AnimatedSplashScreen>;
};

const AnimatedSplashScreen = ({ children }: any) => {
  const animation = useMemo(() => new Animated.Value(1), []);

  const [isAppReady, setAppReady] = useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
      "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
      "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
      "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
      "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    });
  };

  useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true));
    }
  }, [isAppReady]);

  const onImageLoaded = useCallback(async () => {
    try {
      await SplashScreen.hideAsync();
      // Load stuff
      await Promise.all([loadFonts()]);
    } catch (e) {
      // handle errors
    } finally {
      setAppReady(true);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}

      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: Constants.manifest?.splash?.backgroundColor,
              opacity: animation,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <Animated.Image
            style={{
              width: "50%",
              resizeMode: Constants.manifest?.splash?.resizeMode || "contain",
              transform: [
                {
                  scale: animation,
                },
              ],
            }}
            source={logoImage}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  );
};

const MainScreen = () => {
  const scheme = useColorScheme();

  return (
    <ThemeProvider theme={GeneralTheme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};
