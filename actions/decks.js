import { RECEIVE_DECKS, ADD_DECK, DELETE_DECK, ADD_CARD } from "./actionTypes";

export function receiveDecks(decks) {
	return {
		type: RECEIVE_DECKS,
		decks
	};
}

export function addDeck(deck) {
	return {
		type: ADD_DECK,
		deck
	};
}

export function deleteDeck(key) {
	return {
		type: DELETE_DECK,
		key
	};
}

export function addCard(key, question) {
	return {
		type: ADD_CARD,
		key,
		question
	};
}
