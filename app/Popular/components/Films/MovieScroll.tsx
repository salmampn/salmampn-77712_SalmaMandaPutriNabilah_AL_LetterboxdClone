import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import MovieCard from "../../../../components/MovieCard";
import movies from "../../../../data/movies";

const MovieScroll = () => {
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ flexDirection: "row" }}
		>
			{movies.map((movie, index) => (
				<MovieCard
					key={index}
					imageSource={movie.src}
					movie={movie}
				/>
			))}
		</ScrollView>
	);
};

export default MovieScroll;
