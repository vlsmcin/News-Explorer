import { FlatList, Text, View } from 'react-native';
import { getData } from '@/constants/storage';
import { useEffect, useState } from 'react';

export default function History() {
    const [history,setHistory] = useState<string[]>([]);

    useEffect(() => {
        const fetchHistory = async () => {
            const data = await getData("history");
            if(data){
                setHistory(data);
            }
        }
        fetchHistory();
    } ,[history]);

    return (
        <View>
            <FlatList
                data={history}
                keyExtractor={(_,index) => index.toString()}
                renderItem={({item}) => (
                    <Text>{item}</Text>
                )}
            />
            {history.length === 0 && <Text>Empty</Text>}
        </View>
    )
}