import { TextInput, Button, SafeAreaView, View } from "react-native";
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
            width: "100%",
            justifyContent: "space-between",
            position: "absolute",
            top: 0,
            zIndex: 10,
            backgroundColor: "white",
        }}
        >
            <TextInput
                placeholder="Search for news"
                style={{
                flex: 1,
                height: 40,
                borderWidth: 1,
                borderRadius: 10,
                paddingHorizontal: 100,
                marginRight: 20,
                marginLeft: 20,
                marginBottom: 15,
                }}
                value={search}
                onChangeText={setSearch}
                onSubmitEditing={handleSearch}
            />
            <View style={{marginBottom: 15, marginRight: 10}}>
                <Button title="Search" onPress={handleSearch}/>
            </View>
        </SafeAreaView>
    );
    }