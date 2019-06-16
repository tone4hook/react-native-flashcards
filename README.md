# React Native Flash Cards

_A React Native flash card app that allows you to create flash cards and manage them in decks. Test yourself by taking quizzes on the decks you create._

Built using React Native, Redux, and Redux Thunk.
This project was bootstrapped with [Expo CLI](https://github.com/expo/expo-cli).

### EXPO SNACK

-   [Expo Snack]()

### Prerequisites

-   Node.js >= v10
-   [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli)

See the [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli) documentation on installation instructions.

## Getting Started

Download, clone, or fork the repo.
Using Terminal or Command Prompt navigate to the _react-native-flashcards_ directory.

-   _npm update --save_ to update all dependencies
-   _npm update --save-dev_ to update all devDependencies
-   _npm start_ to run **expo start** or **expo start -w** for web app
-   _npm test_ to run Jest tests

## Screen Shots

![alt text](https://github.com/tone4hook/react-native-flashcards/raw/master/screenshots/home.jpg "Home Screen")

![alt text](https://github.com/tone4hook/react-native-flashcards/raw/master/screenshots/deck.jpg "Deck Screen")

![alt text](https://github.com/tone4hook/react-native-flashcards/raw/master/screenshots/new-card.jpg "Add Card Screen")

![alt text](https://github.com/tone4hook/react-native-flashcards/raw/master/screenshots/quiz.jpg "Quiz Screen")

![alt text](https://github.com/tone4hook/react-native-flashcards/raw/master/screenshots/new-deck.jpg "Add New Deck Screen")

## About Example Data

_The data.js file (utils/data.js) contains dummy data to display example decks of flash cards._

_Edit api.js file (utils/api.js) to control initial data(decks) that go to storage._

```javascript
// utils/api.js
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
```

## Tested on iOS device and Android emulator

**This project can be used on an iOS or Android platform.**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
