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
			<Text style={RootStyles.headText}>New from friends</Text>
			<FrontReview
				title='La La Land'
				year='2016'
				name='Alex'
				review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitations ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				stars={0}
				likes={false}
				rewatch={false}
			/>
			<Text style={RootStyles.headText}>Popular with friends</Text>
			<FrontReview
				title='La La Land'
				year='2016'
				name='Alex'
				review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				stars={5}
				likes={true}
				rewatch={true}
			/>
			<Text style={RootStyles.headText}>Popular this week</Text>
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
