import Icon from "react-native-vector-icons/FontAwesome";

const renderStars = (rating) => {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;
	const stars = [];

	for (let i = 0; i < fullStars; i++) {
		stars.push(
			<Icon
				key={`full-${i}`}
				name='star'
				color='white'
				size={8}
			/>
		);
	}

	if (hasHalfStar) {
		stars.push(
			<Icon
				key='half'
				name='star-half'
				color='white'
				size={8}
			/>
		);
	}
	return stars;
};

export default renderStars;
