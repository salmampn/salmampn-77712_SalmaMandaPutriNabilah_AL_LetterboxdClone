import { StyleSheet, Text, View } from "react-native";
import MovieCard from "../MovieCard";
import { RefreshCw, Heart } from "lucide-react-native";
import RootStyles from "../../../Style";
import Avatar from "../Avatar";
import renderStars from "../RenderStars";

const FrontReview = ({
	title,
	name,
	year,
	review,
	stars,
	likes,
	rewatch,
	imageSource,
	profilePic,
	style,
}) => {
	return (
		<View>
			<View style={[styles.container, style]}>
				<View style={styles.header}>
					<View style={styles.titleYearContainer}>
						<Text style={styles.title}>{title}</Text>
						<Text style={styles.year}>{year}</Text>
					</View>
					<View style={styles.account}>
						<Text style={styles.name}>{name}</Text>
						<Avatar
							imageSource={profilePic}
							width={35}
							height={35}
							borderRadius={20}
							style={{}}
						/>
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
					/>
					<View style={styles.reviewTextWrapper}>
						<Text style={{ color: "lightgray" }}>{review}</Text>
					</View>
				</View>
			</View>
			<View style={[RootStyles.divider, { marginBottom: 16 }]} />
		</View>
	);
};

export default FrontReview;

const styles = StyleSheet.create({
	container: {
		marginTop: 8,
		paddingHorizontal: 16,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
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
	name: {
		color: "#556677",
		fontWeight: "bold",
		fontSize: 16,
	},
	account: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
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
