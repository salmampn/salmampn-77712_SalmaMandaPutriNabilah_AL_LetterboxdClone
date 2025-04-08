import { View, StyleSheet, Text, ScrollView } from "react-native";
import MovieCard from "../MovieCard";
import Icon from "react-native-vector-icons/FontAwesome";
import { RefreshCw, Text as LucideText } from "lucide-react-native";
import Avatar from "../Avatar";
import RootStyles from "../../../Style";
import renderStars from "../RenderStars";

const MovieFriendScroll = ({ friends }) => {
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={styles.scrollContainer}
		>
			{friends.map((friend, index) => (
				<View
					key={index}
					style={styles.cardWrapper}
				>
					<MovieCard
						imageSource={require("../../../assets/movie/lalaland.jpg")}
					/>
					<View style={styles.footer}>
						<Avatar
							width={30}
							height={30}
						/>
						<View style={styles.info}>
							<Text style={RootStyles.text}>{friend.name}</Text>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									gap: 4,
									marginTop: 2,
								}}
							>
								<View style={styles.stars}>{renderStars(friend.rating)}</View>
								{friend.likes && (
									<Icon
										name='heart'
										color='#F27405'
										size={10}
									/>
								)}
								{friend.rewatch && (
									<RefreshCw
										color='gray'
										size={10}
									/>
								)}
								{friend.review && (
									<LucideText
										color='white'
										size={10}
									/>
								)}
							</View>
						</View>
					</View>
				</View>
			))}
		</ScrollView>
	);
};

export default MovieFriendScroll;

const styles = StyleSheet.create({
	scrollContainer: {
		flexDirection: "row",
	},
	cardWrapper: {
		marginRight: 0,
	},
	footer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 6,
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
