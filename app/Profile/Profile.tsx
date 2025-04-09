import { StyleSheet, Text, View, ScrollView } from "react-native";
import RootStyles from "../../Style";
import Avatar from "../../components/Avatar";
import ProfileFavorites from "./components/ProfileFavorites";
import MyRecentActivity from "./components/MyRecentActivity";
import RatingGraph from "./components/RatingGraph";
import Statistics from "./components/Statistics";
import MyData from "../../data/MyData";

const Profile = () => {
	const user = MyData[0];

	return (
		<ScrollView
			style={RootStyles.container}
			contentContainerStyle={styles.scrollContainer}
			showsVerticalScrollIndicator
		>
			{/* Profile Header */}
			<View style={styles.centeredSection}>
				<Avatar
					imageSource={user.pic}
					width={90}
					height={90}
					borderRadius={60}
					style={{ marginBottom: 10 }}
				/>
				<Text style={RootStyles.text}>{user.bio}</Text>
				<View style={[RootStyles.divider, styles.sectionSpacing]} />
			</View>

			{/* Favorites */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>FAVORITES</Text>
				<ProfileFavorites />
			</View>
			<View style={[RootStyles.divider, styles.sectionSpacing]} />

			{/* Recent Activity */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>RECENT ACTIVITY</Text>
				<MyRecentActivity />
			</View>

			<Text style={styles.moreActivityText}>More activity</Text>
			<View style={[RootStyles.divider, styles.sectionSpacing]} />

			{/* Rating Graph */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>RATINGS</Text>
				<RatingGraph style={styles.graphSpacing} />
			</View>
			<View style={[RootStyles.divider, styles.largeSpacing]} />

			{/* Statistics */}
			<Statistics />
		</ScrollView>
	);
};

export default Profile;

const styles = StyleSheet.create({
	scrollContainer: {
		paddingTop: 16,
		paddingBottom: 128,
	},
	centeredSection: {
		alignItems: "center",
		gap: 16,
		marginBottom: 16,
	},
	section: {
		flexDirection: "column",
		gap: 16,
		paddingHorizontal: 8,
		marginBottom: 8,
	},
	sectionTitle: {
		...RootStyles.text,
		letterSpacing: 1,
		fontSize: 12,
		paddingRight: 16,
	},
	moreActivityText: {
		...RootStyles.text,
		letterSpacing: 1,
		fontSize: 16,
		marginVertical: 8,
		paddingHorizontal: 8,
	},
	sectionSpacing: {
		marginVertical: 16,
	},
	largeSpacing: {
		marginVertical: 24,
	},
	graphSpacing: {
		paddingHorizontal: 16,
	},
});
