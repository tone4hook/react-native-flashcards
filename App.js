import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading } from "expo";
import * as Icon from "@expo/vector-icons";
import * as Font from "expo-font";
import AppNavigator from "./navigation/AppNavigator";
import reducer from "./reducers";
import middleware from "./middleware";
import { setLocalNotification } from "./utils/helpers";
import Colors from "./constants/Colors";

const store = createStore(reducer, middleware);

export default class App extends React.Component {
    state = {
        isLoadingComplete: false
    };

    componentDidMount() {
        setLocalNotification();
    }

    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        } else {
            return (
                <Provider store={store}>
                    <View style={styles.container}>
                        {Platform.OS === "ios" && (
                            <StatusBar
                                backgroundColor={Colors.dark}
                                barStyle="light-content"
                            />
                        )}
                        <AppNavigator />
                    </View>
                </Provider>
            );
        }
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Font.loadAsync({
                // This is the font that we are using for our tab bar
                ...Icon.Ionicons.font
            })
        ]);
    };

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    }
});
