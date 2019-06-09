import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function SubmitButton({
	children,
	onPress,
	buttonText,
	style = {},
	textStyle = {}
}) {
	return (
		<View>
			<TouchableOpacity onPress={onPress} style={style}>
				<Text style={textStyle}>{buttonText}</Text>
			</TouchableOpacity>
		</View>
	);
}
