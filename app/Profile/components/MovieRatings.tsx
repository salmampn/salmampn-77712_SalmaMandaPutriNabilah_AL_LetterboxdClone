import { View, Dimensions, StyleSheet } from "react-native";
import MovieCard from "../../../components/MovieCard";
import Icon from "react-native-vector-icons/FontAwesome";
import { RefreshCw, Text as LucideText } from "lucide-react-native";
import renderStars from "../../../components/RenderStars";
import movies from "../../../data/movies";
import MyActivity from "../../../data/MyActivity";

const MovieRatings = () => {
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
			{MyActivity.map((activity, index) => {
				const movie = movies.find((m) => m.key === activity.movieKey);
				return (
					<View key={index}>
						<View>
							<MovieCard
								key={index}
								imageSource={movie?.src}
								width={cardWidth}
								height={cardHeight}
							/>
							<View style={styles.footer}>
								<View style={styles.info}>
									<View style={styles.iconRow}>
										<View style={styles.stars}>
											{renderStars(activity.stars, {})}
										</View>
										{activity.likes && (
											<Icon
												name='heart'
												color='#F27405'
												size={10}
											/>
										)}
										{activity.rewatch && (
											<RefreshCw
												color='gray'
												size={10}
											/>
										)}
										{activity.review && (
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
				);
			})}
			;
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
