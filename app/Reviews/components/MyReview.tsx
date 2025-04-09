import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MovieCard from "../../../components/MovieCard";
import { RefreshCw, Heart } from "lucide-react-native";
import RootStyles from "../../../Style";
import renderStars from "../../../components/RenderStars";
import { useNavigation } from "@react-navigation/native";
import profiles from "../../../data/profiles";

const MyReview = ({
	title,
	year,
	thoughts,
	stars,
	likes,
	rewatch,
	imageSource,
	style,
	movie,
	time,
}) => {
	const navigation = useNavigation();

	const profile = profiles.find((p) => p.key === "sal");

	return (
		<View>
			<TouchableOpacity
				onPress={() =>
					navigation.navigate("ReviewDetail", {
						movie,
						profile,
						review: {
							thoughts,
							stars,
							likes,
							rewatch,
							time,
						},
					})
				}
			>
				<View style={[styles.container, style]}>
					<View style={styles.header}>
						<View style={styles.titleYearContainer}>
							<Text style={styles.title}>{title}</Text>
							<Text style={styles.year}>{year}</Text>
						</View>
					</View>
					<View style={styles.ratingRow}>
						<View style={styles.stars}>{renderStars(stars, {})}</View>
						{likes && (
							<Heart
								color='#F27405'
								size={10}
								fill='#F27405'
							/>
						)}
						{rewatch && (
							<RefreshCw
								color='gray'
								size={10}
							/>
						)}
					</View>
					<View style={styles.reviewRow}>
						<MovieCard
							imageSource={imageSource}
							width={125}
							height={180}
							movie={movie}
						/>
						<View style={styles.reviewTextWrapper}>
							<Text style={{ color: "lightgray", fontSize: 16 }}>
								{thoughts}
							</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>
			<View style={[RootStyles.divider, { marginBottom: 16 }]} />
		</View>
	);
};

export default MyReview;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginLeft: 4,
	},
	titleYearContainer: {
		flexDirection: "row",
		alignItems: "baseline",
		gap: 4,
	},
	title: {
		color: "lightgray",
		fontWeight: "bold",
		fontSize: 18,
	},
	year: {
		color: "lightgray",
	},
	stars: {
		flexDirection: "row",
		alignItems: "center",
		gap: 2,
	},
	ratingRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
		marginTop: 8,
		marginLeft: 4,
	},
	reviewRow: {
		flexDirection: "row",
		gap: 8,
		marginTop: 8,
		marginBottom: 24,
		alignItems: "flex-start",
	},
	reviewTextWrapper: {
		flex: 1,
		paddingRight: 16,
	},
});
