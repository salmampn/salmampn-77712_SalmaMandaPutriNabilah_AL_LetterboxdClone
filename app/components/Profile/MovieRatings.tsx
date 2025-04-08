import { View, StyleSheet, ScrollView } from "react-native";
import MovieCard from "../MovieCard";
import Icon from "react-native-vector-icons/FontAwesome";
import { RefreshCw, Text as LucideText } from "lucide-react-native";
import renderStars from "../RenderStars";

const MovieRatings = ({ stars, likes, rewatch, review }) => {
	return (
		<View>
			<View>
				<MovieCard
					imageSource={require("../../../assets/movie/lalaland.jpg")}
					width={123}
					height={170}
				/>
				<View style={styles.footer}>
					<View style={styles.info}>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								gap: 4,
							}}
						>
							<View style={styles.stars}>{renderStars(stars)}</View>
							{likes && (
								<Icon
									name='heart'
									color='#F27405'
									size={10}
								/>
							)}
							{rewatch && (
								<RefreshCw
									color='gray'
									size={10}
								/>
							)}
							{review && (
								<LucideText
									color='white'
									size={10}
								/>
							)}
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default MovieRatings;

const styles = StyleSheet.create({
	footer: {
		flexDirection: "row",
		marginTop: 4,
	},
	info: {
		marginLeft: 2,
	},
	stars: {
		flexDirection: "row",
		alignItems: "center",
		gap: 2,
	},
});
