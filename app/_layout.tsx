import { Stack } from "expo-router";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Quicksand-Bold": require("../assets/fonts/AllTheWayToTheSun-o2O0.ttf"),
  });
  useEffect(() => {
    if (error) throw error;
    if (loaded) SplashScreen.hideAsync();
  }, [loaded, error]);

  return <Stack screenOptions={{ headerShown: false }} />;
}
