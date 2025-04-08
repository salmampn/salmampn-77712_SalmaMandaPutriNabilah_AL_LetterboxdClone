import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import RootStyles from "../Style";

const SearchPage = () => {
	const browseByOptions = [
		"Release date",
		"Genre, country or language",
		"Service",
		"Most popular",
		"Highest rated",
		"Most anticipated",
		"Opening soon",
	];

	const letterboxdOptions = [
		"Journal",
		"Podcast",
		"Showdown",
		"Year in Review",
		"About",
		"Social",
		"Gift Guide",
		"Merch",
		"Contact",
	];

	const renderSection = (title, options) => (
		<View style={styles.section}>
			<Text style={styles.sectionTitle}>{title}</Text>
			{options.map((item, index) => (
				<Text
					key={index}
					style={styles.itemText}
				>
					{item}
				</Text>
			))}
		</View>
	);

	return (
		<ScrollView
			style={[RootStyles.container]}
			contentContainerStyle={styles.scrollContainer}
			showsVerticalScrollIndicator
		>
			{renderSection("BROWSE BY", browseByOptions)}
			<View style={[RootStyles.divider, styles.divider]} />
			{renderSection("LETTERBOXD.COM", letterboxdOptions)}
		</ScrollView>
	);
};

export default SearchPage;

const styles = StyleSheet.create({
	scrollContainer: {
		paddingVertical: 16,
		paddingHorizontal: 16,
	},
	section: {
		marginBottom: 24,
	},
	sectionTitle: {
		color: "#99AABB",
		fontSize: 13,
		fontWeight: "500",
		marginBottom: 12,
	},
	itemText: {
		color: "#99AABB",
		fontSize: 16,
		marginVertical: 8,
		letterSpacing: 0.5,
		fontWeight: "300",
	},
	divider: {
		marginBottom: 24,
	},
});
