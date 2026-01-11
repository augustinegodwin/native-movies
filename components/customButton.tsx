import { globalStyles } from "@/styles/theme";
import { CustomButtonProps } from "@/type";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

export default function CustomButton({
  onPress,
  title = "Click Me",
  style,
  textStyle,
  leftIcon,
  isLoading = false,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={globalStyles.authButton}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator size={"small"} color={"white"} />
      ) : (
        <Text style={globalStyles.authButtonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
