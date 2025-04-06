import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Films from "../../Films";
import Reviews from "../../Reviews";
import Lists from "../../Lists";
import Journal from "../../Journal";

const Tab = createMaterialTopTabNavigator();

const PopularTabs = () => {
	return (
		<Tab.Navigator
			initialRouteName='FILMS'
			lazy={true}
			swipeEnabled={true}
			screenOptions={{
				tabBarScrollEnabled: false,
				tabBarStyle: {
					backgroundColor: "#2C343F",
				},
				tabBarIndicatorStyle: {
					backgroundColor: "#00E054",
					height: 3,
				},
				tabBarLabelStyle: {
					fontSize: 12,
					letterSpacing: 3,
					textTransform: "uppercase",
				},
				tabBarItemStyle: {
					width: "auto",
				},
				tabBarPressColor: "#ffffff44",
				tabBarActiveTintColor: "#ffffff",
				tabBarInactiveTintColor: "#ffffff",
			}}
			sceneContainerStyle={{ backgroundColor: "#14181c" }}
		>
			<Tab.Screen
				name='FILMS'
				component={Films}
			/>
			<Tab.Screen
				name='REVIEWS'
				component={Reviews}
			/>
			<Tab.Screen
				name='LISTS'
				component={Lists}
			/>
			<Tab.Screen
				name='JOURNAL'
				component={Journal}
			/>
		</Tab.Navigator>
	);
};

export default PopularTabs;
