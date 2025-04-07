import { View, Image, StyleSheet } from "react-native";

const MovieCard = ({ imageSource, width = 125, height = 185 }) => {
	return (
		<View style={[styles.card, { width, height }]}>
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
