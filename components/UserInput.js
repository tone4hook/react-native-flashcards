import React from "react";
import { View, TextInput } from "react-native";

export default function UserInput({
	children,
	onChange = () => {},
	placeholder = "",
	style = {},
	value = ""
}) {
	return (
		<View>
			<TextInput
				placeholder={placeholder}
				style={style}
				onChangeText={text => onChange(text)}
				value={value}
			/>
		</View>
	);
}
