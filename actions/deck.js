import { RETRIEVE_DECK } from "./actionTypes";

export function retrieveDeck(deck) {
	return {
		type: RETRIEVE_DECK,
		deck
	};
}
