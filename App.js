import React from "react";
import { View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import SearchPage from "./app/Search";
import Searching from "./app/components/Search/Searching";
import SearchBar from "./app/components/Search/SearchBar";

import { Search } from "lucide-react-native";
import DrawerNavigation from "./components/DrawerNavigation";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar
				style='light'
				backgroundColor='#2C343F'
			/>
			<Stack.Navigator
				screenOptions={{
					headerShadowVisible: false,
					animation: "none",
				}}
			>
				<Stack.Screen
					name='Drawer'
					component={DrawerNavigation}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Search'
					component={SearchPage}
					options={({ navigation }) => ({
						headerRight: () => (
							<TouchableOpacity
								onPress={() => navigation.navigate("Searching")}
								style={{ marginRight: 10 }}
							>
								<Search
									size={24}
									color='#ffffff'
								/>
							</TouchableOpacity>
						),
						headerStyle: { backgroundColor: "#2C343F" },
						headerTintColor: "#fff",
					})}
				/>
				<Stack.Screen
					name='Searching'
					component={Searching}
					options={{
						animation: "none",
						headerShown: true,
						headerStyle: { backgroundColor: "#2C343F" },
						headerTintColor: "#fff",
						headerTitle: () => <SearchBar />,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
