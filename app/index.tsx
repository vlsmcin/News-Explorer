import SearchBar from "@/components/searchBar";
import { FlatList, ScrollView, Text, View } from "react-native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { API_KEY } from "@env";

interface APIProps {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface Source {
  id: string;
  name: string;
}

type RootTabParamList = {
  index: undefined;
  search: { query: string };
};

type NavigationProp = BottomTabNavigationProp<RootTabParamList, 'search'>;

export default function Index() {
  const navigation = useNavigation<NavigationProp>();
  const [search, setSearch] = useState("");
  const [dataAPI, setdataAPI] = useState<null | APIProps[]>(null);

  const handleSearch = () => {
      navigation.navigate('search', { query: search });
  };

  useEffect(() => {
      const url = `https://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`;
      fetch(url)
      .then(response => response.json())
      .then(data => {
        if(data.status === "ok"){
          setdataAPI(data.articles)
        }  
      })
  },[]);

  return (
    <View>
      <SearchBar onSubmit={handleSearch} setSearch={setSearch}/>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: 20,
          marginTop: 150,
          alignItems: "center",
          marginBottom: 150,
        }}
      >
        <Text style={{fontSize:36}}> Top Headlines: </Text>
        {dataAPI && (
        <FlatList
          data={dataAPI}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ borderWidth: 1, padding: 10, width: 300 }}>
              <Text>{item.title}</Text>
            </View>
          )}
        />
        )}
      </View>
    </View>
  );
}
