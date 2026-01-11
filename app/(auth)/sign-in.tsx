import { View, Text, Button, Alert } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import { theme } from "@/styles/theme";
import CustomButton from "@/components/customButton";
import CustomInput from "@/components/customInput";
import { signIn } from "@/lib/appwrite";
import * as Sentry from "@sentry/react-native";
const SignIn = () => {
  const [submitting, setisSubmitting] = useState(false);
  const [form, setform] = useState({ email: "", password: "" });
  const submit = async () => {
    const { email, password } = form;
    if (!email || !password)
      return Alert.alert(
        "Error",
        "Please enter a valid email address and password"
      );
    setisSubmitting(true);
    try {
      // call the sign in func
      await signIn({ email, password });
      router.replace("/");
    } catch (error: any) {
      Sentry.captureEvent(error);
      Alert.alert("Error", error.message);
    } finally {
      setisSubmitting(false);
    }
  };
  return (
    <View
      style={{
        gap: 20,
        backgroundColor: theme.colors.white,
        borderRadius: 20,
        padding: 20,
        marginTop: 20,
      }}
    >
      {/* <Text>Sign In</Text>
      <Button title="Sign up" onPress={() => router.push("/sign-up")} /> */}
      <CustomInput
        placeholder="Enter your email address"
        value={form.email}
        onChangeText={(text) => setform((prev) => ({ ...prev, email: text }))}
        label="Email"
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Enter your password"
        value={form.password}
        onChangeText={(text) =>
          setform((prev) => ({ ...prev, password: text }))
        }
        label="Password"
        keyboardType="email-address"
        secureTextEntry={true}
      />
      <CustomButton title="Continue" isLoading={submitting} onPress={submit} />
      <View style={{ marginTop: 24, alignItems: "center" }}>
        <Text
          style={{
            fontSize: 14,
            color: "#000",
            textAlign: "center",
            fontFamily: "Livvic-Medium",
          }}
        >
          Don't have an account?{" "}
          <Link
            href={"/sign-up"}
            onPress={() => router.push("/sign-up")}
            style={{
              textDecorationLine: "underline",
              color: theme.colors.primary,
            }}
          >
            Sign up
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default SignIn;
