import {
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import BgContainer from "@/components/ui/BgContainer";
import { Colors } from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
const exampleResults: any = [
  {
    word: "check",
    phonetic: "/t͡ʃɛk/",
    phonetics: [
      {
        text: "/t͡ʃɛk/",
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/check-us.mp3",
        sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=1224273",
        license: {
          name: "BY-SA 3.0",
          url: "https://creativecommons.org/licenses/by-sa/3.0",
        },
      },
    ],
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition:
              "A situation in which the king is directly threatened by an opposing piece.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition: "An inspection or examination.",
            synonyms: [],
            antonyms: [],
            example:
              "I don't know if she will be there, but it's worth a check.",
          },
          {
            definition: "A control; a limit or stop.",
            synonyms: [],
            antonyms: [],
            example: "The castle moat should hold the enemy in check.",
          },
          {
            definition:
              "A mark (especially a checkmark: ✓) used as an indicator.",
            synonyms: ["checkmark", "tick"],
            antonyms: [],
            example: "Place a check by the things you have done.",
          },
          {
            definition:
              "An order to a bank to pay money to a named person or entity.",
            synonyms: ["cheque"],
            antonyms: [],
            example:
              "I was not carrying cash, so I wrote a check for the amount.",
          },
          {
            definition: "A bill, particularly in a restaurant.",
            synonyms: ["bill", "cheque"],
            antonyms: [],
            example:
              "I summoned the waiter, paid the check, and hurried to leave.",
          },
          {
            definition:
              "A maneuver performed by a player to take another player out of the play.",
            synonyms: [],
            antonyms: [],
            example:
              "The hockey player gave a good hard check to obtain the puck.",
          },
          {
            definition:
              "A token used instead of cash in gaming machines, or in gambling generally.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition:
              "A lengthwise separation through the growth rings in wood.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition:
              "A mark, certificate or token by which errors may be prevented, or a thing or person may be identified.",
            synonyms: [],
            antonyms: [],
            example: "a check given for baggage",
          },
          {
            definition:
              "The forsaking by a hawk of its proper game to follow other birds.",
            synonyms: [],
            antonyms: [],
          },
          { definition: "A small chink or crack.", synonyms: [], antonyms: [] },
        ],
        synonyms: ["bill", "cheque", "checkmark", "tick", "cheque"],
        antonyms: [],
      },
    ],
    license: {
      name: "CC BY-SA 3.0",
      url: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    sourceUrls: ["https://en.wiktionary.org/wiki/check"],
  },
  {
    word: "check",
    phonetic: "/t͡ʃɛk/",
    phonetics: [
      {
        text: "/t͡ʃɛk/",
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/check-us.mp3",
        sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=1224273",
        license: {
          name: "BY-SA 3.0",
          url: "https://creativecommons.org/licenses/by-sa/3.0",
        },
      },
    ],
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          {
            definition: "To inspect; to examine.",
            synonyms: [],
            antonyms: [],
            example: "Check the oil in your car once a month.",
          },
          {
            definition:
              "To verify the accuracy of a text or translation, usually making some corrections (proofread) or many (copyedit).",
            synonyms: [],
            antonyms: [],
          },
          {
            definition:
              '(often used with "off") To mark items on a list (with a checkmark or by crossing them out) that have been chosen for keeping or removal or that have been dealt with (for example, completed or verified as correct or satisfactory).',
            synonyms: [
              "check off",
              "cross off",
              "strike off",
              "tick",
              "tick off",
            ],
            antonyms: ["uncheck"],
            example: "Check off the items that you've checked (inspected).",
          },
          {
            definition: "To control, limit, or halt.",
            synonyms: ["curtail", "restrain"],
            antonyms: [],
            example: "Check your enthusiasm during a negotiation.",
          },
          {
            definition: "To verify or compare with a source of information.",
            synonyms: [],
            antonyms: [],
            example: "Check your data against known values.",
          },
          {
            definition: "To leave in safekeeping.",
            synonyms: [],
            antonyms: [],
            example: "Check your hat and coat at the door.",
          },
          {
            definition: "To leave with a shipping agent for shipping.",
            synonyms: [],
            antonyms: [],
            example: "Check your bags at the ticket counter before the flight.",
          },
          {
            definition:
              "To pass or bounce the ball to an opponent from behind the three-point line and have the opponent pass or bounce it back to start play.",
            synonyms: [],
            antonyms: [],
            example:
              "He checked the ball and then proceeded to perform a perfect layup.",
          },
          {
            definition:
              "To disrupt another player with the stick or body to obtain possession of the ball or puck.",
            synonyms: ["attack", "tackle", "trap"],
            antonyms: [],
            example:
              "The hockey player checked the defenceman to obtain the puck.",
          },
          {
            definition:
              "To remain in a hand without betting. Only legal if no one has yet bet.",
            synonyms: [],
            antonyms: [],
            example: "Tom didn't think he could win, so he checked.",
          },
          {
            definition:
              "To make a move which puts an adversary's king in check; to put in check.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition: "To chide, rebuke, or reprove.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition:
              "To slack or ease off, as a brace which is too stiffly extended.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition:
              "To crack or gape open, as wood in drying; or to crack in small checks, as varnish, paint, etc.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition: "To make checks or chinks in; to cause to crack.",
            synonyms: [],
            antonyms: [],
            example: "The sun checks timber.",
          },
          {
            definition: "To make a stop; to pause; with at.",
            synonyms: [],
            antonyms: [],
          },
          { definition: "To clash or interfere.", synonyms: [], antonyms: [] },
          {
            definition: "To act as a curb or restraint.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition:
              "To turn, when in pursuit of proper game, and fly after other birds.",
            synonyms: [],
            antonyms: [],
          },
        ],
        synonyms: [
          "attack",
          "tackle",
          "trap",
          "check off",
          "cross off",
          "strike off",
          "tick",
          "tick off",
          "curtail",
          "restrain",
        ],
        antonyms: ["uncheck"],
      },
    ],
    license: {
      name: "CC BY-SA 3.0",
      url: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    sourceUrls: ["https://en.wiktionary.org/wiki/check"],
  },
  {
    word: "check",
    phonetic: "/t͡ʃɛk/",
    phonetics: [
      {
        text: "/t͡ʃɛk/",
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/check-us.mp3",
        sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=1224273",
        license: {
          name: "BY-SA 3.0",
          url: "https://creativecommons.org/licenses/by-sa/3.0",
        },
      },
    ],
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition:
              "(usually pluralized) A pattern made up of a grid of squares of alternating colors; a checkered pattern.",
            synonyms: [],
            antonyms: [],
            example: "The tablecloth had red and white checks.",
          },
          {
            definition: "Any fabric woven with such a pattern.",
            synonyms: [],
            antonyms: [],
          },
        ],
        synonyms: [],
        antonyms: [],
      },
      {
        partOfSpeech: "verb",
        definitions: [
          {
            definition: "To mark with a check pattern.",
            synonyms: [],
            antonyms: [],
          },
        ],
        synonyms: [],
        antonyms: [],
      },
      {
        partOfSpeech: "adjective",
        definitions: [
          {
            definition:
              "Divided into small squares by transverse, perpendicular, and horizontal lines.",
            synonyms: [],
            antonyms: [],
          },
        ],
        synonyms: [],
        antonyms: [],
      },
    ],
    license: {
      name: "CC BY-SA 3.0",
      url: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    sourceUrls: ["https://en.wiktionary.org/wiki/check"],
  },
];
export default function TabTwoScreen() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(exampleResults);
  const handleSearch = () => {
    // Fetch and set results here
    // setResults(fetchedResults)
  };

  const renderPhonetics = (phonetics: any) => (
    <View style={styles.phoneticsContainer}>
      {phonetics.map(({ p, idx }: any) => (
        <View key={idx} style={styles.phoneticItem}>
          <Text style={styles.phoneticText}>{p.text}</Text>
          {p.audio ? (
            <TouchableOpacity onPress={() => Linking.openURL(p.audio)}>
              <Text style={styles.audioLink}>🔊 Listen</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      ))}
    </View>
  );

  const renderMeanings = (meanings: any) => (
    <View>
      {meanings.map(({ meaning, idx }: any) => (
        <View key={idx} style={styles.meaningSection}>
          <Text style={styles.partOfSpeech}>{meaning.partOfSpeech}</Text>
          {meaning.definitions.map(({ def, dIdx }: any) => (
            <View key={dIdx} style={styles.definitionBlock}>
              <Text style={styles.definitionText}>• {def.definition}</Text>
              {def.example ? (
                <Text style={styles.exampleText}>Example: {def.example}</Text>
              ) : null}
              {def.synonyms && def.synonyms.length > 0 && (
                <Text style={styles.synAntText}>
                  Synonyms: {def.synonyms.join(", ")}
                </Text>
              )}
              {def.antonyms && def.antonyms.length > 0 && (
                <Text style={styles.synAntText}>
                  Antonyms: {def.antonyms.join(", ")}
                </Text>
              )}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
  const renderWordCard = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.word}>{item.word}</Text>
      {item.phonetic && (
        <Text style={styles.phoneticMain}>{item.phonetic}</Text>
      )}
      {item.phonetics && renderPhonetics(item.phonetics)}
      {item.meanings && renderMeanings(item.meanings)}
      {item.sourceUrls && item.sourceUrls.length > 0 && (
        <TouchableOpacity
          onPress={() => Linking.openURL(item.sourceUrls[0])}
          style={styles.sourceLink}
        >
          <Text style={styles.sourceLinkText}>Source</Text>
        </TouchableOpacity>
      )}
    </View>
  );
  return (
    <BgContainer>
      {" "}
      <View style={styles.container}>
        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for a word..."
            value={query}
            onChangeText={setQuery}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Feather name="search" size={20} color={Colors["dark"].text} />
          </TouchableOpacity>
        </View>

        {/* Results */}
        {/* <ScrollView contentContainerStyle={styles.resultsContainer}>
          {results.length === 0 ? (
            <Text style={styles.noResultsText}>No results found.</Text>
          ) : (
            results.map(({ item, idx }: any) => (
              <View key={idx} style={styles.cardWrapper}>
                {renderWordCard({ item })}
              </View>
            ))
          )}
        </ScrollView> */}
      </View>
    </BgContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 10,
    paddingHorizontal: 20,
  },
  searchBarContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.50)",
    color: "#fff",
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 44,
    marginRight: 8,
  },
  searchButton: {
    backgroundColor: Colors["dark"].foreground,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 44,
  },
  searchButtonText: {
    color: Colors["dark"].text,
    fontWeight: "bold",
    fontSize: 16,
  },
  resultsContainer: {
    paddingBottom: 32,
  },
  cardWrapper: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#23252C",
    borderRadius: 12,
    padding: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  word: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
  },
  phoneticMain: {
    fontSize: 16,
    color: "#A0A0A0",
    marginBottom: 8,
  },
  phoneticsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 8,
    gap: 12,
  },
  phoneticItem: {
    marginRight: 12,
    marginBottom: 4,
  },
  phoneticText: {
    color: "#A0A0A0",
    fontSize: 14,
  },
  audioLink: {
    color: "#4F8EF7",
    fontSize: 14,
    marginTop: 2,
  },
  meaningSection: {
    marginBottom: 12,
  },
  partOfSpeech: {
    color: "#FFD700",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    marginTop: 8,
  },
  definitionBlock: {
    marginBottom: 8,
  },
  definitionText: {
    color: "#fff",
    fontSize: 15,
  },
  exampleText: {
    color: "#A0A0A0",
    fontStyle: "italic",
    fontSize: 14,
    marginTop: 2,
  },
  synAntText: {
    color: "#4F8EF7",
    fontSize: 13,
    marginTop: 2,
  },
  sourceLink: {
    marginTop: 10,
    alignSelf: "flex-start",
  },
  sourceLinkText: {
    color: "#4F8EF7",
    textDecorationLine: "underline",
    fontSize: 14,
  },
  noResultsText: {
    color: "#A0A0A0",
    textAlign: "center",
    marginTop: 40,
    fontSize: 18,
  },
});
