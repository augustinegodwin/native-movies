import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { CustomInputProps } from "@/type";
import { globalStyles } from "@/styles/theme";

export default function CustomInput({
  placeholder,
  value,
  onChangeText,
  label,
  secureTextEntry,
  keyboardType = "default",
}: CustomInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={globalStyles.authInputContainer}>
      <Text style={globalStyles.authLabel}>{label}</Text>
      <TextInput
        style={globalStyles.authInput}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor="#727272"
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
        autoCorrect={false}
        autoCapitalize="none"
        multiline={false}
        secureTextEntry={secureTextEntry ? secureTextEntry : false}
      />
    </View>
  );
}
