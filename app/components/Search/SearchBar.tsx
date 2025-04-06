import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { X } from "lucide-react-native";
const SearchBar = () => {
	const [text, setText] = useState("");

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder='Search...'
				placeholderTextColor='#aaa'
				value={text}
				onChangeText={setText}
			/>
			{text.length > 0 && (
				<TouchableOpacity
					onPress={() => setText("")}
					style={styles.clearButton}
				>
					<X
						color='#ffffff'
						size={20}
					/>
				</TouchableOpacity>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 8,
		paddingHorizontal: 12,
		height: "100%",
		width: "100%",
		alignSelf: "center",
	},
	input: {
		flex: 1,
		color: "#fff",
	},
	clearButton: {
		paddingLeft: 8,
	},
});

export default SearchBar;
