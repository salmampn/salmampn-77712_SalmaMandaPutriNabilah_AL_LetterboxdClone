import React from "react";
import { View, Text } from "react-native";
import MovieFriendScroll from "./components/Films/MovieFriendScroll";
import { ScrollView } from "react-native-gesture-handler";
import RootStyles from "../Style";
import HeaderMovie from "./components/Films/HeaderMovie";
import FriendsRating from "../data/FriendsRating";
import friends from "../data/friends";

const EnhancedFriendsData = FriendsRating.map((rating) => {
	const review = friends.find((r) => r.key === rating.friendKey);
	return {
		...rating,
		name: review?.givenName || rating.friendKey,
		image: review?.image,
	};
});

const Films = () => {
	return (
		<ScrollView
			style={RootStyles.container}
			contentContainerStyle={{ paddingVertical: 8 }}
		>
			<View style={{ flexDirection: "column", gap: 16 }}>
				<HeaderMovie header='Popular this week' />
				<View style={{ paddingLeft: 16 }}>
					<Text style={RootStyles.headText}>New from friends</Text>
					<MovieFriendScroll FriendsRating={EnhancedFriendsData} />
				</View>
				<HeaderMovie header='Popular with friends' />
			</View>
		</ScrollView>
	);
};

export default Films;
