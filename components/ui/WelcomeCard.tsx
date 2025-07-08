import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function WelcomeCard({
  userName = "User",
  onHistoryPress,
}: any) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.greeting}>Welcome back </Text>
        <Text style={styles.subtitle}>Begin from where you left off.</Text>
        <TouchableOpacity style={styles.button} onPress={onHistoryPress}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
      </View>
      <View>
        {/* <Image
          source={require("@/assets/images/welcomeimg.png")}
          style={styles.image}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors["dark"].cardColor,
    backdropFilter: "blur(16px)",
    borderRadius: 10,
    padding: 16,
    alignItems: "center",
    borderColor: "#292929",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 16,
    justifyContent: "space-between",
    elevation: 5,
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
    borderRadius: 40,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 6,
    color: Colors["dark"].text,
  },
  subtitle: {
    fontSize: 18,
    color: Colors["dark"].secondaryText,
    marginBottom: 18,
    wordWrap: "normal",
  },
  button: {
    backgroundColor: "#1db954",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 30,
    marginTop: 16,
    width: 100,
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
