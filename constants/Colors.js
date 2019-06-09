import { StyleSheet } from "react-native";
import { color } from "react-native-material-design-styles";

const colorStyle = StyleSheet.create(color);
const primary = color.paperCyan900.color;
const info = color.paperCyan500.color;
const success = color.paperDeepPurple500.color;
const secondary = color.paperGrey500.color;
const warning = color.paperAmber700.color;
const danger = color.paperGrey900.color;
const white = "#fff";
const light = color.paperGrey50.color;
const dark = color.paperGrey900.color;
const mild = color.paperGrey300.color;

export default {
	primary,
	info,
	success,
	secondary,
	warning,
	danger,
	white,
	light,
	dark,
	mild,
	tabIconDefault: mild,
	tabIconSelected: primary,
	darkerSecondary: color.paperGrey700.color,
	grey: color.paperGrey800.color
};
