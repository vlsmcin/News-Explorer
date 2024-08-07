import Card from "@/components/card"
import SearchBar from "@/components/searchBar"
import { View } from "react-native"
import { API_KEY } from "@env"
import { useState, useEffect } from "react"
import { useRoute } from "@react-navigation/native"
import { ScrollView } from "react-native"

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
    const [dataAPI,setDataAPI] = useState<APIProps[] | null>(null)
    const [search, setSearch] = useState("");

    const route = useRoute();
    const searchRoute = route.params as { query: string };

    const handleSearch = (text:string) => {
        setSearch(text)
        fetchArticles(text)
    }
    
    const fetchArticles = (query: string) => {
      const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;
      fetch(url)
          .then(response => response.json())
          .then(data => {
              setDataAPI(data.articles);
          })
    };

    useEffect(() => {
        if (searchRoute.query) {
          fetchArticles(searchRoute.query)
        }
    }, [searchRoute.query])


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
        {dataAPI && dataAPI.map((article: APIProps) => (
        <Card title={article.title}
          link={article.urlToImage}
          source={article.url}
          description={article.description}/>
        ))}
      </ScrollView>
    </View>
    )
}