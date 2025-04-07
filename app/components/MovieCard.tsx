import { View, Image, StyleSheet } from "react-native";

const MovieCard = ({ imageSource }) => {
	return (
		<View style={styles.card}>
			<Image
				source={imageSource}
				style={styles.poster}
				resizeMode='cover'
			/>
		</View>
	);
};

export default MovieCard;

const styles = StyleSheet.create({
	card: {
		width: 125,
		height: 185,
		margin: 2,
		borderColor: "#445566",
		borderWidth: 1,
		overflow: "hidden",
		backgroundColor: "#000",
		alignItems: "center",
		justifyContent: "center",
	},
	poster: {
		width: "100%",
		height: "100%",
	},
});
