import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View, useColorScheme } from "react-native";
import { useAssets } from "expo-asset";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Root from "./navigation/Root";
import { ThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from "./theme";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const isDarkMode = useColorScheme() === "dark";
  const [assets, error] = useAssets([require("./aws_logo.png")]);
  const [fontsLoaded] = useFonts(Ionicons.font);
  console.log(isDarkMode);
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && assets) await SplashScreen.hideAsync();
  }, [fontsLoaded, assets]);

  if (!fontsLoaded || !assets) {
    return null;
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <NavigationContainer>
        <View onLayout={onLayoutRootView}></View>
        <StatusBar style="auto" />
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
}
