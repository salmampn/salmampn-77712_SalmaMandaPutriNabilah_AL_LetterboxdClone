import { StyleSheet, Text, View } from "react-native";
import RootStyles from "../../../Style";

const Statistics = () => {
	return (
		<View style={{ flexDirection: "column", marginRight: 16, gap: 16 }}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Text style={styles.text}>Films</Text>
				<Text style={styles.text}>616 / 21 this year</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Text style={styles.text}>Diary</Text>
				<Text style={styles.text}>99 / 21 this year</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Text style={styles.text}>Reviews</Text>
				<Text style={styles.text}>3</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Text style={styles.text}>Lists</Text>
				<Text style={styles.text}>0</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Text style={styles.text}>Watchlist</Text>
				<Text style={styles.text}>27</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Text style={styles.text}>Likes</Text>
				<Text style={styles.text}>70</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Text style={styles.text}>Tags</Text>
				<Text style={styles.text}>0</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Text style={styles.text}>Following</Text>
				<Text style={styles.text}>6</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Text style={styles.text}>Followers</Text>
				<Text style={styles.text}>4</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Text style={styles.text}>Stats</Text>
				<Text
					style={{
						backgroundColor: "#F27405",
						color: "white",
						paddingVertical: 2,
						paddingHorizontal: 4,
						borderRadius: 4,
						fontSize: 12,
					}}
				>
					PRO
				</Text>
			</View>
		</View>
	);
};
export default Statistics;

const styles = StyleSheet.create({
	text: {
		color: "#99AABB",
		fontSize: 16,
	},
});
