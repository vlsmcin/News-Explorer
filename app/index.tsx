import Card from "@/components/card";
import SearchBar from "@/components/searchBar";
import { Text, View } from "react-native";

export default function Index() {

  return (
    <View>
      <SearchBar />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: 20,
          marginTop: 150,
          alignItems: "center",
        }}
      >
        
        <Card title="The G20 is considering a global billionaire tax. Australia is missing in action"
        description="74% of Australians support a wealth tax on individuals with over $50 million.\nThe post The G20 is considering a global billionaire tax. Australia is missing in action appeared first on Crikey."
          link="https://s1.trrsf.com/update-1698692222/fe/zaz-mod-t360-icons/svg/logos/terra-16x9-borda.png"
          source="https://www.terra.com.br/noticias/brasil/politica/stf-realiza-primeira-audiencia-de-conciliacao-sobre-marco-temporal-na-segunda-feira,04c57189a3f56f1b36e0faeaa5eb0f37z58g9nk0.html"/>
      </View>
    </View>
  );
}
