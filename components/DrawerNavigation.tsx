import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

import {
	Search,
	GalleryHorizontalEnd,
	UserRound,
	Clock,
	LayoutGrid,
	Calendar,
	Text as LucideText,
	Activity,
	Settings,
	LogOut,
} from "lucide-react-native";

import PopularTabs from "../app/Popular/components/Navigation/PopularTabs";
import Avatar from "./Avatar";
import MyData from "../data/MyData";

const Drawer = createDrawerNavigator();

const drawerItems = [
	{ label: "Search", icon: Search, screen: "Search" },
	{ label: "Profile", icon: UserRound, screen: "Profile" },
	{ label: "Watchlist", icon: Clock, screen: "Watchlist" },
	{ label: "Lists", icon: LayoutGrid, screen: "Lists" },
	{ label: "Diary", icon: Calendar, screen: "Diary" },
	{ label: "Reviews", icon: LucideText, screen: "Reviews" },
	{ label: "Activity", icon: Activity, screen: "Activity" },
	{ label: "Settings", icon: Settings, screen: "Settings" },
	{ label: "Sign Out", icon: LogOut, screen: "SignOut" },
];

const CustomDrawerContent = (props) => {
	const navigation = useNavigation();
	const user = MyData[0];

	return (
		<DrawerContentScrollView {...props}>
			{/* User Info */}
			<View style={styles.userContainer}>
				<Avatar
					imageSource={user.pic}
					width={80}
					height={80}
					borderRadius={60}
					style={{ marginBottom: 10 }}
				/>
				<View>
					<Text style={styles.name}>{user.givenName}</Text>
					<Text style={styles.username}>{user.username}</Text>
				</View>
			</View>

			{/* Default Drawer Items */}
			<DrawerItemList {...props} />

			{/* Custom Drawer Links */}
			{drawerItems.map(({ label, icon: Icon, screen }) => (
				<TouchableOpacity
					key={label}
					style={styles.drawerItem}
					onPress={() => navigation.navigate(screen)}
				>
					<View style={styles.drawerRow}>
						<Icon
							size={24}
							color='#C8D4E0'
						/>
						<Text style={styles.drawerLabel}>{label}</Text>
					</View>
				</TouchableOpacity>
			))}
		</DrawerContentScrollView>
	);
};

// Drawer Navigator
const DrawerNavigation = () => (
	<Drawer.Navigator
		drawerContent={(props) => <CustomDrawerContent {...props} />}
		screenOptions={{
			drawerStyle: {
				backgroundColor: "#14181c",
				width: 255,
			},
			drawerActiveBackgroundColor: "#14181c",
			drawerPressedBackgroundColor: "#2C343F",
			drawerActiveTintColor: "#ffffff",
			headerStyle: {
				backgroundColor: "#2C343F",
			},
			headerTitleStyle: {
				color: "#fff",
				fontSize: 20,
				fontWeight: "bold",
			},
			headerTintColor: "#fff",
			headerShadowVisible: false,
		}}
	>
		<Drawer.Screen
			name='Popular'
			component={PopularTabs}
			options={({ navigation }) => ({
				headerRight: () => (
					<TouchableOpacity
						onPress={() => navigation.navigate("Searching")}
						style={{ marginRight: 30 }}
					>
						<Search
							size={24}
							color='#fff'
						/>
					</TouchableOpacity>
				),
				drawerIcon: () => (
					<GalleryHorizontalEnd
						size={24}
						color='#fff'
						fill='#fff'
					/>
				),
			})}
		/>
	</Drawer.Navigator>
);

export default DrawerNavigation;

const styles = StyleSheet.create({
	userContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 16,
		marginVertical: 20,
		paddingHorizontal: 20,
	},
	name: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
	},
	username: {
		color: "#fff",
		fontSize: 16,
	},
	drawerItem: {
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	drawerRow: {
		flexDirection: "row",
		alignItems: "center",
	},
	drawerLabel: {
		color: "#fff",
		fontSize: 14,
		marginLeft: 10,
	},
});
