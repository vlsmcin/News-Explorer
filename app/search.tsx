import Card from "@/components/card"
import SearchBar from "@/components/searchBar"
import { View } from "react-native"
import { API_KEY } from "@env"
import { useState, useEffect } from "react"
import { useRoute } from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler"

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
    const route = useRoute();
    const { search } = route.params as { search: string }
    
    useEffect(() => {
        console.warn(search)
        const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setDataAPI(data.articles)
        })
    }, [])


    return (
    <View>
      <SearchBar />
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