import { Text, ScrollView, View } from "react-native";
import FrontReview from "./Reviews/FrontReview";
import RootStyles from "../../../Style";
import reviews from "../../../data/reviews";
import movies from "../../../data/movies";
import profiles from "../../../data/profiles";

const getReviewCounts = (reviews) => {
	const counts = {};
	reviews.forEach((review) => {
		if (!counts[review.movieKey]) counts[review.movieKey] = 0;
		counts[review.movieKey]++;
	});
	return counts;
};

const findMovie = (key) => movies.find((m) => m.key === key);
const findProfile = (key) => profiles.find((p) => p.key === key);

const Reviews = () => {
	const reviewCounts = getReviewCounts(reviews);

	const newFromFriends = reviews.filter((r) => r.friend && r.review);
	const popularWithFriends = reviews.filter((r) => r.comments);
	const popularThisWeek = reviews.filter((r) => reviewCounts[r.movieKey] > 1);

	const renderReviews = (data, type) => {
		return data.map((r, i) => {
			const movie = findMovie(r.movieKey);
			const profile = findProfile(r.profileKey);

			if (!movie || !profile) return null;

			return (
				<FrontReview
					key={`${type}-${i}`}
					title={movie.title}
					year={movie.year}
					name={profile.givenName}
					review={r.thoughts}
					stars={r.rating}
					likes={r.likes}
					rewatch={r.rewatch}
					imageSource={movie?.src}
					profilePic={profile.image}
					style={{}}
				/>
			);
		});
	};

	return (
		<ScrollView style={RootStyles.container}>
			{newFromFriends.length > 0 && (
				<>
					<Text style={[RootStyles.headText, { paddingHorizontal: 16 }]}>
						New from friends
					</Text>
					{renderReviews(newFromFriends, "friend")}
				</>
			)}

			{popularWithFriends.length > 0 && (
				<>
					<Text
						style={[
							RootStyles.headText,
							{ paddingHorizontal: 16, marginTop: 16 },
						]}
					>
						Popular with friends
					</Text>
					{renderReviews(popularWithFriends, "comment")}
				</>
			)}

			{popularThisWeek.length > 0 && (
				<>
					<Text
						style={[
							RootStyles.headText,
							{ paddingHorizontal: 16, marginTop: 16 },
						]}
					>
						Popular this week
					</Text>
					{renderReviews(popularThisWeek, "week")}
				</>
			)}
		</ScrollView>
	);
};

export default Reviews;
