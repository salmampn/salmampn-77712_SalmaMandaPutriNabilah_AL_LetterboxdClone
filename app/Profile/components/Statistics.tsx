import { StyleSheet, Text, View } from "react-native";

const StatRow = ({ label, value, isPro }) => (
	<View style={styles.row}>
		<Text style={styles.text}>{label}</Text>
		{isPro ? (
			<Text style={styles.proBadge}>PRO</Text>
		) : (
			<Text style={styles.text}>{value}</Text>
		)}
	</View>
);

const Statistics = () => {
	return (
		<View style={styles.container}>
			<StatRow
				label='Films'
				value='616 / 21 this year'
				isPro={false}
			/>
			<StatRow
				label='Diary'
				value='99 / 21 this year'
				isPro={false}
			/>
			<StatRow
				label='Reviews'
				value='3'
				isPro={false}
			/>
			<StatRow
				label='Lists'
				value='0'
				isPro={false}
			/>
			<StatRow
				label='Watchlist'
				value='27'
				isPro={false}
			/>
			<StatRow
				label='Likes'
				value='70'
				isPro={false}
			/>
			<StatRow
				label='Tags'
				value='0'
				isPro={false}
			/>
			<StatRow
				label='Following'
				value='6'
				isPro={false}
			/>
			<StatRow
				label='Followers'
				value='4'
				isPro={false}
			/>
			<StatRow
				label='Stats'
				value
				isPro
			/>
		</View>
	);
};

export default Statistics;

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		gap: 16,
		paddingHorizontal: 16,
		paddingTop: 16,
		paddingBottom: 8,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	text: {
		color: "#99AABB",
		fontSize: 16,
	},
	proBadge: {
		backgroundColor: "#F27405",
		color: "white",
		paddingVertical: 2,
		paddingHorizontal: 6,
		borderRadius: 4,
		fontSize: 12,
		overflow: "hidden",
	},
});
