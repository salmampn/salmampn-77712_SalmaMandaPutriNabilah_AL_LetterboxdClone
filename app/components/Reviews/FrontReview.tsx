import { StyleSheet, Text, View, Image } from "react-native";
import MovieCard from "../MovieCard";
import Icon from "react-native-vector-icons/FontAwesome";
import { RefreshCw } from "lucide-react-native";
import RootStyles from "../../../Style";
import Avatar from "../Avatar";
import renderStars from "../RenderStars";

const FrontReview = ({ title, name, year, review, stars, likes, rewatch }) => {
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
				<View
					style={{
						flexDirection: "row",
						alignItems: "baseline",
						gap: 4,
					}}
				>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.year}>{year}</Text>
				</View>
				<View style={styles.account}>
					<View style={styles.info}>
						<Text style={styles.name}>{name}</Text>
					</View>
					<Avatar
						width={35}
						height={35}
						style={{ marginRight: 16 }}
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
					marginBottom: 16,
					alignItems: "flex-start",
				}}
			>
				<MovieCard
					imageSource={require("../../../assets/movie/lalaland.jpg")}
					width={92}
					height={127}
				/>
				<View style={{ flex: 1, paddingRight: 16 }}>
					<Text style={{ color: "lightgray" }}>{review}</Text>
				</View>
			</View>
			<View style={RootStyles.divider} />
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
