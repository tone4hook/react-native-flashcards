import {
	RECEIVE_DECKS,
	ADD_DECK,
	DELETE_DECK,
	ADD_CARD
} from "../actions/actionTypes";

export default function decks(state = {}, action) {
	switch (action.type) {
		case RECEIVE_DECKS:
			return {
				...state,
				...action.decks
			};
		case ADD_DECK:
			return {
				...state,
				...action.deck
			};
		case DELETE_DECK:
			delete state[action.key];
			return {
				...state
			};
		case ADD_CARD:
			return {
				...state,
				[action.key]: {
					title: action.key,
					questions: state[action.key].questions.concat(
						action.question
					)
				}
			};
		default:
			return state;
	}
}
