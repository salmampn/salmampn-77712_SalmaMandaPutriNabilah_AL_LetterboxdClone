import { StyleSheet } from "react-native";

const RootStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#14181c",
		paddingTop: 16,
	},
	headText: {
		color: "white",
		fontWeight: "bold",
		fontSize: 20,
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
	},
	text: {
		color: "#99AABB",
	},
});

export default RootStyles;
