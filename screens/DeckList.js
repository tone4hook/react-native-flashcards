import React, { Component } from "react";
import { connect } from "react-redux";
import {
	ActivityIndicator,
	View,
	FlatList,
	TouchableOpacity,
	Platform,
	StyleSheet
} from "react-native";
import { handleInitialData, handleGetDeck } from "../actions/shared";
import DeckItem from "./DeckItem";
import Colors from "../constants/Colors";
import { listStyles } from "../constants/ListGroup";

class DeckList extends Component {
	componentDidMount() {
		const { getInitialData } = this.props;
		getInitialData();
	}
	render() {
		const { decks, isLoading, getDeck } = this.props;
		if (isLoading) {
			return (
				<View
					style={[
						styles.container,
						{ alignItems: "center", padding: 50 }
					]}
				>
					<ActivityIndicator size="large" color={Colors.warning} />
				</View>
			);
		} else {
			const deckKeys = Object.keys(decks);
			const deckItems = deckKeys.map(item => {
				return {
					key: item
				};
			});
			return (
				<FlatList
					style={{ backgroundColor: Colors.light }}
					data={deckItems}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={
								Platform.OS === "ios"
									? listStyles.border
									: listStyles.box
							}
							onPress={() => {
								getDeck(item.key);
								this.props.navigation.navigate("Deck");
							}}
						>
							<DeckItem deckKey={item.key} />
						</TouchableOpacity>
					)}
				/>
			);
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.light
	}
});

function mapDispatchToProps(dispatch) {
	return {
		getInitialData: () => {
			dispatch(handleInitialData());
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
)(DeckList);
