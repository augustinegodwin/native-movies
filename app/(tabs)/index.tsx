import { SafeAreaView } from "react-native-safe-area-context";
import {
  Button,
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Fragment } from "react";
// import CartButton from "@/components/CartButton";
import { images, offers } from "@/constants";
import { globalStyles, theme } from "@/styles/theme"; // Adjust this path to your theme file
import CartButton from "@/components/cartButton";
import * as Sentry from "@sentry/react-native";
import { useAuthStore } from "@/store/auth.store";
export default function Index() {
  const { user } = useAuthStore();
  return (
    <SafeAreaView style={{ flex: 1,height:"100%", backgroundColor: theme.colors.white }}>
      <FlatList
        data={offers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;

          return (
            <View>
              <Pressable
                // Merging global offerCard style with conditional flex direction
                style={[
                  globalStyles.offerCard,
                  {
                    backgroundColor: item.color,
                    flexDirection: isEven ? "row-reverse" : "row",
                  },
                ]}
                android_ripple={{ color: "#ffffff22" }}
              >
                <View style={{ height: "100%", width: "50%" }}>
                  <Image
                    source={item.image}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="contain"
                  />
                </View>

                <View
                  style={[
                    {
                      paddingLeft: isEven ? 40 : 0,
                      paddingRight: isEven ? 0 : 40,
                      display: "flex",
                      justifyContent: "space-around",
                    },
                  ]}
                >
                  <View style={{}}>
                    <Text
                      numberOfLines={2}
                      style={[
                        globalStyles.h1Bold,
                        {
                          color: "white",
                          lineHeight: 32,
                          // Adjust this width until the second word is forced down
                          maxWidth: 150,
                          height: "auto",
                        },
                      ]}
                    >
                      {item.title}
                    </Text>
                  </View>
                  <Image
                    source={images.arrowRight}
                    style={{ width: 40, height: 40, marginTop: 10 }}
                    resizeMode="contain"
                    tintColor="#ffffff"
                  />
                </View>
              </Pressable>
            </View>
          );
        }}
        // Replaced contentContainerClassName with style
        contentContainerStyle={{ paddingBottom: 112, paddingHorizontal: 20 }}
        ListHeaderComponent={() => (
          <View style={[globalStyles.flexBetween, { marginVertical: 20 }]}>
            <View style={{ alignItems: "flex-start" }}>
              <Text
                style={[
                  globalStyles.smallBold,
                  { color: theme.colors.primary },
                ]}
              >
                DELIVER TO
              </Text>
              <TouchableOpacity
                style={[globalStyles.flexCenter, { marginTop: 2, gap: 4 }]}
              >
                <Text
                  style={[
                    globalStyles.paragraphBold,
                    { color: theme.colors.dark100 },
                  ]}
                >
                  Augustine, Croatia
                </Text>
                <Image
                  source={images.arrowDown}
                  style={{ width: 12, height: 12 }}
                  resizeMode="contain"
                  tintColor={"#F2F2F2"}
                />
              </TouchableOpacity>
            </View>

            <CartButton />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
