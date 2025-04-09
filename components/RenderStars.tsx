import { Star, StarHalf } from "lucide-react-native";

const renderStars = (rating, { color = "limegreen" }) => {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;
	const stars = [];

	for (let i = 0; i < fullStars; i++) {
		stars.push(
			<Star
				key={`full-${i}`}
				color={`${color}`}
				fill={`${color}`}
				size={8}
			/>
		);
	}

	if (hasHalfStar) {
		stars.push(
			<StarHalf
				key='half'
				color={`${color}`}
				fill={`${color}`}
				size={8}
			/>
		);
	}
	return stars;
};

export default renderStars;
