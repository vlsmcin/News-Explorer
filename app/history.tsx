import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { getData, storeData } from '@/constants/storage';
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function History() {
    const [history, setHistory] = useState<string[]>([]);

    const fetchHistory = async () => {
        const data = await getData("history");
        if (data) {
            setHistory(data);
        }
    }

    useFocusEffect(
        useCallback(() => {
            fetchHistory();
        }, [])
    );

    const clearHistory = async () => {
        await storeData("history", "");
        setHistory([]);
    };

    const renderItem = ({ item }: { item: string }) => (
        <View style={styles.itemContainer}>
            <MaterialCommunityIcons name="history" size={24} />
            <Text style={styles.itemText}>{item}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={clearHistory} style={styles.clearButton}>
                <Text style={styles.clearButtonText}>Limpar Histórico</Text>
            </TouchableOpacity>
            <FlatList
                data={history}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={styles.listContainer}
                renderItem={renderItem}
            />
            {history.length === 0 && <Text style={styles.emptyText}>Empty</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20,
    },
    listContainer: {
        paddingVertical: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 15,
        marginBottom: 10,
        width: 340,
        backgroundColor: '#fff',
    },
    itemText: {
        fontSize: 16,
        textAlign: 'center',
        marginLeft: 10,
    },
    emptyText: {
        fontSize: 18,
        color: '#888',
        marginTop: 20,
    },
    clearButton: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: 'gray',
        borderRadius: 5,
    },
    clearButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});
