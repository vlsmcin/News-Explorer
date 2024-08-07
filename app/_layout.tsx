import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Index from "./index";
import Search from "./search";

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="index" options={{title:'Home',headerShown:false}} component={Index}/>
      <Tab.Screen name="search" options={{headerShown:false}} component={Search}/>
    </Tab.Navigator>
  );
}
