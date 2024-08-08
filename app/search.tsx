import Card from "@/components/card"
import SearchBar from "@/components/searchBar"
import { View, Text, ActivityIndicator } from "react-native"
import { API_KEY } from "@env"
import { useState, useEffect } from "react"
import { useRoute } from "@react-navigation/native"
import { ScrollView } from "react-native"
import { storeData, getData } from "@/constants/storage"

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

export default function Search() {
    // Hooks para realizar o get na API
    const [dataAPI,setDataAPI] = useState<APIProps[] | null>(null)
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    const route = useRoute();
    const searchRoute = route.params as { query: string } | undefined;

    const handleSearch = (text:string) => {
        setSearch(text);
        fetchArticles(text);
        updateSearchHistory(text);
    }

    // Lógica para armazenar o histórico de busca
    const updateSearchHistory = async (text: string) => {
      try {
          const history = (await getData("history")) || [];
          history.push(text);
          await storeData("history", history);
      } catch (error) {
          console.error("Erro ao atualizar o histórico:", error);
      }
  };
    
    // Get da API
    const fetchArticles = (query: string) => {
      setLoading(true);
      const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;
      fetch(url)
          .then(response => response.json())
          .then(data => {
              setDataAPI(data.articles);
          })
          .finally(() => setLoading(false));
    };

    // Caso seja via navegação
    useEffect(() => {
        if (searchRoute) {
          fetchArticles(searchRoute.query);
          updateSearchHistory(searchRoute.query);
        }
    }, [searchRoute])


    return (
    <View>
      <SearchBar onSubmit={() => console.log(1)} setSearch={handleSearch}/>
      <ScrollView
        contentContainerStyle={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: 20,
          marginTop: 150,
          alignItems: "center",
        }}
      >
        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        {!loading && dataAPI && dataAPI.map((article: APIProps,index: number) => (
        <View key={index} style={{ marginBottom: index === dataAPI.length - 1 ? 180 : 0 }}>
          <Card
              title={article.title}
              link={article.urlToImage}
              source={article.url}
              description={article.description}
          />
        </View>
        ))}
        {!loading && !dataAPI && <View><Text>Nenhum artigo encontrado</Text></View>}
      </ScrollView>
    </View>
    )
}