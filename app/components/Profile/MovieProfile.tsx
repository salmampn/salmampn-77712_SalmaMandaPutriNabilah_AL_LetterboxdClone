import { View } from "react-native";
import MovieCard from "../MovieCard";

const MovieProfile = () => {
	return (
		<View style={{ flexDirection: "row" }}>
			<MovieCard
				imageSource={require("../../../assets/movie/lalaland.jpg")}
				width={123}
				height={170}
			/>
			<MovieCard
				imageSource={require("../../../assets/movie/lalaland.jpg")}
				width={123}
				height={170}
			/>
			<MovieCard
				imageSource={require("../../../assets/movie/lalaland.jpg")}
				width={123}
				height={170}
			/>
			<MovieCard
				imageSource={require("../../../assets/movie/lalaland.jpg")}
				width={123}
				height={170}
			/>
		</View>
	);
};
export default MovieProfile;
