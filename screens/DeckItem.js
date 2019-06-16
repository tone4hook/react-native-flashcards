import React, { Component } from "react";
import { connect } from "react-redux";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { typographyStyle } from "../constants/Typography";
import { utils } from "../constants/Utilities";

class DeckItem extends Component {
    render() {
        const { decks, deckKey } = this.props;
        if (typeof decks[deckKey] === "undefined") {
            return <ActivityIndicator size="large" color={"#222"} />;
        } else {
            const cards = decks[deckKey].questions.length;
            const cardsText = cards === 1 ? `${cards} card` : `${cards} cards`;
            return (
                <View style={styles.container}>
                    <Text style={[
                        typographyStyle.paperFontDisplay3,
                        utils.center,
                        { color: Colors.darkerSecondary }
                    ]}
                    >
                        {deckKey}
                    </Text>
                    <Text style={[
                        typographyStyle.paperFontDisplay1,
                        utils.center,
                        { color: Colors.secondary }
                    ]}
                    >
                        {cardsText}
                    </Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: Colors.light,
        justifyContent: "center"
    }
});
function mapStateToProps({ decks }, { deckKey }) {
    return {
        decks,
        deckKey
    };
}

export default connect(mapStateToProps)(DeckItem);
