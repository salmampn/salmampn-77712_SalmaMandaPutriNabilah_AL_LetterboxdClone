import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import MovieCard from "../../../../components/MovieCard";
import { RefreshCw, Text as LucideText, Heart } from "lucide-react-native";
import Avatar from "../../../../components/Avatar";
import RootStyles from "../../../../Style";
import renderStars from "../../../../components/RenderStars";
import movies from "../../../../data/movies";

const MovieFriendScroll = ({ FriendsRating }) => {
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={styles.scrollContainer}
		>
			{FriendsRating.map((rating, index) => {
				const movie = movies.find((m) => m.key === rating.movieKey);
				return (
					<FriendMovieCard
						key={index}
						friend={rating}
						moviePoster={movie?.src}
					/>
				);
			})}
		</ScrollView>
	);
};

const FriendMovieCard = ({ friend, moviePoster }) => {
	return (
		<View style={styles.cardWrapper}>
			<MovieCard imageSource={moviePoster} />
			<View style={styles.footer}>
				<Avatar
					width={25}
					height={25}
					style={{ marginLeft: 4 }}
					imageSource={friend.image}
				/>
				<View style={styles.info}>
					<Text style={RootStyles.text}>{friend.name}</Text>
					<View style={styles.actions}>
						<View style={styles.stars}>
							{renderStars(friend.rating, { color: "white" })}
						</View>

						{friend.likes && (
							<Heart
								color='#F27405'
								size={10}
								fill='#F27405'
							/>
						)}
						{friend.rewatch && (
							<RefreshCw
								color='gray'
								size={10}
							/>
						)}
						{friend.review && (
							<LucideText
								color='white'
								size={10}
							/>
						)}
					</View>
				</View>
			</View>
		</View>
	);
};

export default MovieFriendScroll;

const styles = StyleSheet.create({
	scrollContainer: {
		flexDirection: "row",
	},
	cardWrapper: {
		marginRight: 0,
	},
	footer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 6,
	},
	info: {
		marginLeft: 8,
		flexDirection: "column",
	},
	stars: {
		flexDirection: "row",
		alignItems: "center",
		gap: 2,
	},
	actions: {
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
		marginTop: 2,
	},
});
