import { Text, ScrollView, StyleSheet } from "react-native";
import FrontReview from "./components/Reviews/FrontReview";
import RootStyles from "../Style";

const Reviews = () => {
	return (
		<ScrollView
			style={RootStyles.container}
			contentContainerStyle={{
				paddingBottom: 10,
			}}
		>
			<Text style={styles.headText}>New from friends</Text>
			<FrontReview
				title='La La Land'
				year='2016'
				name='Alex'
				review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				stars={0}
				likes={false}
				rewatch={false}
			/>
			<Text style={styles.headText}>Popular with friends</Text>
			<FrontReview
				title='La La Land'
				year='2016'
				name='Alex'
				review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				stars={5}
				likes={true}
				rewatch={true}
			/>
			<Text style={styles.headText}>Popular this week</Text>
			<FrontReview
				title='La La Land'
				year='2016'
				name='Alex'
				review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				stars={4.5}
				likes={true}
				rewatch={false}
			/>
		</ScrollView>
	);
};
export default Reviews;

const styles = StyleSheet.create({
	headText: {
		color: "white",
		fontWeight: "bold",
		marginVertical: 14,
		fontSize: 18,
	},
});
