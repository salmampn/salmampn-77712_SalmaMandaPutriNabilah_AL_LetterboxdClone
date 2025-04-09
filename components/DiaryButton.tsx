import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DiaryButton = ({}) => {
	return (
		<TouchableOpacity style={styles.button}>
			<Ionicons
				name='add'
				size={32}
				color='white'
			/>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		position: "absolute",
		right: 20,
		bottom: 20,
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: "#4CAF50",
		alignItems: "center",
		justifyContent: "center",
		elevation: 5,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 3.84,
	},
});

export default DiaryButton;
