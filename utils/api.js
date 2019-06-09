import { AsyncStorage } from "react-native";
import { STORAGE_KEY, setDummyData } from "./helpers";

export function getDecks() {
	return AsyncStorage.getItem(STORAGE_KEY)
		.then(results => {
			return results === null
				? setDummyData(results)
				: JSON.parse(results);
		})
		.catch(error => {
			console.log("AsyncStorage call error");
			alert(error.message);
		});
}

export function getDeck(key) {
	return AsyncStorage.getItem(STORAGE_KEY).then(results => {
		const data = JSON.parse(results);
		return data[key];
	});
}

export function saveDeckTitle(key) {
	return AsyncStorage.mergeItem(
		STORAGE_KEY,
		JSON.stringify({
			[key]: {
				title: key,
				questions: []
			}
		})
	);
}

export function removeDeck(key) {
	return AsyncStorage.getItem(STORAGE_KEY).then(results => {
		const data = JSON.parse(results);
		data[key] = undefined;
		delete data[key];
		AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
	});
}
export function addCardToDeck(key, question) {
	return AsyncStorage.getItem(STORAGE_KEY).then(results => {
		const data = JSON.parse(results);
		data[key].questions.push(question);
		AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
	});
}
