import CustomButton from "@/components/customButton";
import CustomInput from "@/components/customInput";
import { images } from "@/constants";
import { useAuthStore } from "@/store/auth.store";
import { globalStyles, theme } from "@/styles/theme";
import { Redirect, Slot } from "expo-router";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

KeyboardAvoidingView;
export default function _Layout() {
  const {isAuthenticated} =useAuthStore()
  if (isAuthenticated) return <Redirect href={"/"}/>
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
    >
      <ScrollView
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: theme.colors.white,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={{
            width: "100%",
            position: "relative",
            height: Dimensions.get("screen").height / 2.25,
          }}
        >
          <ImageBackground
            source={images.loginGraphic}
            resizeMode="stretch"
            style={{
              width: "100%",
              height: "100%",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}
          />
          <Image source={images.logo} style={globalStyles.authLogo} />
        </View>
        <Slot />
      </ScrollView>
      
    </KeyboardAvoidingView>
  );
}
