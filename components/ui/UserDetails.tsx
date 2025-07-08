import { Colors } from "@/constants/Colors";
import React from "react";
import { Text, View } from "react-native";
import ProfileIcon from "../ProfileIcon";

export default function UserDetails({ userName }: any) {
  return (
    <View
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center",
        paddingVertical: 20,
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text
          style={{
            color: Colors["dark"].text,
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Hello, {userName}
        </Text>
        <Text style={{ color: Colors["dark"].secondaryText, fontSize: 16 }}>
          Words at your fingertip
        </Text>
      </View>
      <View>
        <ProfileIcon initials={userName.slice(0, 2).toUpperCase()} />
      </View>
    </View>
  );
}
