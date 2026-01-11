import { Stack } from "expo-router";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as Sentry from "@sentry/react-native";
import { useAuthStore } from "@/store/auth.store";

Sentry.init({
  dsn: "https://a382cadbcec8265a63a91c89b7cd31da@o4510686271307776.ingest.us.sentry.io/4510686277992448",

  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,

  // Enable Logs
  enableLogs: true,

  // Configure Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [
    Sentry.mobileReplayIntegration(),
    Sentry.feedbackIntegration(),
  ],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});
export default Sentry.wrap(function RootLayout() {
  const { isLoading, fetchAuthenticatedUser } = useAuthStore();
  const [loaded, error] = useFonts({
    "Livvic-Bold": require("../assets/fonts/Livvic-Bold.ttf"),
    "Livvic-Medium": require("../assets/fonts/Curse_Casual.ttf"),
    "Livvic-Black": require("../assets/fonts/atwtts.ttf"),
    "Livvic-Regular": require("../assets/fonts/Curse_Casual.ttf"),
    "Livvic-SemiBold": require("../assets/fonts/Curse_Casual.ttf"),
  });
  useEffect(() => {
    if (error) throw error;
    if (loaded) SplashScreen.hideAsync();
  }, [loaded, error]);
  useEffect(() => {
    fetchAuthenticatedUser();
  }, []);
  if (!loaded || isLoading) return null;
  return <Stack screenOptions={{ headerShown: false }} />;
});
