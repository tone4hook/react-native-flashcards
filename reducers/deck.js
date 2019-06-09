import { RETRIEVE_DECK } from "../actions/actionTypes";

export default function decks(state = {}, action) {
	switch (action.type) {
		case RETRIEVE_DECK:
			return {
				...action.deck
			};

		default:
			return state;
	}
}
