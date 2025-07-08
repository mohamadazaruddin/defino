import BgContainer from "@/components/ui/BgContainer";
import { Colors } from "@/constants/Colors";
import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
const CARD_MARGIN = 8;
const CARD_WIDTH = Dimensions.get("window").width / 2 - CARD_MARGIN * 3;
export default function favorites() {
  const favoriteDefinitions = [
    {
      id: "1",
      term: "Ecosystem",
      definition:
        "A biological community of interacting organisms and their environment.",
    },
    {
      id: "2",
      term: "Photosynthesis",
      definition:
        "Process by which green plants use sunlight to synthesize foods.",
    },
    {
      id: "3",
      term: "Gravity",
      definition:
        "A force that attracts a body toward the center of the earth.",
    },
    {
      id: "4",
      term: "Atom",
      definition: "The basic unit of a chemical element.",
    },
    {
      id: "5",
      term: "Molecule",
      definition: "A group of atoms bonded together.",
    },
    {
      id: "6",
      term: "Evolution",
      definition:
        "The process by which different kinds of living organisms develop.",
    },
    {
      id: "1",
      term: "Ecosystem",
      definition:
        "A biological community of interacting organisms and their environment.",
    },
    {
      id: "2",
      term: "Photosynthesis",
      definition:
        "Process by which green plants use sunlight to synthesize foods.",
    },
    {
      id: "3",
      term: "Gravity",
      definition:
        "A force that attracts a body toward the center of the earth.",
    },
    {
      id: "4",
      term: "Atom",
      definition: "The basic unit of a chemical element.",
    },
    {
      id: "5",
      term: "Molecule",
      definition: "A group of atoms bonded together.",
    },
    {
      id: "6",
      term: "Evolution",
      definition:
        "The process by which different kinds of living organisms develop.",
    },
  ];

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.term}>{item.term}</Text>
      <Text style={styles.definition}>{item.definition}</Text>
    </View>
  );
  return (
    <BgContainer>
      <View style={styles.container}>
        <Text style={styles.heading}>Favorites</Text>
        <FlatList
          data={favoriteDefinitions}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={styles.list}
          columnWrapperStyle={styles.row}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>No favorites yet.</Text>
            </View>
          }
        />
      </View>
    </BgContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  list: {
    paddingBottom: 20,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: CARD_MARGIN * 2,
    width: "100%",
  },
  card: {
    backgroundColor: Colors["dark"].cardColor,
    borderRadius: 10,
    padding: 16,
    width: "48%", // Each card takes 48% of the row width
    minHeight: 110,
    marginBottom: CARD_MARGIN * 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  term: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: Colors["dark"].text,
  },
  definition: {
    fontSize: 14,
    color: Colors["dark"].text,
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
  },
  emptyText: {
    fontSize: 18,
    color: Colors["dark"].text,
  },
});
