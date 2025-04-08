import React from "react";
import { View, StyleSheet } from "react-native";
import { Star } from "lucide-react-native";

const barHeights = [4, 8, 10, 20, 40, 60, 35, 15, 30, 15];

const RatingGraph = () => {
	return (
		<View style={styles.container}>
			{/* Left Star */}
			<Star
				size={12}
				color='limegreen'
				fill='limegreen'
				style={styles.star}
			/>

			{/* Graph Bars */}
			<View style={styles.graph}>
				{barHeights.map((height, index) => (
					<View
						key={index}
						style={[styles.bar, { height: height }]}
					/>
				))}
			</View>

			{/* Right Stars */}
			<View style={styles.rightStars}>
				{Array.from({ length: 5 }).map((_, i) => (
					<Star
						key={i}
						size={12}
						color='limegreen'
						fill='limegreen'
						style={{ marginLeft: 2 }}
					/>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "flex-end",
	},
	star: {
		marginRight: 4,
	},
	graph: {
		flexDirection: "row",
		alignItems: "flex-end",
		flex: 1,
		height: 100,
	},
	bar: {
		flex: 1,
		marginHorizontal: 0.5,
		backgroundColor: "#3A4552",
	},
	rightStars: {
		flexDirection: "row",
		marginLeft: 4,
	},
});

export default RatingGraph;
