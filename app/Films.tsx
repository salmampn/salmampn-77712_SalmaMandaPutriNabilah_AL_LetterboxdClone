import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MovieScroll from "./components/Films/MovieScroll";
import MovieFriendScroll from "./components/Films/MovieFriendScroll";
import { ScrollView } from "react-native-gesture-handler";
import RootStyles from "../Style";

const Films = () => {
	return (
		<ScrollView
			style={RootStyles.container}
			contentContainerStyle={{
				paddingBottom: 10,
			}}
		>
			<Text style={RootStyles.headText}>Popular this week</Text>
			<View style={{ marginBottom: 20 }}>
				<MovieScroll />
			</View>
			<Text style={RootStyles.headText}>New from friends</Text>
			<View style={{ marginBottom: 20 }}>
				<MovieFriendScroll
					friends={[
						{
							name: "Alex",
							rating: 4.5,
							likes: true,
							rewatch: true,
							review: true,
						},
						{ name: "Jenny", rating: 3 },
						{ name: "Sam", rating: 5 },
						{ name: "Taylor", rating: 2.5 },
					]}
				/>
			</View>
			<Text style={RootStyles.headText}>Popular with friends</Text>
			<View style={{ marginBottom: 20 }}>
				<MovieScroll />
			</View>
		</ScrollView>
	);
};

export default Films;
