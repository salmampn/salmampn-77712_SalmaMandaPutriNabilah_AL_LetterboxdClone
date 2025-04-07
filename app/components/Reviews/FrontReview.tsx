import { StyleSheet, Text, View, Image } from "react-native";
import MovieCard from "../MovieCard";
import Icon from "react-native-vector-icons/FontAwesome";
import { RefreshCw } from "lucide-react-native";

const FrontReview = ({ title, name, year, review, stars, likes, rewatch }) => {
	const renderStars = (rating) => {
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;
		const stars = [];

		for (let i = 0; i < fullStars; i++) {
			stars.push(
				<Icon
					key={`full-${i}`}
					name='star'
					color='#00e054'
				/>
			);
		}

		if (hasHalfStar) {
			stars.push(
				<Icon
					key='half'
					name='star-half'
					color='#00e054'
				/>
			);
		}
		return stars;
	};

	return (
		<View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					gap: 8,
				}}
			>
				<View style={{ flexDirection: "row", alignItems: "baseline", gap: 4 }}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.year}>{year}</Text>
				</View>
				<View style={styles.account}>
					<View style={styles.info}>
						<Text style={styles.name}>{name}</Text>
					</View>
					<Image
						source={require("../../../assets/avatar.png")}
						style={styles.avatar}
					/>
				</View>
			</View>
			<View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
				<View style={styles.stars}>{renderStars(stars)}</View>
				{likes && (
					<Icon
						name='heart'
						color='#F27405'
					/>
				)}
				{rewatch && (
					<RefreshCw
						color='gray'
						size={10}
					/>
				)}
			</View>
			<View
				style={{
					flexDirection: "row",
					gap: 8,
					marginTop: 8,
					alignItems: "flex-start",
				}}
			>
				<MovieCard
					imageSource={require("../../../assets/movie/lalaland.jpg")}
					width={92}
					height={127}
				/>
				<View style={{ flex: 1, paddingRight: 8 }}>
					<Text style={{ color: "lightgray" }}>{review}</Text>
				</View>
			</View>
			<View
				style={{
					height: 1,
					backgroundColor: "gray",
					marginVertical: 16,
				}}
			/>
		</View>
	);
};
export default FrontReview;

const styles = StyleSheet.create({
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
	avatar: {
		width: 35,
		height: 35,
		borderRadius: 30,
		borderWidth: 1,
		borderColor: "#445566",
	},
	info: {
		marginLeft: 8,
		flexDirection: "column",
	},
	stars: {
		flexDirection: "row",
		alignItems: "center",
		gap: 2,
	},
});
