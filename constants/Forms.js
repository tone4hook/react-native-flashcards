import { StyleSheet, Dimensions } from "react-native";
import Colors from "./Colors";

export const inputStyles = StyleSheet.create({
	iosInput: {
		alignSelf: "center",
		width: Dimensions.get("window").width * 0.8,
		height: 60,
		margin: 20,
		borderColor: Colors.secondary,
		borderWidth: 1,
		fontSize: 16,
		textAlign: "center"
	},
	androidInput: {
		alignSelf: "center",
		width: Dimensions.get("window").width * 0.8,
		height: 60,
		margin: 20,
		fontSize: 16,
		textAlign: "center"
	}
});