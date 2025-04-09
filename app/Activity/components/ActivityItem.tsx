import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Avatar from "../../../components/Avatar";
import RootStyles from "../../../Style";
import { format, formatDistanceToNow } from "date-fns";
import renderStars from "../../../components/RenderStars";
import profiles from "../../../data/profiles";
import movies from "../../../data/movies";

const ActivityItem = ({ user, activity }) => {
	const { width } = useWindowDimensions();
	const userProfile = profiles.find((u) => u.key === user);
	const movie = movies.find((m) => m.key === activity.movieKey);
	const followedProfile = profiles.find((u) => u.key === activity.followedKey);
	const formattedDate = format(new Date(activity.time), "EEEE, d MMMM, yyyy");
	const displayName = userProfile.key === "sal" ? "You" : userProfile.givenName;

	const renderRatingStars = () => (
		<View style={styles.stars}>
			{renderStars(activity.stars, { color: "white" })}
		</View>
	);

	const getSubtitleWithTitle = (title, year, includeStars = false) => (
		<View style={styles.rowCenter}>
			<Text
				style={
					activity.review ? styles.reviewTitle : [styles.title, styles.oneLine]
				}
			>
				{title}
			</Text>
			{year && (
				<Text style={[RootStyles.text, styles.subtitleYear]}>{year}</Text>
			)}
			{includeStars && renderStars(activity.stars, { color: "white" })}
			{!year && <Text style={RootStyles.text}>on {formattedDate}</Text>}
		</View>
	);

	let message = `${displayName} watched`;
	let subtitle = null;

	if (activity.watchlist) {
		message = `${displayName} added`;
		subtitle = (
			<View style={styles.rowCenter}>
				<Text style={styles.title}>{movie?.title}</Text>
				<Text style={[RootStyles.text, styles.watchlistText]}>
					to their watchlist
				</Text>
			</View>
		);
	} else if (activity.following && followedProfile) {
		message = `${displayName} followed`;
		subtitle = (
			<Text style={styles.title}>
				{followedProfile.givenName} {followedProfile.familyName}
			</Text>
		);
	} else if (activity.review && activity.stars > 0 && activity.likes) {
		message = `${displayName} ${
			activity.rewatch ? "rewatched" : "watched"
		}, liked and rated`;
		subtitle = (
			<View>
				{getSubtitleWithTitle(movie?.title, movie?.year)}
				{renderRatingStars()}
				{activity.thoughts && (
					<Text style={[RootStyles.text, styles.reviewThoughts]}>
						{activity.thoughts}
					</Text>
				)}
			</View>
		);
	} else if (activity.review && activity.stars > 0) {
		message = `${displayName} ${
			activity.rewatch ? "rewatched" : "watched"
		}, rated`;
		subtitle = (
			<View>
				{getSubtitleWithTitle(movie?.title, movie?.year)}
				{renderRatingStars()}
				{activity.thoughts && (
					<Text style={[RootStyles.text, styles.reviewThoughts]}>
						{activity.thoughts}
					</Text>
				)}
			</View>
		);
	} else if (!activity.likes && activity.stars === 0) {
		message = `${displayName} ${activity.rewatch ? "rewatched" : "watched"}`;
		subtitle = (
			<Text
				style={
					activity.review ? styles.reviewTitle : [styles.title, styles.oneLine]
				}
			>
				{movie?.title} on {formattedDate}
			</Text>
		);
	} else if (activity.likes && activity.stars > 0) {
		message = `${displayName} ${
			activity.rewatch ? "rewatched" : "watched"
		}, liked and rated`;
		subtitle = getSubtitleWithTitle(movie?.title, null, true);
	} else if (activity.stars > 0) {
		message = `${displayName} ${
			activity.rewatch ? "rewatched" : "watched"
		} and rated`;
		subtitle = getSubtitleWithTitle(movie?.title, null, true);
	} else if (activity.likes) {
		message = `${displayName} ${
			activity.rewatch ? "rewatched" : "watched"
		} and liked`;
		subtitle = (
			<Text
				style={
					activity.review ? styles.reviewTitle : [styles.title, styles.oneLine]
				}
			>
				{movie?.title} on {formattedDate}
			</Text>
		);
	}

	return (
		<View style={[styles.container, { maxWidth: width - 32 }]}>
			<View style={styles.rowGap}>
				<Avatar
					imageSource={userProfile?.image}
					width={25}
					height={25}
					borderRadius={20}
					style={{ marginTop: 4 }}
				/>
				<View style={[styles.textContainer, { maxWidth: width * 0.75 }]}>
					<Text
						style={[RootStyles.text, styles.messageText]}
						numberOfLines={2}
						ellipsizeMode='tail'
					>
						{message}
					</Text>
					{subtitle}
				</View>
			</View>
			<Text style={styles.timestamp}>
				{formatDistanceToNow(new Date(activity.time))
					.replace(" months", "mo")
					.replace(" month", "mo")
					.replace(" weeks", "w")
					.replace(" week", "w")
					.replace(" days", "d")
					.replace(" day", "d")
					.replace(" hours", "h")
					.replace(" hour", "h")
					.replace(" ago", "")}
			</Text>
		</View>
	);
};

export default ActivityItem;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 8,
	},
	rowGap: {
		flexDirection: "row",
		alignItems: "flex-start",
		gap: 16,
	},
	textContainer: {
		flexDirection: "column",
		gap: 4,
	},
	rowCenter: {
		flexDirection: "row",
		gap: 4,
		alignItems: "center",
		flexWrap: "wrap",
	},
	stars: {
		marginVertical: 8,
		marginLeft: 2,
		flexDirection: "row",
		gap: 2,
	},
	title: {
		color: "white",
		fontWeight: "bold",
		fontSize: 16,
	},
	reviewTitle: {
		color: "white",
		fontWeight: "bold",
		fontSize: 18,
	},
	watchlistText: {
		fontSize: 16,
	},
	subtitleYear: {
		fontSize: 12,
	},
	reviewThoughts: {
		fontSize: 16,
	},
	timestamp: {
		color: "#556677",
	},
	messageText: {
		fontSize: 16,
	},
	oneLine: {
		flexShrink: 1,
		flexWrap: "nowrap",
	},
});
