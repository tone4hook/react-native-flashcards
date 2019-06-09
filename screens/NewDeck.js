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
import { handleAddDeck, handleGetDeck } from "../actions/shared";
import SubmitButton from "../components/SubmitButton";
import UserInput from "../components/UserInput";
import Colors from "../constants/Colors";
import { utils } from "../constants/Utilities";
import { inputStyles } from "../constants/Forms";
import { buttonStyles } from "../constants/Buttons";
import { typographyStyle } from "../constants/Typography";

class NewDeck extends Component {
    state = {
        text: ""
    };

    handleOnChange(text) {
        this.setState({ text });
    }

    handleSubmit() {
        const { text } = this.state;
        if (text === "") {
            Alert.alert("Empty Title", "Please enter a title.", [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]);
        } else {
            const { addDeck, getDeck } = this.props;
            const { goBack } = this.props.navigation;
            addDeck(this.state.text);
            this.setState({ text: "" });
            getDeck(text);
            this.props.navigation.navigate("Deck");
        }
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
                enabled
            >
                <Text style={{}}>Add New Deck</Text>
                {Platform.OS === "ios" ? (
                    <View>
                        <UserInput
                            placeholder={"Enter the deck title here..."}
                            onChange={this.handleOnChange.bind(this)}
                            value={this.state.text}
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
                            placeholder={"Enter the deck title here..."}
                            onChange={this.handleOnChange.bind(this)}
                            value={this.state.text}
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
        backgroundColor: Colors.light,
        justifyContent: "center"
    }
});

function mapDispatchToProps(dispatch) {
    return {
        addDeck: key => {
            dispatch(handleAddDeck(key));
        },
        getDeck: key => {
            dispatch(handleGetDeck(key));
        }
    };
}

function mapStateToProps({ decks }) {
    return {
        decks,
        isLoading:
            Object.keys(decks).length === 0 && decks.constructor === Object
                ? true
                : false
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewDeck);
