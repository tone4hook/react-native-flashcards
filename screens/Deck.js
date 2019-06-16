import React, { Component } from "react";
import { connect } from "react-redux";
import {
    ActivityIndicator,
    TouchableOpacity,
    View,
    Text,
    Platform,
    StyleSheet,
    Animated
} from "react-native";
import { handleRemoveDeck } from "../actions/shared";
import DeckItem from "./DeckItem";
import SubmitButton from "../components/SubmitButton";
import Colors from "../constants/Colors";
import { buttonStyles } from "../constants/Buttons";
import { typographyStyle } from "../constants/Typography";
import { utils } from "../constants/Utilities";

class Deck extends Component {
    state = {
        opacity: new Animated.Value(0)
    };
    componentDidMount() {
        const { opacity } = this.state;
        Animated.timing(opacity, { toValue: 1, duration: 1000 }).start();
    }
    handleDelete() {
        const { deck, deleteDeck } = this.props;
        this.props.navigation.navigate("Home");
        deleteDeck(deck.title);
    }
    render() {
        const { deck, isLoading } = this.props;
        const { opacity } = this.state;
        if (isLoading) {
            return <ActivityIndicator size="large" color={Colors.success} />;
        } else {
            return (
                <View style={[styles.container]}>
                    <DeckItem deckKey={deck.title} />
                    {Platform.OS === "ios" ? (
                        <View>
                            <SubmitButton
                                onPress={() =>
                                    this.props.navigation.navigate("NewCard")
                                }
                                buttonText={"Add Card"}
                                style={[
                                    buttonStyles.iosBtn,
                                    { backgroundColor: Colors.warning }
                                ]}
                                textStyle={[
                                    { color: Colors.light },
                                    typographyStyle.paperFontTitle,
                                    utils.center
                                ]}
                            />
                            <SubmitButton
                                onPress={() =>
                                    this.props.navigation.navigate("Quiz")
                                }
                                buttonText={"Start Quiz"}
                                style={[
                                    buttonStyles.iosBtn,
                                    { backgroundColor: Colors.success }
                                ]}
                                textStyle={[
                                    { color: Colors.light },
                                    typographyStyle.paperFontTitle,
                                    utils.center
                                ]}
                            />
                            <TouchableOpacity
                                onPress={this.handleDelete.bind(this)}
                                style={[
                                    styles.alignSelfCenter,
                                    { marginTop: 50 }
                                ]}
                            >
                                <Text
                                    style={[
                                        { padding: 10 },
                                        typographyStyle.paperFontTitle,
                                        { color: Colors.danger },
                                        utils.center
                                    ]}
                                >
                                    Delete Deck
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                            <View>
                                <SubmitButton
                                    onPress={() =>
                                        this.props.navigation.navigate("NewCard")
                                    }
                                    buttonText={"Add Card"}
                                    style={[
                                        buttonStyles.androidBtn,
                                        { backgroundColor: Colors.warning }
                                    ]}
                                    textStyle={[
                                        { color: Colors.light },
                                        typographyStyle.paperFontTitle,
                                        utils.center
                                    ]}
                                />
                                <SubmitButton
                                    onPress={() =>
                                        this.props.navigation.navigate("Quiz")
                                    }
                                    buttonText={"Start Quiz"}
                                    style={[
                                        buttonStyles.androidBtn,
                                        { backgroundColor: Colors.success }
                                    ]}
                                    textStyle={[
                                        { color: Colors.light },
                                        typographyStyle.paperFontTitle,
                                        utils.center
                                    ]}
                                />
                                <TouchableOpacity
                                    onPress={this.handleDelete.bind(this)}
                                    style={[
                                        styles.alignSelfCenter,
                                        { marginTop: 50 }
                                    ]}
                                >
                                    <Text
                                        style={[
                                            { padding: 10 },
                                            typographyStyle.paperFontTitle,
                                            { color: Colors.danger },
                                            utils.center
                                        ]}
                                    >
                                        Delete Deck
                                </Text>
                                </TouchableOpacity>
                            </View>
                        )}
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: Colors.light
    }
});

function mapDispatchToProps(dispatch) {
    return {
        deleteDeck: key => {
            dispatch(handleRemoveDeck(key));
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
)(Deck);
