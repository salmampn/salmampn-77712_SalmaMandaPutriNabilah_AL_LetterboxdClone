import React from "react";
import { View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import {
	EllipsisVertical,
	GalleryHorizontal,
	ListFilter,
	Search,
} from "lucide-react-native";

import DrawerNavigation from "./components/DrawerNavigation";
import SearchPage from "./app/Search/Search";
import Searching from "./app/Search/components/Searching";
import SearchBar from "./app/Search/components/SearchBar";

import Profile from "./app/Profile/Profile";
import Watchlist from "./app/Watchlist/Watchlist";
import Lists from "./app/Lists/Lists";
import Diary from "./app/Diary/Diary";
import Reviews from "./app/Reviews/Reviews";
import Activity from "./app/Activity/Activity";
import Settings from "./app/Settings/Settings";
import SignOut from "./app/SignOut";

const Stack = createNativeStackNavigator();
const HEADER_STYLE = {
	headerStyle: { backgroundColor: "#2C343F" },
	headerTintColor: "#fff",
};

const IconButton = ({ icon: IconComponent, onPress }) => (
	<TouchableOpacity
		onPress={onPress}
		style={{ marginRight: 10 }}
	>
		<IconComponent
			size={24}
			color='#ffffff'
		/>
	</TouchableOpacity>
);

const FilterHeader = () => (
	<View style={{ flexDirection: "row", gap: 4 }}>
		<IconButton icon={GalleryHorizontal} />
		<IconButton icon={ListFilter} />
	</View>
);

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar
				style='light'
				backgroundColor='#2C343F'
			/>
			<Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
				<Stack.Screen
					name=' '
					component={DrawerNavigation}
					options={{ headerShown: false }}
				/>

				<Stack.Screen
					name='Search'
					component={SearchPage}
					options={({ navigation }) => ({
						animation: "slide_from_right",
						headerRight: () => (
							<IconButton
								icon={Search}
								onPress={() => navigation.push("Searching")}
							/>
						),
						...HEADER_STYLE,
					})}
				/>

				<Stack.Screen
					name='Searching'
					component={Searching}
					options={{
						animation: "none",
						headerShown: true,
						...HEADER_STYLE,
						headerTitle: () => <SearchBar />,
					}}
				/>

				<Stack.Screen
					name='Profile'
					component={Profile}
					options={{
						animation: "slide_from_bottom",
						headerRight: () => <IconButton icon={EllipsisVertical} />,
						...HEADER_STYLE,
					}}
				/>

				<Stack.Screen
					name='Watchlist'
					component={Watchlist}
					options={{
						animation: "slide_from_bottom",
						headerRight: () => <FilterHeader />,
						...HEADER_STYLE,
					}}
				/>

				<Stack.Screen
					name='Lists'
					component={Lists}
					options={{
						animation: "slide_from_bottom",
						headerRight: () => <IconButton icon={ListFilter} />,
						...HEADER_STYLE,
					}}
				/>

				<Stack.Screen
					name='Diary'
					component={Diary}
					options={{
						animation: "slide_from_bottom",
						headerRight: () => <IconButton icon={ListFilter} />,
						...HEADER_STYLE,
					}}
				/>

				<Stack.Screen
					name='Reviews'
					component={Reviews}
					options={{
						animation: "slide_from_bottom",
						headerRight: () => <IconButton icon={ListFilter} />,
						...HEADER_STYLE,
					}}
				/>

				<Stack.Screen
					name='Activity'
					component={Activity}
					options={{
						animation: "slide_from_bottom",
						headerRight: () => <IconButton icon={ListFilter} />,
						...HEADER_STYLE,
					}}
				/>

				<Stack.Screen
					name='Settings'
					component={Settings}
					options={{
						animation: "slide_from_bottom",
						headerRight: () => (
							<View style={{ flexDirection: "row", gap: 4 }} />
						),
						...HEADER_STYLE,
					}}
				/>

				<Stack.Screen
					name='Sign Out'
					component={SignOut}
					options={{
						animation: "slide_from_bottom",
						...HEADER_STYLE,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
