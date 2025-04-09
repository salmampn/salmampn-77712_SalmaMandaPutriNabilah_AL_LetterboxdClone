import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const TabScreen = ({ title }: { title: string }) => (
	<View
		style={{
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: "#14171C",
		}}
	>
		{/* <Text>{title}</Text> */}
	</View>
);

const Searching = () => {
	const tabBarOptions = {
		tabBarScrollEnabled: true,
		tabBarPressColor: "#ffffff44",
		tabBarPressOpacity: 0.8,
		tabBarActiveTintColor: "#ffffff",
		tabBarInactiveTintColor: "#ffffff",
		tabBarLabelStyle: {
			fontSize: 12,
			letterSpacing: 3,
			textTransform: "uppercase",
			textAlign: "left",
			alignSelf: "flex-start",
		},
		tabBarItemStyle: { width: "auto" },
		tabBarStyle: { backgroundColor: "#2C343F" },
		tabBarIndicatorStyle: { backgroundColor: "#00E054", height: 3 },
	};

	const tabs = [
		"FILMS",
		"REVIEWS",
		"LISTS",
		"JOURNAL",
		"CAST, CREW OR STUDIOS",
		"MEMBERS OR HQS",
		"STORIES",
		"JOURNAL ARTICLES",
		"PODCAST EPISODES",
		"ALL",
	];

	return (
		<Tab.Navigator
			id='SearchTabNav'
			initialRouteName='FILMS'
			screenOptions={tabBarOptions}
		>
			{tabs.map((tab) => (
				<Tab.Screen
					key={tab}
					name={tab}
					component={() => <TabScreen title={tab} />}
				/>
			))}
		</Tab.Navigator>
	);
};

export default Searching;
