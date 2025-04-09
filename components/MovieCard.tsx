import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MovieCard = ({ imageSource, width = 125, height = 185, movie }) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("MovieDetail", { movie })}
		>
			<View style={[styles.card, { width, height }]}>
				<Image
					source={imageSource}
					style={styles.poster}
					resizeMode='cover'
				/>
			</View>
		</TouchableOpacity>
	);
};

export default MovieCard;

const styles = StyleSheet.create({
	card: {
		marginHorizontal: 2,
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
