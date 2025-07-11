// Code Generated by Sidekick is for learning and experimentation purposes only.
import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Quote({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Quote of the Day</Text>
      <View style={styles.card}>
        <Text style={styles.quote}>{quote}</Text>
        <Text style={styles.author}> ~ {author}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors["dark"].text,
    textAlign: "center",
  },
  card: {
    backgroundColor: Colors["dark"].cardColor,
    borderRadius: 8,
    padding: 32,
    borderColor: "#292929",
    borderWidth: 1,
    minWidth: 300,
    minHeight: 120,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  quote: {
    fontSize: 18,
    fontStyle: "italic",
    color: Colors["dark"].text,
    textAlign: "center",
    marginBottom: 12,
  },
  author: {
    fontSize: 16,
    color: Colors["dark"].text,
    textAlign: "center",
    fontWeight: "600",
    fontStyle: "normal",
    opacity: 0.7,
  },
});
