import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import RootStyles from "../Style";
import RatingGraph from "../app/Profile/components/RatingGraph";
import DiaryButton from "./DiaryButton";

const MovieDetailScreen = ({ route }) => {
	const { movie } = route.params;

	return (
		<>
			<ScrollView
				style={RootStyles.container}
				contentContainerStyle={{ paddingBottom: 32 }}
			>
				<View style={styles.bannerContainer}>
					<Image
						source={movie.banner}
						style={styles.banner}
					/>
					<LinearGradient
						colors={["transparent", "#14181c"]}
						start={{ x: 0, y: 0 }}
						end={{ x: 0, y: 1 }}
						style={styles.gradientOverlay}
					/>
				</View>

				<View style={styles.detailContainer}>
					<View style={styles.headerRow}>
						<View style={{ flex: 1 }}>
							<View>
								<Text style={styles.title}>{movie.title}</Text>
								<Text style={styles.directorLabel}>DIRECTED BY</Text>
								<Text style={styles.director}>{movie.director}</Text>
							</View>
							<View
								style={{
									flex: 1,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									width: "90%",
								}}
							>
								<Text style={styles.metadata}>
									{movie.year} • {movie.duration} mins
								</Text>
								<Text
									style={[
										styles.trailerText,
										{ justifyContent: "center", alignContent: "center" },
									]}
								>
									TRAILER
								</Text>
							</View>
						</View>

						<Image
							source={movie.src}
							style={styles.poster}
						/>
					</View>

					<View>
						<Text style={styles.descriptionHeader}>{movie.catchphrase}</Text>
						<Text style={styles.description}>{movie.description}</Text>
					</View>
				</View>
				<View style={RootStyles.divider} />
				<View style={styles.detailContainer}>
					<Text style={styles.description}>RATINGS</Text>
					<RatingGraph />
				</View>
				<View style={RootStyles.divider} />
				<View style={styles.detailContainer}>
					<Text style={styles.description}>Where to watch</Text>
				</View>
				<View style={RootStyles.divider} />
			</ScrollView>
			<DiaryButton />
		</>
	);
};

export default MovieDetailScreen;

const styles = StyleSheet.create({
	bannerContainer: {
		position: "relative",
		paddingBottom: 24,
	},
	banner: {
		width: "100%",
		height: 240,
		resizeMode: "cover",
	},
	backButton: {
		position: "absolute",
		top: 40,
		left: 20,
		backgroundColor: "rgba(0,0,0,0.5)",
		padding: 8,
		borderRadius: 100,
	},
	detailContainer: {
		padding: 16,
	},
	headerRow: {
		flexDirection: "row",
		alignItems: "flex-start",
		gap: 16,
	},
	title: {
		color: "#fff",
		fontSize: 24,
		fontWeight: "bold",
	},
	descriptionContainer: {
		flexDirection: "row",
		height: 100,
	},
	directorLabel: {
		color: "#888",
		fontSize: 14,
		marginTop: 4,
	},
	director: {
		color: "#ccc",
		fontWeight: "bold",
		fontSize: 16,
	},
	metadata: {
		color: "#888",
		fontSize: 16,
		marginTop: 4,
	},
	poster: {
		width: 130,
		height: 200,
		borderRadius: 4,
	},
	trailerButton: {
		borderColor: "#fff",
		borderWidth: 1,
		paddingVertical: 6,
		paddingHorizontal: 12,
		alignSelf: "flex-start",
		borderRadius: 4,
		marginTop: 12,
	},
	trailerText: {
		color: "#fff",
		fontSize: 16,
	},
	descriptionHeader: {
		color: "#ccc",
		textTransform: "uppercase",
		marginTop: 20,
		marginBottom: 6,
		fontSize: 16,
	},
	description: {
		color: "#aaa",
		fontSize: 16,
		lineHeight: 36,
	},
	gradientOverlay: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		height: 100,
	},
});
