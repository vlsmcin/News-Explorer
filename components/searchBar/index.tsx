import { TextInput, Button, SafeAreaView, View } from "react-native";
import { useState } from "react";
import { useNavigation } from "expo-router";
import { StackNavigationProp } from "@react-navigation/stack";

interface SearchBarProps {
    onSubmit: () => void;
    setSearch: (search: string) => void;
}

export default function SearchBar({ onSubmit,setSearch }: SearchBarProps) {
    const [localSearch, setLocalSearch] = useState("");

    const handleSearch = () => {
        setSearch(localSearch);
        onSubmit();
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
                value={localSearch}
                onChangeText={setLocalSearch}
                onSubmitEditing={handleSearch}
            />
            <View style={{marginBottom: 15, marginRight: 10}}>
                <Button title="Search" onPress={handleSearch}/>
            </View>
        </SafeAreaView>
    );
    }