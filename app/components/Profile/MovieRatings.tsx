import { View, Dimensions, StyleSheet } from "react-native";
import MovieCard from "../MovieCard";
import Icon from "react-native-vector-icons/FontAwesome";
import { RefreshCw, Text as LucideText } from "lucide-react-native";
import renderStars from "../RenderStars";

const MovieRatings = ({ stars, likes, rewatch, review }) => {
	const screenWidth = Dimensions.get("window").width;
	const containerPadding = 12;
	const containerWidth = screenWidth - containerPadding * 2;

	const cardsPerRow = 4;
	const cardGap = 8;
	const totalGap = cardGap * (cardsPerRow - 1);

	const availableWidth = containerWidth - totalGap;
	const cardWidth = availableWidth / cardsPerRow;
	const cardHeight = (cardWidth / 90) * 130;

	const movieItems = [
		{ stars: 4, likes: true, rewatch: true, review: true },
		{ stars: 3, likes: true, rewatch: false, review: false },
		{ stars: 5, likes: false, rewatch: true, review: true },
		{ stars: 2, likes: false, rewatch: false, review: false },
	];

	return (
		<View style={[styles.container]}>
			{movieItems.map((item, index) => (
				<View key={index}>
					<View>
						<MovieCard
							imageSource={require("../../../assets/movie/lalaland.jpg")}
							width={cardWidth}
							height={cardHeight}
						/>
						<View style={styles.footer}>
							<View style={styles.info}>
								<View style={styles.iconRow}>
									<View style={styles.stars}>{renderStars(item.stars)}</View>
									{item.likes && (
										<Icon
											name='heart'
											color='#F27405'
											size={10}
										/>
									)}
									{item.rewatch && (
										<RefreshCw
											color='gray'
											size={10}
										/>
									)}
									{item.review && (
										<LucideText
											color='white'
											size={10}
										/>
									)}
								</View>
							</View>
						</View>
					</View>
				</View>
			))}
		</View>
	);
};

export default MovieRatings;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	footer: {
		flexDirection: "row",
		marginTop: 4,
	},
	info: {
		marginLeft: 4,
	},
	stars: {
		flexDirection: "row",
		alignItems: "center",
		gap: 2,
	},
	iconRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},
});
