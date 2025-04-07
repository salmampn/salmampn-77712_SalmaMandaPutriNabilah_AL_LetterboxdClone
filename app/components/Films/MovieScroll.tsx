import React from "react";
import MovieCard from "../MovieCard";
import { ScrollView } from "react-native-gesture-handler";

const MovieScroll = () => {
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ flexDirection: "row" }}
		>
			<MovieCard imageSource={require("../../../assets/movie/lalaland.jpg")} />
			<MovieCard imageSource={require("../../../assets/movie/dune.jpg")} />
			<MovieCard imageSource={require("../../../assets/movie/knivesout.jpg")} />
			<MovieCard
				imageSource={require("../../../assets/movie/insideout2.jpg")}
			/>
			<MovieCard
				imageSource={require("../../../assets/movie/interstellar.jpg")}
			/>
			<MovieCard imageSource={require("../../../assets/movie/parasite.jpg")} />
			<MovieCard imageSource={require("../../../assets/movie/showman.jpg")} />
			<MovieCard imageSource={require("../../../assets/movie/up.jpg")} />
			<MovieCard imageSource={require("../../../assets/movie/us.jpg")} />
		</ScrollView>
	);
};

export default MovieScroll;
