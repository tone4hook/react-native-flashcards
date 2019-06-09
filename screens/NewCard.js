import React, { Component } from "react";
import { connect } from "react-redux";
import {
	Alert,
	View,
	Text,
	StyleSheet,
	Platform,
	KeyboardAvoidingView
} from "react-native";
import { handleAddCard } from "../actions/shared";
import UserInput from "../components/UserInput";
import SubmitButton from "../components/SubmitButton";
import Colors from "../constants/Colors";
import { utils } from "../constants/Utilities";
import { inputStyles } from "../constants/Forms";
import { buttonStyles } from "../constants/Buttons";
import { typographyStyle } from "../constants/Typography";

class NewCard extends Component {
	state = {
		question: "",
		answer: ""
	};

	handleOnChangeQuestion(question) {
		this.setState({ question });
	}

	handleOnChangeAnswer(answer) {
		this.setState({ answer });
	}

	handleSubmit() {
		const { question, answer } = this.state;
		console.log(question);
		console.log(answer);
		if (question === "" || answer === "") {
			Alert.alert("Empty Input", "Please enter a question and answer.", [
				{ text: "OK", onPress: () => console.log("OK Pressed") }
			]);
		} else {
			const { addCard, deck } = this.props;
			const { goBack } = this.props.navigation;
			addCard(deck.title, { question, answer });
			this.setState({ question: "", answer: "" });
			goBack();
		}
	}

	render() {
		return (
			<KeyboardAvoidingView
				style={styles.container}
				behavior="padding"
				enabled
			>
				<Text style={[styles.textCenter, styles.heading]}>
					Add New Card
				</Text>
				{Platform.OS === "ios" ? (
					<View>
						<UserInput
							placeholder={"Enter the question here..."}
							onChange={this.handleOnChangeQuestion.bind(this)}
							value={this.state.question}
							style={inputStyles.iosInput}
						/>
						<UserInput
							placeholder={"Enter the answer here..."}
							onChange={this.handleOnChangeAnswer.bind(this)}
							value={this.state.answer}
							style={inputStyles.iosInput}
						/>
						<SubmitButton
							onPress={this.handleSubmit.bind(this)}
							buttonText={"Submit"}
							style={[
								{ backgroundColor: Colors.info },
								buttonStyles.iosBtn
							]}
							textStyle={[
								{ color: Colors.light },
								typographyStyle.paperFontTitle,
								utils.center
							]}
						/>
					</View>
				) : (
					<View>
						<UserInput
							placeholder={"Enter the question here..."}
							onChange={this.handleOnChangeQuestion.bind(this)}
							value={this.state.question}
							style={inputStyles.androidInput}
						/>
						<UserInput
							placeholder={"Enter the answer here..."}
							onChange={this.handleOnChangeAnswer.bind(this)}
							value={this.state.answer}
							style={inputStyles.androidInput}
						/>
						<SubmitButton
							onPress={this.handleSubmit.bind(this)}
							buttonText={"Submit"}
							style={[
								{ backgroundColor: Colors.info },
								buttonStyles.androidBtn
							]}
							textStyle={[
								{ color: Colors.light },
								typographyStyle.paperFontTitle,
								utils.center
							]}
						/>
					</View>
				)}
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center"
	},
	textCenter: {
		textAlign: "center"
	},
	heading: {
		fontSize: 40
	},
	subheading: {
		fontSize: 30
	}
});

function mapDispatchToProps(dispatch) {
	return {
		addCard: (key, question) => {
			dispatch(handleAddCard(key, question));
		}
	};
}

function mapStateToProps({ deck }) {
	return {
		deck,
		isLoading:
			Object.keys(deck).length === 0 && deck.constructor === Object
				? true
				: false
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewCard);
