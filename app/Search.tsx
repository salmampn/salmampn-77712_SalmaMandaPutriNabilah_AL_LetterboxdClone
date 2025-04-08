import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import RootStyles from "../Style";

const SearchPage = () => {
	return (
		<ScrollView style={RootStyles.container}>
			<Text style={[styles.text, { fontSize: 13 }]}>BROWSE BY</Text>
			<Text style={styles.text}>Release date</Text>
			<Text style={styles.text}>Genre, country or language</Text>
			<Text style={styles.text}>Service</Text>
			<Text style={styles.text}>Most popular</Text>
			<Text style={styles.text}>Highest rated</Text>
			<Text style={styles.text}>Most anticipated</Text>
			<Text style={styles.text}>Opening soon</Text>
			<View
				style={{
					height: 0.2,
					opacity: 0.7,
					backgroundColor: "#99AABB",
					marginVertical: 16,
				}}
			/>
			<Text style={[styles.text, { fontSize: 13 }]}>LETTERBOXD.COM</Text>
			<Text style={styles.text}>Journal</Text>
			<Text style={styles.text}>Podcast</Text>
			<Text style={styles.text}>Showdown</Text>
			<Text style={styles.text}>Year in Review</Text>
			<Text style={styles.text}>About</Text>
			<Text style={styles.text}>Social</Text>
			<Text style={styles.text}>Gift Guide</Text>
			<Text style={styles.text}>Merch</Text>
			<Text style={styles.text}>Contact</Text>
		</ScrollView>
	);
};
export default SearchPage;

const styles = StyleSheet.create({
	text: {
		color: "#99AABB",
		marginVertical: 10,
		fontSize: 16,
	},
});
