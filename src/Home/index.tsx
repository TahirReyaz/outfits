import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeRoutes } from "../components/Navigation";
import OutfitIdeas from "./OutfitIdeas";

const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => (
  <Drawer.Navigator screenOptions={{ headerShown: false }}>
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
  </Drawer.Navigator>
);
