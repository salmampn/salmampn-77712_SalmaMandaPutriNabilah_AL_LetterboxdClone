import React from "react";
import { View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import SearchPage from "./app/Search";
import Searching from "./app/components/Search/Searching";
import SearchBar from "./app/components/Search/SearchBar";

import {
	EllipsisVertical,
	GalleryHorizontal,
	ListFilter,
	Search,
	Watch,
} from "lucide-react-native";
import DrawerNavigation from "./components/DrawerNavigation";
import Profile from "./app/Profile";
import Watchlist from "./app/Watchlist";

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
				}}
			>
				<Stack.Screen
					name=' '
					component={DrawerNavigation}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='Search'
					component={SearchPage}
					options={({ navigation }) => ({
						animation: "slide_from_right",
						headerRight: () => (
							<TouchableOpacity
								onPress={() => navigation.push("Searching")}
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
				<Stack.Screen
					name='Profile'
					component={Profile}
					options={({ navigation }) => ({
						animation: "slide_from_bottom",
						headerRight: () => (
							<TouchableOpacity style={{ marginRight: 10 }}>
								<EllipsisVertical
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
					name='Watchlist'
					component={Watchlist}
					options={({ navigation }) => ({
						animation: "slide_from_bottom",
						headerRight: () => (
							<View style={{ flexDirection: "row", gap: 4 }}>
								<TouchableOpacity style={{ marginRight: 10 }}>
									<GalleryHorizontal
										size={24}
										color='#ffffff'
									/>
								</TouchableOpacity>
								<TouchableOpacity style={{ marginRight: 10 }}>
									<ListFilter
										size={24}
										color='#ffffff'
									/>
								</TouchableOpacity>
							</View>
						),
						headerStyle: { backgroundColor: "#2C343F" },
						headerTintColor: "#fff",
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
