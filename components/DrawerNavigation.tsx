import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
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
import PopularTabs from "../app/components/Navigation/PopularTabs";
import Avatar from "../app/components/Avatar";

const Drawer = createDrawerNavigator();

// Custom Drawer Content
const CustomDrawerContent = (props) => {
	const navigation = useNavigation();

	return (
		<DrawerContentScrollView {...props}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					gap: 16,
				}}
			>
				<Avatar />
				<View>
					<Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
						sal
					</Text>
					<Text style={{ color: "#fff", fontSize: 16 }}>salmonteea</Text>
				</View>
			</View>

			<DrawerItemList {...props} />

			<TouchableOpacity
				style={styles.drawerItem}
				onPress={() => navigation.navigate("Search")}
			>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Search
						size={24}
						color='#C8D4E0'
					/>
					<Text style={styles.drawerLabel}>Search</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.drawerItem}
				onPress={() => navigation.navigate("Profile")}
			>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<UserRound
						size={24}
						color='#C8D4E0'
					/>
					<Text style={styles.drawerLabel}>Profile</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.drawerItem}
				onPress={() => navigation.navigate("Search")}
			>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Clock
						size={24}
						color='#C8D4E0'
					/>
					<Text style={styles.drawerLabel}>Watchlist</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.drawerItem}
				onPress={() => navigation.navigate("Search")}
			>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<LayoutGrid
						size={24}
						color='#C8D4E0'
					/>
					<Text style={styles.drawerLabel}>Lists</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.drawerItem}
				onPress={() => navigation.navigate("Search")}
			>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Calendar
						size={24}
						color='#C8D4E0'
					/>
					<Text style={styles.drawerLabel}>Diary</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.drawerItem}
				onPress={() => navigation.navigate("Search")}
			>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<LucideText
						size={24}
						color='#C8D4E0'
					/>
					<Text style={styles.drawerLabel}>Reviews</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.drawerItem}
				onPress={() => navigation.navigate("Search")}
			>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Activity
						size={24}
						color='#C8D4E0'
					/>
					<Text style={styles.drawerLabel}>Activity</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.drawerItem}
				onPress={() => navigation.navigate("Search")}
			>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Settings
						size={24}
						color='#C8D4E0'
					/>
					<Text style={styles.drawerLabel}>Settings</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.drawerItem}
				onPress={() => navigation.navigate("Search")}
			>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<LogOut
						size={24}
						color='#C8D4E0'
					/>
					<Text style={styles.drawerLabel}>Sign Out</Text>
				</View>
			</TouchableOpacity>
		</DrawerContentScrollView>
	);
};

// Drawer Navigator
const DrawerNavigation = () => {
	return (
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
				DrawerItemListStyle: {
					backgroundColor: "#14181c",
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
						/>
					),
				})}
			/>
		</Drawer.Navigator>
	);
};

export default DrawerNavigation;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#14181c",
	},
	drawerItem: {
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	drawerLabel: {
		color: "#fff",
		fontSize: 14,
		marginLeft: 10,
	},
});
