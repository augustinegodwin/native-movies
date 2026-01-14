import { images } from "@/constants";
import { useAuthStore } from "@/store/auth.store";
import { globalStyles, theme } from "@/styles/theme";
import { TabBarIconProps } from "@/type";
import { Redirect, Slot, Tabs } from "expo-router";
import { View, Text, Image } from "react-native";
const TabBarIcon = ({ focused, icon, title }: TabBarIconProps) => {
  return (
    <View style={globalStyles.tabIcon}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 28, height: 38 }}
        tintColor={focused ? "#FE8C00" : "#5D5F6D"}
      />
      <Text
        style={[
          globalStyles.smallBold,
          focused ? { color: theme.colors.primary } : { color: "#e5e7eb " },
          // {lineHeight:1}
        ]}
      >
        {title}
      </Text>
    </View> 
  );
};
const TabLayout = () => {
  const { isAuthenticated } = useAuthStore();
  if (!isAuthenticated) return <Redirect href={"/sign-in"} />;
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          marginHorizontal:20,
          height:80,
          position:"absolute",
          bottom:40,
          backgroundColor:"white",
          shadowColor:"#1a1a1a",
          shadowOffset:{width:0,height:2},
          shadowOpacity:0.1,
          shadowRadius:4,
          elevation:5,
         
        },
        
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Home" icon={images.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Explore" icon={images.search} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Cart" icon={images.cart} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Profile" icon={images.user} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
