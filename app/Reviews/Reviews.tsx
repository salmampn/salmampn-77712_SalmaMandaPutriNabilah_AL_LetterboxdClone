import { ScrollView, Text, View } from "react-native";
import RootStyles from "../../Style";
import activity from "../../data/activity";
import MyReview from "./components/MyReview";
import movies from "../../data/movies";

const Reviews = () => {
	const userActivity = activity.find((u) => u.key === "sal");
	const reviewsOnly = userActivity?.activity.filter((item) => item.review);

	return (
		<ScrollView
			style={RootStyles.container}
			contentContainerStyle={{ paddingBottom: 100 }}
			showsVerticalScrollIndicator={true}
		>
			{reviewsOnly?.map((review, idx) => {
				const movie = movies.find((m) => m.key === review.movieKey);

				return (
					<MyReview
						key={idx}
						title={movie?.title}
						year={movie?.year}
						imageSource={movie?.src}
						review={review.thoughts}
						stars={review.stars}
						likes={review.likes}
						rewatch={review.rewatch}
						style={{}}
					/>
				);
			})}
		</ScrollView>
	);
};

export default Reviews;
