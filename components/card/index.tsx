import { View, Text, TouchableOpacity, Linking } from "react-native";

interface CardProps {
    title: string;
    description: string;
    link: string;
    source: string;
}

export default function Card({ title, description, link, source }: CardProps){
    return (
        <View style={{
            display:'flex',
            flexDirection:'column',
            justifyContent: 'flex-start',
            alignItems:'center',
            width:340,
            height: 250,
            backgroundColor:'#D9D9D9',
            borderRadius: 10,
            }}>
            <Text style={{fontSize:14,textAlign:"center",width:310,paddingTop:15}}>{title}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(link)}>
                <Text style={{fontSize:6,textAlign:"left",width:310,paddingTop:10,paddingBottom:2}}>{link}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(source)}>
                <Text style={{fontSize:6,textAlign:"left",width:310,paddingBottom:10}}>{source}</Text>
            </TouchableOpacity>
            <Text style={{fontSize:12,textAlign:"justify",width:310,paddingBottom:15}}>{description}</Text>
        </View>
    );

}