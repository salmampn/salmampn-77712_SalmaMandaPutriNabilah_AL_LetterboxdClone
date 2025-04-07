// MovieFriendCard.js

import { View, Image, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MovieCard from "../MovieCard";

const MovieFriendCard = ({ name, rating }) => {
	const renderStars = () => {
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;
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

		for (let i = stars.length; i < 5; i++) {
			stars.push(
				<Icon
					key={`empty-${i}`}
					name='star-o'
					color='white'
				/>
			);
		}

		return stars;
	};

	return (
		<View style={{ marginBottom: 20 }}>
			<MovieCard imageSource={require("../../../assets/movie/lalaland.jpg")} />
			<View style={styles.footer}>
				<Image
					source={require("../../../assets/avatar.png")}
					style={styles.avatar}
				/>
				<View style={styles.info}>
					<Text style={styles.text}>{name}</Text>
					<View style={styles.stars}>{renderStars()}</View>
				</View>
			</View>
		</View>
	);
};

export default MovieFriendCard;

const styles = StyleSheet.create({
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
