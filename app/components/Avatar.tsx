import { View, Image } from "react-native";
import RootStyles from "../../Style";

const Avatar = ({
	width = 80,
	height = 80,
	borderRadius = 40,
	style,
	imageSource,
}) => {
	return (
		<View style={RootStyles.avatarContainer}>
			<Image
				source={imageSource}
				alt='Profile Photo'
				style={[RootStyles.avatar, { width, height, borderRadius }, style]}
			/>
		</View>
	);
};

export default Avatar;
