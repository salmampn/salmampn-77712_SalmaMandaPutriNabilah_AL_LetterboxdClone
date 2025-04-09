import React from "react";
import { View, FlatList, Image, StyleSheet, Dimensions } from "react-native";
import movies from "../data/movies";
import RootStyles from "../Style";

const numColumns = 4;
const posterWidth = Dimensions.get("window").width / numColumns - 3;

const Watchlist = () => {
	const renderItem = ({ item }) => (
		<View style={styles.card}>
			<Image
				source={item.src}
				style={styles.poster}
				resizeMode='cover'
			/>
		</View>
	);

	return (
		<View style={[RootStyles.container, { paddingTop: 0, paddingBottom: 100 }]}>
			<FlatList
				data={movies}
				renderItem={renderItem}
				keyExtractor={(item) => item.key}
				numColumns={numColumns}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.listContent}
			/>
		</View>
	);
};

export default Watchlist;

const styles = StyleSheet.create({
	listContent: {
		margin: 1,
	},
	card: {
		margin: 1,
		overflow: "hidden",
		backgroundColor: "#222",
	},
	poster: {
		width: posterWidth,
		height: posterWidth * 1.5,
	},
});
