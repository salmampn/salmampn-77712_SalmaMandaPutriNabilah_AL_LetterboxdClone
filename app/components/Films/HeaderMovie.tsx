import { View, Text } from "react-native";
import MovieScroll from "./MovieScroll";
import RootStyles from "../../../Style";

const HeaderMovie = ({ header }) => {
	return (
		<View style={{ paddingLeft: 16 }}>
			<Text style={RootStyles.headText}>{header}</Text>
			<MovieScroll />
		</View>
	);
};
export default HeaderMovie;
