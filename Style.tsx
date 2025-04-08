import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#14181c",
		paddingVertical: 16,
		paddingLeft: 16,
	},
	headText: {
		color: "white",
		fontWeight: "bold",
		marginVertical: 14,
		fontSize: 18,
	},
	avatarContainer: {
		alignItems: "center",
	},
	avatar: {
		borderRadius: 40,
	},
	divider: {
		width: "100%",
		height: 1,
		opacity: 0.4,
		backgroundColor: "gray",
		// marginVertical: 16,
	},
	text: {
		color: "#99AABB",
	},
});

export default styles;
