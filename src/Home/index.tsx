import { createDrawerNavigator } from "@react-navigation/drawer";
import OutfitIdeas from "./OutfitIdeas";

const Drawer = createDrawerNavigator();
export const HomeNavigator = () => (
  <Drawer.Navigator screenOptions={{ headerShown: false }}>
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
  </Drawer.Navigator>
);
