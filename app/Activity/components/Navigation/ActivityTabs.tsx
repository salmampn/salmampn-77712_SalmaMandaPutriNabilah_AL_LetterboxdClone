import React from "react";
import { Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Friends from "../Friends";
import You from "../You";
import Incoming from "../Incoming";

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

const ActivityTabs = () => {
	return (
		<Tab.Navigator
			initialRouteName='FRIENDS'
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
				name='FRIENDS'
				component={Friends}
				options={{ tabBarLabel: () => <TabLabel title='FRIENDS' /> }}
			/>
			<Tab.Screen
				name='YOU'
				component={You}
				options={{ tabBarLabel: () => <TabLabel title='YOU' /> }}
			/>
			<Tab.Screen
				name='INCOMING'
				component={Incoming}
				options={{ tabBarLabel: () => <TabLabel title='INCOMING' /> }}
			/>
		</Tab.Navigator>
	);
};

export default ActivityTabs;
