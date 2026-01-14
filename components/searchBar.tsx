import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "@/styles/theme";
import { router, useLocalSearchParams } from "expo-router";
import { images } from "@/constants";
import {useDebouncedCallback} from "use-debounce"
export default function SearchBar() {
  const params = useLocalSearchParams<{ query?: string }>();
  const [query, setQuery] = useState(params.query);
  const debouncedSearch=useDebouncedCallback(
    (text)=>router.push(`/Search?query=${text}`),
    500
  )
  const handleSearch=(text:string)=>{
    setQuery(text)
    if (!text) router.setParams({query:undefined})
    debouncedSearch(text)
  }
  const handleSubmit=()=>{
    if (query?.trim()) router.setParams({query})
  }
  return (
    <View style={[globalStyles.searchbarContainer]}>
      <TextInput
        style={[
          {
            flex: 1,
            padding: 20,
          },
          globalStyles.paragraphBold,
        ]}
        placeholder="Search for pizzas,burgers..."
        value={query}
        onChangeText={handleSearch}
        onSubmitEditing={handleSubmit}
        returnKeyType="search"
        placeholderTextColor={"#a0a0a0"}
      />
      <TouchableOpacity 
        style={{paddingRight:20}}
        onPress={()=>router.setParams({query})}
      >
        <Image
          source={images.sea}
          style={{width:24,height:24}}
          resizeMode="contain"
          tintColor={"#5D5F6D"}
        />
      </TouchableOpacity>
    </View>
  );
}
