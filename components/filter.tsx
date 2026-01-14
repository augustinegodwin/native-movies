import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Category } from "@/type";
import { router, useLocalSearchParams } from "expo-router";
import { globalStyles, theme } from "@/styles/theme";

export default function Filter({ categories }: { categories: Category[] }) {
  const searchParams = useLocalSearchParams();
  const [active, setActive] = useState(searchParams.category || "");
  const handlePress = (id: string) => {
    setActive(id);
    if (id === "all") router.setParams({ category: undefined });
    else router.setParams({ category: id });
  };
  const filterData: (Category | { $id: string; name: string })[] = categories
    ? [{ $id: "all", name: "All" }, ...categories]
    : [{ $id: "all", name: "All" }];
  return (
    <FlatList
      data={filterData}
      keyExtractor={(item) => item.$id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 8, paddingBottom: 12 }}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            key={item.$id}
            onPress={() => handlePress(item.$id)}
            style={[
              globalStyles.filterButton,
              {
                backgroundColor:
                  active === item.$id
                    ? theme.colors.primary
                    : "rgba(0,0,0,.075)",
              },
            ]}
          >
            <Text
              style={[
                globalStyles.paragraphMedium,
                {
                  backgroundColor: "transparent",
                  color: active === item.$id ? "#ffffff" : theme.colors.gray500,
                },
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}
