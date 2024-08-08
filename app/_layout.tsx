import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";	
import Index from "./index";
import Search from "./search";
import History from "./history";

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="index"
        options={{title:'Home',
        headerShown:false,
        tabBarIcon:({color,size})=>(
          <MaterialCommunityIcons name="home" color={color} size={size}/>
        )}}
        component={Index}
      />
      <Tab.Screen name="search"
        options={{headerShown:false,
          title:'Buscar',
          tabBarIcon:({color,size})=>(
            <MaterialCommunityIcons name="magnify" color={color} size={size}/>
          )
        }}
        component={Search}/>
      <Tab.Screen name="history"
        options={{title:'Histórico',
          headerStyle:{
            height:103,
          },
          tabBarIcon:({color,size})=>(
            <MaterialCommunityIcons name="history" color={color} size={size}/>
          )
        }}
        component={History}/>
    </Tab.Navigator>
  );
}
