import { StyleSheet, Platform } from "react-native";

export const theme = {
  colors: {
    primary: "#0066FF", // Replace with your actual primary hex
    dark100: "#1A1A1A",
    gray500: "#6B7280",
    white: "#FFFFFF",
    black: "#000000",
    lightBg: "#F9FAFB",
    danger: "#FF5A5F",
  },
};

export const globalStyles = StyleSheet.create({
  // UTILITIES
  flexCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  flexBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flexStart: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },

  // COMPONENTS
  cartBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.dark100,
    alignItems: "center",
    justifyContent: "center",
  },
  cartBadge: {
    position: "absolute",
    top: -8,
    right: -4,
    width: 20,
    height: 20,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 16,
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: 12,
    ...Platform.select({
      ios: {
        shadowColor: theme.colors.dark100,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: { elevation: 3 },
    }),
  },
  cartItemImage: {
    width: 96, // size-24
    height: 96,
    backgroundColor: theme.colors.primary + "1A", // primary/10 opacity
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  customBtn: {
    backgroundColor: theme.colors.primary,
    borderRadius: 999,
    padding: 12,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  searchbar: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: theme.colors.white,
    borderRadius: 999,
    paddingHorizontal: 20,
    height: 50,
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 10 },
      android: { elevation: 5 },
    }),
  },
  input: {
    borderRadius: 8,
    padding: 12,
    width: "100%",
    fontSize: 16,
    fontFamily: "Quicksand-SemiBold",
    color: theme.colors.dark100,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  offerCard: {
    width: "100%",
    height: 192, // h-48
    marginVertical: 12,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    alignItems: "center",

    ...Platform.select({
      ios: { shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 10 },
      android: { elevation: 6 },
    }),
  },

  // TYPOGRAPHY
  h1Bold: {
    fontSize: 30,
    fontFamily: "Quicksand-Bold",
    color: theme.colors.dark100,
  },
  h3Bold: {
    fontSize: 20,
    fontFamily: "Quicksand-Bold",
    color: theme.colors.dark100,
  },
  baseBold: {
    fontSize: 18,
    fontFamily: "Quicksand-Bold",
    color: theme.colors.dark100,
  },
  baseSemiBold: { fontSize: 18, fontFamily: "Quicksand-Bold" },
  paragraphBold: { fontSize: 16, fontFamily: "Quicksand-Bold" },
  paragraphMedium: {
    fontSize: 16,
    fontFamily: "Quicksand-Bold",
    color: theme.colors.gray500,
  },
  bodyMedium: { fontSize: 14, fontFamily: "Quicksand-Bold" },
  smallBold: { fontSize: 12, fontFamily: "Quicksand-Bold" },
});
