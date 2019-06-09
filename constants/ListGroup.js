import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const listStyles = StyleSheet.create({
	box: {
		borderWidth: 3,
		borderRadius: 2,
		borderColor: Colors.mild,
		borderTopWidth: 0,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		shadowColor: Colors.secondary,
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 1,
		shadowRadius: 2,
		elevation: 3,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	},
	border: {
		borderWidth: 2,
		borderRadius: 2,
		borderColor: Colors.mild,
		borderTopWidth: 0,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	}
});