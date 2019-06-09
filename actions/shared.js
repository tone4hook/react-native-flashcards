import { receiveDecks, addDeck, deleteDeck, addCard } from "./decks";
import { retrieveDeck } from "./deck";
import {
	getDecks,
	getDeck,
	saveDeckTitle,
	removeDeck,
	addCardToDeck
} from "../utils/api";

export function handleInitialData() {
	return dispatch => {
		return getDecks().then(data => {
			dispatch(receiveDecks(data));
		});
	};
}

export function handleGetDeck(key) {
	return dispatch => {
		return getDeck(key).then(data => {
			dispatch(retrieveDeck(data));
		});
	};
}

export function handleAddDeck(key) {
	return dispatch => {
		saveDeckTitle(key);
		dispatch(
			addDeck({
				[key]: {
					title: key,
					questions: []
				}
			})
		);
	};
}

export function handleRemoveDeck(key) {
	return dispatch => {
		removeDeck(key);
		dispatch(deleteDeck(key));
	};
}

export function handleAddCard(key, question) {
	return dispatch => {
		addCardToDeck(key, question);
		dispatch(addCard(key, question));
	};
}