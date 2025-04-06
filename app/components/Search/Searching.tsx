import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const Searching = () => {
	return (
		<Tab.Navigator
			id='SearchTabNav'
			initialRouteName='FILMS'
			screenOptions={{
				tabBarScrollEnabled: true,
				tabBarPressColor: "#ffffff44",
				tabBarActiveTintColor: "#ffffff",
				tabBarInactiveTintColor: "#ffffff",
				tabBarLabelStyle: {
					fontSize: 12,
					letterSpacing: 3,
					textTransform: "uppercase",
					textAlign: "left",
					alignSelf: "flex-start",
				},
				tabBarItemStyle: {
					width: "auto",
				},
				tabBarStyle: { backgroundColor: "#14171C" },
				tabBarIndicatorStyle: {
					backgroundColor: "#00E054",
					height: 3,
				},
			}}
		>
			<Tab.Screen
				name='FILMS'
				component={() => (
					<View
						style={{
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "#14171C",
						}}
					>
						<Text>Films</Text>
					</View>
				)}
			/>
			<Tab.Screen
				name='REVIEWS'
				component={() => (
					<View
						style={{
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "#14171C",
						}}
					>
						<Text>Reviews</Text>
					</View>
				)}
			/>
			<Tab.Screen
				name='LISTS'
				component={() => (
					<View
						style={{
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "#14171C",
						}}
					>
						<Text>Lists</Text>
					</View>
				)}
			/>
			<Tab.Screen
				name='JOURNAL'
				component={() => (
					<View
						style={{
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "#14171C",
						}}
					>
						<Text>Journal</Text>
					</View>
				)}
			/>
			<Tab.Screen
				name='CAST, CREW OR STUDIOS'
				component={() => (
					<View
						style={{
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "#14171C",
						}}
					>
						<Text>Cast, Crew or Studios</Text>
					</View>
				)}
			/>
			<Tab.Screen
				name='MEMBERS OR HQS'
				component={() => (
					<View
						style={{
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "#14171C",
						}}
					>
						<Text>Members or HQS</Text>
					</View>
				)}
			/>
			<Tab.Screen
				name='STORIES'
				component={() => (
					<View
						style={{
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "#14171C",
						}}
					>
						<Text>Stories</Text>
					</View>
				)}
			/>
			<Tab.Screen
				name='JOURNAL ARTICLES'
				component={() => (
					<View
						style={{
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "#14171C",
						}}
					>
						<Text>Journal Articles</Text>
					</View>
				)}
			/>
			<Tab.Screen
				name='PODCAST EPISODES'
				component={() => (
					<View
						style={{
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "#14171C",
						}}
					>
						<Text>Podcast Episodes</Text>
					</View>
				)}
			/>
			<Tab.Screen
				name='ALL'
				component={() => (
					<View
						style={{
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "#14171C",
						}}
					>
						<Text>All</Text>
					</View>
				)}
			/>
		</Tab.Navigator>
	);
};
export default Searching;
