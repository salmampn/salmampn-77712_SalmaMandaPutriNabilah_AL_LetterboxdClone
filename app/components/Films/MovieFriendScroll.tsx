import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import MovieCard from "../MovieCard";
import Icon from "react-native-vector-icons/FontAwesome";

const MovieFriendScroll = ({ friends }) => {
	const renderStars = (rating) => {
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;
		const totalStars = hasHalfStar ? fullStars + 1 : fullStars;
		const stars = [];

		for (let i = 0; i < fullStars; i++) {
			stars.push(
				<Icon
					key={`full-${i}`}
					name='star'
					color='white'
				/>
			);
		}

		if (hasHalfStar) {
			stars.push(
				<Icon
					key='half'
					name='star-half'
					color='white'
				/>
			);
		}
		return stars;
	};

	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={styles.scrollContainer}
		>
			{friends.map((friend, index) => (
				<View
					key={index}
					style={styles.cardWrapper}
				>
					<MovieCard
						imageSource={require("../../../assets/movie/lalaland.jpg")}
					/>
					<View style={styles.footer}>
						<Image
							source={require("../../../assets/avatar.png")}
							style={styles.avatar}
						/>
						<View style={styles.info}>
							<Text style={styles.text}>{friend.name}</Text>
							<View style={styles.stars}>{renderStars(friend.rating)}</View>
						</View>
					</View>
				</View>
			))}
		</ScrollView>
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
	avatar: {
		width: 30,
		height: 30,
		borderRadius: 15,
		borderWidth: 1,
		borderColor: "#445566",
	},
	info: {
		marginLeft: 8,
		flexDirection: "column",
	},
	text: {
		color: "lightgrey",
	},
	stars: {
		flexDirection: "row",
		alignItems: "center",
		gap: 2,
	},
});
