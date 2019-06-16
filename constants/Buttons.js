import { StyleSheet, Dimensions } from "react-native";
import Colors from "./Colors";

export const buttonStyles = StyleSheet.create({
	androidBtn: {
		alignSelf: "center",
		width: Dimensions.get("window").width * 0.8,
		marginTop: 20,
		padding: 10,
		borderWidth: 0,
		borderRadius: 5,
		shadowColor: Colors.secondary,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 1,
		shadowRadius: 3,
		elevation: 5
	},
	iosBtn: {
		alignSelf: "center",
		width: Dimensions.get("window").width * 0.8,
		marginTop: 20,
		borderWidth: 0,
		borderRadius: 5,
		padding: 5
	}
});