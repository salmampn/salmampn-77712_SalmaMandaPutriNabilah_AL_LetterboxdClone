import { StyleSheet, Text, View } from "react-native";
import RootStyles from "../Style";
import Avatar from "./components/Avatar";
import MovieProfile from "./components/Profile/MovieProfile";
import MovieRatings from "./components/Profile/MovieRatings";
import { ScrollView } from "react-native";
import RatingGraph from "./components/Profile/RatingGraph";
import Statistics from "./components/Profile/Statistics";

const Profile = () => {
	return (
		<>
			<ScrollView
				style={RootStyles.container}
				contentContainerStyle={{ paddingBottom: 140 }}
				showsVerticalScrollIndicator={false}
			>
				{/* Profile */}
				<View
					style={{
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "space-between",
						gap: 16,
						marginBottom: 16,
					}}
				>
					<Avatar
						width={90}
						height={90}
						borderRadius={60}
						style={{ marginBottom: 10 }}
					/>
					<Text style={RootStyles.text}>tiramisu cake.</Text>
					<View style={[RootStyles.divider, { marginTop: 16 }]} />
				</View>
				{/* Favorites */}
				<View
					style={{
						flexDirection: "column",
						gap: 16,
						marginRight: 16,
					}}
				>
					<Text
						style={[
							RootStyles.text,
							{ letterSpacing: 1, fontSize: 12, paddingRight: 16 },
						]}
					>
						FAVORITES
					</Text>
					<MovieProfile />
				</View>
				<View style={[RootStyles.divider, { marginTop: 16 }]} />
				{/* Recent Activity */}
				<View
					style={{
						flexDirection: "column",
						gap: 16,
						marginVertical: 16,
						marginRight: 16,
					}}
				>
					<Text
						style={[
							RootStyles.text,
							{ letterSpacing: 1, fontSize: 12, paddingRight: 16 },
						]}
					>
						RECENT ACTIVITY
					</Text>
					<View style={{ flexDirection: "row" }}>
						<MovieRatings
							likes={true}
							rewatch={true}
							review={true}
							stars={4}
						/>
					</View>
				</View>
				<Text
					style={[
						RootStyles.text,
						{ letterSpacing: 1, fontSize: 16, marginVertical: 8 },
					]}
				>
					More activity
				</Text>
				<View style={[RootStyles.divider, { marginVertical: 16 }]} />
				{/* Graph */}
				<View style={{ marginRight: 16 }}>
					<Text
						style={[
							RootStyles.text,
							{
								letterSpacing: 1,
								fontSize: 12,
								marginBottom: 16,
							},
						]}
					>
						RATINGS
					</Text>
					<RatingGraph />
				</View>
				<View style={[RootStyles.divider, { marginVertical: 24 }]} />
				{/* Statistics */}
				<View style={{ marginTop: 8 }}>
					<Statistics />
				</View>
			</ScrollView>
		</>
	);
};
export default Profile;
