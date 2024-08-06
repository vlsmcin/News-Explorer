import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "./index";
import Search from "./search";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="index" options={{headerShown:false}} component={Index}/>
      <Stack.Screen name="search" options={{headerShown:false}} component={Search}/>
    </Stack.Navigator>
  );
}

export default function RootLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="index" options={{title:'Home',headerShown:false}} component={HomeNavigation}/>
      <Tab.Screen name="search" options={{headerShown:false}} component={Search}/>
    </Tab.Navigator>
  );
}
