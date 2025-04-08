import { View, Dimensions, StyleSheet } from "react-native";
import MovieCard from "../MovieCard";
import movies from "../../../data/movies";
import favorites from "../../../data/favorites";

const ProfileFavorites = () => {
	const screenWidth = Dimensions.get("window").width;
	const containerPadding = 4;
	const containerWidth = screenWidth - containerPadding * 2;

	const cardsPerRow = 4;
	const cardGap = 8;
	const totalGap = cardGap * (cardsPerRow - 1);

	const availableWidth = containerWidth - totalGap;
	const cardWidth = availableWidth / cardsPerRow;
	const cardHeight = (cardWidth / 90) * 130;

	return (
		<View style={[styles.container]}>
			{favorites.map((favorites, index) => {
				const movie = movies.find((m) => m.key === favorites.movieKey);
				return (
					<MovieCard
						key={index}
						imageSource={movie?.src}
						width={cardWidth}
						height={cardHeight}
					/>
				);
			})}
			;
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
});

export default ProfileFavorites;
