import { TextInput, Button, SafeAreaView } from "react-native";
import { useState } from "react";
import { useNavigation } from "expo-router";
import { StackNavigationProp } from "@react-navigation/stack";


type RootStackParamList = {
    index: undefined;
    search: { query: string };
  };
  
type SearchBarNavigationProp = StackNavigationProp<RootStackParamList, 'search'>;

export default function SearchBar() {
    const [search, setSearch] = useState("");
    const navigation = useNavigation<SearchBarNavigationProp>();

    const handleSearch = () => {
        navigation.navigate('search', { query: search });
    };

    return (
        <SafeAreaView
        style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 20,
            position: "absolute",
            top: 60,
        }}
        >
            <TextInput
                placeholder="Search for news"
                style={{
                flex: 1,
                height: 40,
                borderWidth: 1,
                borderRadius: 10,
                paddingHorizontal: 10,
                marginRight: 10,
                }}
                value={search}
                onChangeText={setSearch}
                onSubmitEditing={handleSearch}
            />
            <Button title="Search" onPress={handleSearch}/>
        </SafeAreaView>
    );
    }