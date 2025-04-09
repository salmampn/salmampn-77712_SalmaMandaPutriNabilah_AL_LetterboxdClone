import { View, Text, ScrollView, StyleSheet } from "react-native";
import RootStyles from "../Style";
import Avatar from "./Avatar";
import { Heart } from "lucide-react-native";
import MovieCard from "./MovieCard";
import { format } from "date-fns";

const ReviewDetail = ({ route }) => {
	const { movie, profile, review } = route.params;

	return (
		<ScrollView style={[RootStyles.container]}>
			<View style={styles.header}>
				<Text style={styles.labelHeader}>{profile.givenName}'s Review</Text>
			</View>
			<View style={styles.reviewContainer}>
				<View style={styles.row}>
					<View style={styles.movieInfo}>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								gap: 8,
								marginBottom: 8,
							}}
						>
							<Avatar
								imageSource={profile.image}
								width={40}
								height={40}
							/>
							<Text style={RootStyles.text}>
								{profile.givenName} {profile.familyName}
							</Text>
						</View>
						<View style={[styles.row, { alignItems: "baseline" }]}>
							<Text style={styles.movieTitle}>{movie.title}</Text>
							<Text style={styles.year}>{movie.year}</Text>
						</View>
						<Text style={styles.watchedDate}>
							Watched
							{review.time
								? format(new Date(review.time), " dd MMMM yyyy")
								: " 4 April 2025"}
						</Text>
					</View>
					<MovieCard
						imageSource={movie.src}
						width={100}
						height={150}
						movie={movie}
					/>
				</View>

				<Text style={RootStyles.text}>{review.thoughts}</Text>
				<View style={[styles.row, { alignItems: "center", marginTop: 16 }]}>
					<Heart
						color='gray'
						size={16}
					/>
					<Text style={styles.likesText}>
						LIKE? {review.likes ?? "No likes yet"}
					</Text>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1 },
	header: {
		backgroundColor: "#2C343F",
	},
	labelHeader: {
		color: "#fff",
		fontSize: 20,
		fontWeight: "bold",
		marginTop: 28,
		marginLeft: 64,
		marginBottom: 20,
	},
	reviewContainer: { borderRadius: 8, padding: 16 },
	row: { flexDirection: "row", marginBottom: 16, gap: 4 },
	poster: { width: 100, height: 150, borderWidth: 0.2, borderColor: "gray" },
	movieInfo: { flex: 1 },
	movieTitle: { color: "#fff", fontSize: 18, fontWeight: "bold" },
	year: { color: "#aaa", fontSize: 14 },
	watchedDate: { color: "#aaa", marginTop: 4 },
	likesText: { color: "#aaa", marginLeft: 8, fontSize: 14 },
});

export default ReviewDetail;
