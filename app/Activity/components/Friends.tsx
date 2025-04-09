import { View } from "react-native";
import RootStyles from "../../../Style";
import ActivityItem from "./ActivityItem";
import activityData from "../../../data/activity";
import { FlatList } from "react-native";

const Friends = () => {
	const sortedActivityList = activityData
		.flatMap((user) =>
			user.activity.map((act) => ({
				user: user.profileKey,
				activity: act,
			}))
		)
		.sort((a, b) => new Date(b.activity.time) - new Date(a.activity.time));

	return (
		<View style={[RootStyles.container, { paddingBottom: 112 }]}>
			<FlatList
				data={sortedActivityList}
				keyExtractor={(item, index) =>
					`${item.user}-${item.activity.movieKey || index}`
				}
				renderItem={({ item }) => (
					<ActivityItem
						user={item.user}
						activity={item.activity}
					/>
				)}
				contentContainerStyle={{
					paddingHorizontal: 16,
				}}
			/>
		</View>
	);
};

export default Friends;
