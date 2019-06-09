import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, Platform } from "react-native";
import SubmitButton from "../components/SubmitButton";
import { clearLocalNotification } from "../utils/helpers";
import Colors from "../constants/Colors";
import { utils } from "../constants/Utilities";
import { typographyStyle } from "../constants/Typography";
import { buttonStyles } from "../constants/Buttons";

class Quiz extends Component {
    state = {
        count: 0,
        total: 0,
        correct: 0,
        incorrect: 0,
        result: "",
        viewAnswer: false
    };
    componentDidMount() {
        const { deck, decks } = this.props;
        this.setState({ total: decks[deck.title].questions.length });
    }
    handleFlipCard() {
        const { viewAnswer } = this.state;
        viewAnswer
            ? this.setState({ viewAnswer: false })
            : this.setState({ viewAnswer: true });
    }
    handleCorrect() {
        let { count, correct } = this.state;
        this.setState({
            count: ++count,
            correct: ++correct
        });
    }
    handleIncorrect() {
        let { count, incorrect } = this.state;
        this.setState({
            count: ++count,
            incorrect: ++incorrect
        });
    }
    handleReset() {
        this.setState({
            count: 0,
            correct: 0,
            incorrect: 0,
            result: "",
            viewAnswer: false
        });
    }
    handleGoBack() {
        this.props.navigation.goBack();
    }
    render() {
        const { deck, decks } = this.props;
        const { count, total, correct, incorrect, viewAnswer } = this.state;
        const questions = decks[deck.title].questions;
        const buttonText = viewAnswer ? "View Question" : "View Answer";

        if (total === 0) {
            return (
                <View style={styles.container}>
                    <View style={styles.centerItemsContainer}>
                        <Text
                            style={[
                                styles.textCenter,
                                typographyStyle.paperFontHeadline
                            ]}
                        >
                            No cards in this deck.
                        </Text>
                    </View>
                </View>
            );
        } else if (count >= total) {
            clearLocalNotification(); // clear notification on complete
            return (
                <View style={styles.container}>
                    <View style={styles.centerItemsContainer}>
                        <Text
                            style={[
                                styles.textCenter,
                                typographyStyle.paperFontDisplay1,
                                { color: Colors.secondary }
                            ]}
                        >
                            Score: {Math.floor((correct / total) * 100)}%
                        </Text>
                        <Text
                            style={[
                                styles.textCenter,
                                typographyStyle.paperFontHeadline,
                                { color: Colors.info }
                            ]}
                        >
                            Correct: {correct}
                        </Text>
                        <Text
                            style={[
                                styles.textCenter,
                                typographyStyle.paperFontHeadline,
                                { color: Colors.danger }
                            ]}
                        >
                            Incorrect: {incorrect}
                        </Text>
                        <SubmitButton
                            onPress={this.handleReset.bind(this)}
                            buttonText={"Reset"}
                            style={{ marginBottom: 20 }}
                            textStyle={[
                                { color: Colors.primary },
                                typographyStyle.paperFontTitle,
                                utils.center
                            ]}
                        />
                        <SubmitButton
                            onPress={this.handleGoBack.bind(this)}
                            buttonText={"Back to Deck"}
                            textStyle={[
                                { color: Colors.primary },
                                typographyStyle.paperFontTitle,
                                utils.center
                            ]}
                        />
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Text
                        style={[
                            typographyStyle.paperFontHeadline,
                            { color: Colors.dark, padding: 15 }
                        ]}
                    >
                        {count + 1}/{total}
                    </Text>
                    <View style={styles.centerItemsContainer}>
                        {viewAnswer ? (
                            <Text
                                style={[
                                    styles.textCenter,
                                    typographyStyle.paperFontDisplay1,
                                    { color: Colors.secondary }
                                ]}
                            >
                                {questions[count].answer}
                            </Text>
                        ) : (
                            <Text
                                style={[
                                    styles.textCenter,
                                    typographyStyle.paperFontDisplay1,
                                    { color: Colors.secondary }
                                ]}
                            >
                                {questions[count].question}
                            </Text>
                        )}
                        {Platform.OS === "ios" ? (
                            <View>
                                <SubmitButton
                                    onPress={this.handleFlipCard.bind(this)}
                                    buttonText={buttonText}
                                    style={{ marginBottom: 20 }}
                                    textStyle={[
                                        { color: Colors.primary },
                                        typographyStyle.paperFontTitle,
                                        utils.center
                                    ]}
                                />
                                <SubmitButton
                                    onPress={this.handleCorrect.bind(this)}
                                    buttonText={"Correct"}
                                    style={[
                                        buttonStyles.iosBtn,
                                        { backgroundColor: Colors.info }
                                    ]}
                                    textStyle={[
                                        { color: Colors.light },
                                        typographyStyle.paperFontTitle,
                                        utils.center
                                    ]}
                                />
                                <SubmitButton
                                    onPress={this.handleIncorrect.bind(this)}
                                    buttonText={"Incorrect"}
                                    style={[
                                        buttonStyles.iosBtn,
                                        { backgroundColor: Colors.danger }
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
                                <SubmitButton
                                    onPress={this.handleFlipCard.bind(this)}
                                    buttonText={buttonText}
                                    style={{ marginBottom: 20 }}
                                    textStyle={[
                                        { color: Colors.primary },
                                        typographyStyle.paperFontTitle,
                                        utils.center
                                    ]}
                                />
                                <SubmitButton
                                    onPress={this.handleCorrect.bind(this)}
                                    buttonText={"Correct"}
                                    style={[
                                        buttonStyles.androidBtn,
                                        { backgroundColor: Colors.info }
                                    ]}
                                    textStyle={[
                                        { color: Colors.light },
                                        typographyStyle.paperFontTitle,
                                        utils.center
                                    ]}
                                />
                                <SubmitButton
                                    onPress={this.handleIncorrect.bind(this)}
                                    buttonText={"Incorrect"}
                                    style={[
                                        buttonStyles.androidBtn,
                                        { backgroundColor: Colors.danger }
                                    ]}
                                    textStyle={[
                                        { color: Colors.light },
                                        typographyStyle.paperFontTitle,
                                        utils.center
                                    ]}
                                />
                            </View>
                        )}
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light
    },
    centerItemsContainer: {
        flex: 1,
        justifyContent: "space-evenly"
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

function mapStateToProps({ decks, deck }) {
    return {
        deck,
        decks
    };
}

export default connect(mapStateToProps)(Quiz);
