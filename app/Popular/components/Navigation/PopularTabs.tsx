import React from "react";
import { Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Films from "../Films";
import Reviews from "../PopularReviews";
import Lists from "../PopularLists";
import Journal from "../Journal";

const Tab = createMaterialTopTabNavigator();

const TabLabel = ({ title }) => (
	<Text
		numberOfLines={1}
		ellipsizeMode='tail'
		allowFontScaling={false}
		style={{
			fontSize: 11,
			color: "white",
			letterSpacing: 2,
			textTransform: "uppercase",
			textAlign: "center",
		}}
	>
		{title}
	</Text>
);

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
				tabBarPressColor: "#ffffff44",
			}}
			sceneContainerStyle={{ backgroundColor: "#14181c" }}
		>
			<Tab.Screen
				name='FILMS'
				component={Films}
				options={{ tabBarLabel: () => <TabLabel title='FILMS' /> }}
			/>
			<Tab.Screen
				name='REVIEWS'
				component={Reviews}
				options={{ tabBarLabel: () => <TabLabel title='REVIEWS' /> }}
			/>
			<Tab.Screen
				name='LISTS'
				component={Lists}
				options={{ tabBarLabel: () => <TabLabel title='LISTS' /> }}
			/>
			<Tab.Screen
				name='JOURNAL'
				component={Journal}
				options={{ tabBarLabel: () => <TabLabel title='JOURNAL' /> }}
			/>
		</Tab.Navigator>
	);
};

export default PopularTabs;
