import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MovieFriendScroll from "./Films/MovieFriendScroll";
import RootStyles from "../../../Style";
import HeaderMovie from "./Films/HeaderMovie";
import reviews from "../../../data/reviews";
import profiles from "../../../data/profiles";
import DiaryButton from "../../../components/DiaryButton";

const EnhancedFriendsData = reviews
	.filter((review) => review.friend)
	.map((review) => {
		const profile = profiles.find((p) => p.key === review.profileKey);
		return {
			...review,
			name: profile?.givenName || review.profileKey,
			image: profile?.image,
		};
	});

const Films = () => {
	return (
		<>
			<ScrollView
				style={RootStyles.container}
				contentContainerStyle={{ paddingBottom: 32 }}
			>
				<View style={{ flexDirection: "column", gap: 16 }}>
					<HeaderMovie header='Popular this week' />
					<View style={{ paddingLeft: 16 }}>
						<Text style={[RootStyles.headText, { marginVertical: 24 }]}>
							New from friends
						</Text>
						<MovieFriendScroll FriendsRating={EnhancedFriendsData} />
					</View>
					<HeaderMovie header='Popular with friends' />
				</View>
			</ScrollView>
			<DiaryButton />
		</>
	);
};

export default Films;
