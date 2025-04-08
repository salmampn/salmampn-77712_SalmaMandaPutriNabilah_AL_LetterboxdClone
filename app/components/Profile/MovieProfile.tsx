import { View, Dimensions, StyleSheet } from "react-native";
import MovieCard from "../MovieCard";

const MovieProfile = () => {
	const screenWidth = Dimensions.get("window").width;
	const containerPadding = 12;
	const containerWidth = screenWidth - containerPadding * 2;

	const cardsPerRow = 4;
	const cardGap = 8;
	const totalGap = cardGap * (cardsPerRow - 1);

	const availableWidth = containerWidth - totalGap;
	const cardWidth = availableWidth / cardsPerRow;
	const cardHeight = (cardWidth / 90) * 130;

	const movies = [
		require("../../../assets/movie/lalaland.jpg"),
		require("../../../assets/movie/lalaland.jpg"),
		require("../../../assets/movie/lalaland.jpg"),
		require("../../../assets/movie/lalaland.jpg"),
	];

	return (
		<View style={[styles.container]}>
			{movies.map((src, index) => (
				<View key={index}>
					<MovieCard
						imageSource={src}
						width={cardWidth}
						height={cardHeight}
					/>
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
});

export default MovieProfile;
