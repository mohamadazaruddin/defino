import { Tabs } from "expo-router";
import React from "react";

import TabBarBg from "@/components/TabBarBg";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Feather } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1db954",
        tabBarInactiveTintColor: "#fff",
        headerShown: false,
        // tabBarButton: Tabs,
        tabBarBackground: TabBarBg,
        tabBarStyle: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          padding: 5,
          borderColor: "none",
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          backgroundColor: "rgba(0,0,0,0.50)",
          borderWidth: 0,
          elevation: 0,
          shadowColor: "#000",
          shadowOpacity: 0.15,
          shadowOffset: { width: 0, height: 8 },
          shadowRadius: 16,
          height: "auto",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Feather name="home" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <Feather name="search" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          title: "Favourite",
          tabBarIcon: ({ color, focused }) => (
            <Feather
              name="heart"
              // name={focused ? "heart" : "heart-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color, focused }) => (
            <Feather name="clock" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
