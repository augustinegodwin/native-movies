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
  authLogo: {
    alignSelf: "center", // self-center
    width: 192, // size-48 (48 * 4 = 192px)
    height: 192, // size-48
    position: "absolute", // absolute
    bottom: -64, // -bottom-16 (16 * 4 = 64px, negative)
    zIndex: 20, // z-10
  },

  authInputContainer: {
    // rounded-xl
    borderRadius: 12,
    // bg-black/5 (using RGBA for opacity)
    backgroundColor: "rgba(0, 0, 0, 0.075)",
    // border-2 border-transparent
    borderWidth: 2,
    borderColor: "transparent",
    // px-[20px] py-[10px]
    paddingHorizontal: 16,
    paddingVertical: 10,
    // flex flex-col gap-1
    flexDirection: "column",
    height: "auto",
    gap: 4,
  },
  authLabel: {
    // text-[12px]
    fontSize: 12,
    // text-[#727272]
    color: "#727272",
    fontFamily: "Livvic-SemiBold",
  },
  authInput: {
    // w-full h-6
    width: "100%",
    height: 40,
    // bg-transparent border-none outline-none
    backgroundColor: "transparent",
    fontFamily: "Livvic-Medium",
    // backgroundColor:theme.colors.primary,
    // text-sm
    fontSize: 14,
    color: theme.colors.black,
  },
  authButton: {
    // w-full
    width: "100%",
    // px-6
    paddingHorizontal: 28,
    // mt-3
    marginTop: 12,
    // py-2
    paddingVertical: 12,
    // flex justify-center
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Centers text horizontally in RN flexbox
    // bg-black
    backgroundColor: "#000000",
    // rounded-lg
    borderRadius: 8,

    // outline-none (not needed in RN, but we use feedback components)
  },
  authButtonText: {
    // text-white
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Livvic-Bold",
  },
  tabIcon: {
    display: "flex", // Default in RN, but explicit here
    flexDirection: "column", // Needed to make 'gap' work horizontally
    minWidth: 80, // 20 * 4 = 80px (Tailwind scale)
    alignItems: "center",
    justifyContent: "center",
    height: "100%", // min-h-full
   // gap-1 (1 * 4 = 4px)
    marginTop: 28, // mt-12 (12 * 4 = 48px),
    width:"100%",
    gap:4
  },
  // TYPOGRAPHY
  h1Bold: {
    fontSize: 33,
    fontFamily: "Livvic-Black",
    letterSpacing: 1.5,
    color: theme.colors.dark100,
  },
  h3Bold: {
    fontSize: 20,
    fontFamily: "Livvic-Bold",
    color: theme.colors.dark100,
  },
  baseBold: {
    fontSize: 18,
    fontFamily: "Livvic-SemiBold",
    color: theme.colors.dark100,
  },
  baseSemiBold: { fontSize: 18, fontFamily: "Livvic-SemiBold" },
  paragraphBold: { fontSize: 16, fontFamily: "Livvic-Medium" },
  paragraphMedium: {
    fontSize: 16,
    fontFamily: "Livvic-Regular",
    color: theme.colors.gray500,
  },
  bodyMedium: { fontSize: 14, fontFamily: "Livvic-Bold" },
  smallBold: { fontSize: 12, fontFamily: "Livvic-Bold" },
});
