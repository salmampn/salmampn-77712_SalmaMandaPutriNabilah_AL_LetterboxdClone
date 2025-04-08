import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import MovieCard from "../MovieCard";
import movies from "../../../data/movies";

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
				/>
			))}
		</ScrollView>
	);
};

export default MovieScroll;
