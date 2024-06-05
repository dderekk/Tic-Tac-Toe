import { Home } from "./src/screens/Home";
import { Rules } from "./src/screens/Rules";
import { Credit } from "./src/screens/Credit";
import { LoadGame } from "./src/screens/LoadPage";

// This is for navigation part
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function App(){
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component = {Home} />
      <Stack.Screen name="Rules" component={Rules} />
      <Stack.Screen name="Credit" component={Credit} />
      <Stack.Screen name="Load" component={LoadGame}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}