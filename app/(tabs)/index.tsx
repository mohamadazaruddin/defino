import BgContainer from "@/components/ui/BgContainer";
import Quote from "@/components/ui/Quote";
import RecentActivitySection from "@/components/ui/RecentActivitySection";
import WelcomeCard from "@/components/ui/WelcomeCard";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function HomeScreen() {
  const [data, setData] = useState<any>();
  const [quote, setQuote] = useState<any>();
  const [wordoftheDay, setWordoftheDay] = useState<any>();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    serachRandomWord();
    fetchQuote();
  }, []);

  const serachRandomWord = async () => {
    fetch("https://random-word-api.herokuapp.com/word")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        setWordoftheDay(json);
        searchMeaning(json);
      })
      .catch((err) => {
        console.log(err, "reeed");
        setError(err.message);
        setLoading(false);
      });
  };

  const fetchQuote = async () => {
    fetch(`https://api.quotable.io/quotes/random`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        console.log(json, "quote");
        setQuote(json);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "reeed");
        setError(err.message);
        setLoading(false);
      });
  };
  const searchMeaning = async (params: string) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${params}`)
      .then((response) => {
        if (!response.ok) {
          console.log(response, "es");

          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        console.log(json, "meaning");

        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "reeed");

        setError(err.message);
        setLoading(false);
      });
  };

  const getFormattedDate = () => {
    const date = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[date.getMonth()];
    const day = date.getDate();

    return `${month} ${day}`;
  };
  const recentSearches = [
    { id: "1", title: "Artificial Intelligence", date: "Mar 12, 2024" },
    { id: "2", title: "React Native Styling", date: "Mar 11, 2024" },
    { id: "3", title: "Expo vs Bare Workflow", date: "Mar 10, 2024" },
    { id: "4", title: "Glassmorphism UI", date: "Mar 9, 2024" },
    { id: "5", title: "AsyncStorage Best Practices", date: "Mar 8, 2024" },
  ];
  if (loading) return <ActivityIndicator />;
  // if (error)
  //   return (
  //     <Text style={{ color: Colors.dark.text, padding: 10, fontSize: 18 }}>
  //       Something Went Wrong...
  //     </Text>
  //   );
  return (
    // api https://random-word-api.herokuapp.com/word
    // https://api.dictionaryapi.dev/api/v2/entries/en/dumbass
    // https://api.quotable.io/quotes/random
    <BgContainer>
      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
        <WelcomeCard
          userName="Alex"
          onHistoryPress={() => router.navigate("/history")}
        />
      </View>
      {/* <WordOfTheDay
        word={wordoftheDay}
        pronunciation={
          data[0]?.meanings[0]?.partOfSpeech
            ? data[0]?.meanings[0]?.partOfSpeech
            : ""
        }
        definition={
          data[0]?.meanings[0]?.definitions[0]?.definition
            ? data[0]?.meanings[0]?.definitions[0]?.definition
            : "No Defination Found"
        }
        example={
          data[0]?.meanings[0]?.definitions[0]?.example
            ? data[0]?.meanings[0]?.definitions[0]?.example
            : "No Example Found"
        }
        date={getFormattedDate()}
      /> */}
      <RecentActivitySection
        onCardPress={(item: any) => alert(item.title)}
        recentSearches={recentSearches}
      />
      {quote[0].content && (
        <Quote
          quote={quote[0]?.content ? quote[0]?.content : ""}
          author={quote[0]?.author ? quote[0]?.author : ""}
        />
      )}
    </BgContainer>
  );
}
