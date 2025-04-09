import { StyleSheet, Text, View } from "react-native";
import RootStyles from "../../../Style";

const Incoming = () => {
	return (
		<View
			style={[
				RootStyles.container,
				{ justifyContent: "center", alignItems: "center" },
			]}
		>
			<View style={styles.emptyContainer}>
				<Text style={[RootStyles.text, styles.sizeText]}>No results.</Text>
				<Text style={[RootStyles.text, styles.sizeText]}>
					He speaks a dozen languages, knows every local custom. He'll blend in,
					disappear, you'll never see him again
				</Text>
			</View>
		</View>
	);
};
export default Incoming;

const styles = StyleSheet.create({
	emptyContainer: {
		justifyContent: "center",
		alignItems: "center",
		padding: 64,
	},
	sizeText: {
		fontSize: 18,
		alignItems: "center",
		textAlign: "center",
	},
});
