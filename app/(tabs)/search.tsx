import { View, Text, Button, FlatList, Platform } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import seed from "@/lib/seed";
import useAppwrite from "@/lib/useAppwrite";
import { getCategories, getMenu } from "@/lib/appwrite";
import { useLocalSearchParams } from "expo-router";
import { globalStyles, theme } from "@/styles/theme";
import CartButton from "@/components/cartButton";
import MenuCard from "@/components/menuCard";
import { MenuItem } from "@/type";
import Filter from "@/components/filter";
import SearchBar from "@/components/searchBar";

export default function Search() {
  const { category, query } = useLocalSearchParams<{
    query: string;
    category: string;
  }>();
  const { data, refetch, loading } = useAppwrite({
    fn: getMenu,
    params: {
      category,
      query,
      limit: 6,
    },
  });
  const { data: categories } = useAppwrite({ fn: getCategories });
  useEffect(() => {
    refetch({
      category,
      query,
      limit: 6,
    });
  }, [category, query]);
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors.white,
        height: "100%",
        width: "100%",
        elevation: Platform.OS === "android" ? 10 : 0,
        shadowColor: Platform.OS === "android" ? "#878787" : "",
      }}
    >
      <FlatList
        data={data}
        style={{ width: "100%" }}
        numColumns={2}
        // This gap handles the space BETWEEN columns
        columnWrapperStyle={{ gap: 20 }}
        contentContainerStyle={{
          gap: 28, // This handles the space BETWEEN rows
          paddingHorizontal: 20, // This should now show up on both sides
          paddingBottom: 128,
        }}
        renderItem={({ item, index }) => {
          // Keep your masonry-style offset logic
          const isFirstRightColumn = index % 2 === 0;

          return (
            <View
              style={{
                flex: 1, // Let FlatList calculate the width automatically
                marginTop: !isFirstRightColumn ? 40 : 0,
                maxWidth:"50%"
              }}
            >
              <MenuCard item={item as any} />
            </View>
          );
        }}
        keyExtractor={(item) => item.$id}
        ListHeaderComponent={() => (
          <View style={{ marginVertical: 20, gap: 20 }}>
            <View
              style={[
                globalStyles.flexBetween,
                { flexDirection: "row", width: "100%" },
              ]}
            >
              <View style={[globalStyles.flexStart]}>
                <Text
                  style={[
                    globalStyles.paragraphMedium,
                    { textTransform: "uppercase", color: theme.colors.primary },
                  ]}
                >
                  Search
                </Text>
                <View
                  style={[
                    globalStyles.flexStart,
                    { marginTop: 2, flexDirection: "row", rowGap: 4 },
                  ]}
                >
                  <Text style={[globalStyles.paragraphBold]}>
                    Find your favourite food
                  </Text>
                </View>
              </View>
              <CartButton />
            </View>
            <SearchBar/>
            <Filter categories={categories as any}/>
          </View>
        )}
        ListEmptyComponent={() =>
          !loading && (
            <View>
              <Text style={[globalStyles.paragraphBold,{textAlign:"center",fontSize:30}]}>No Result Found</Text>
            </View>
          )
        }
      />
    </SafeAreaView>
  );
}
