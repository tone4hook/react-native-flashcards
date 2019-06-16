import React from "react";
import { Platform } from "react-native";
import {
    createStackNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createSwitchNavigator
} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import Deck from "../screens/Deck";
import DeckList from "../screens/DeckList";
import NewCard from "../screens/NewCard";
import NewDeck from "../screens/NewDeck";
import Quiz from "../screens/Quiz";
import TabBarOptions from "../constants/TabBarOptions";
import Header from "../constants/Header";

const TopTabs = createMaterialTopTabNavigator(
    {
        DeckList: {
            screen: DeckList,
            navigationOptions: {
                tabBarLabel: "Decks",
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} name={"md-albums"} />
                )
            }
        },
        NewDeck: {
            screen: NewDeck,
            navigationOptions: {
                tabBarLabel: "Add Deck",
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} name={"md-add"} />
                )
            }
        }
    },
    {
        tabBarOptions: TabBarOptions.android
    }
);

const Tabs = createBottomTabNavigator(
    {
        DeckList: {
            screen: DeckList,
            navigationOptions: {
                tabBarLabel: "Decks",
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} name={"ios-albums"} />
                )
            }
        },
        NewDeck: {
            screen: NewDeck,
            navigationOptions: {
                tabBarLabel: "Add Deck",
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} name={"ios-add"} />
                )
            }
        }
    },
    {
        tabBarOptions: TabBarOptions.iOS
    }
);

const MainStack =
    Platform.OS !== "web"
        ? createStackNavigator({
              Home: {
                  screen: Platform.OS === "ios" ? Tabs : TopTabs,
                  navigationOptions: {
                      title: "My Decks",
                      headerTitleStyle: Header.headerTitleStyle,
                      headerTintColor: Header.headerTintColor,
                      headerStyle: Header.headerStyle
                  }
              },
              Deck: {
                  screen: Deck,
                  navigationOptions: {
                      title: "Deck",
                      headerTitleStyle: Header.headerTitleStyle,
                      headerTintColor: Header.headerTintColor,
                      headerStyle: Header.headerStyle
                  }
              },
              Quiz: {
                  screen: Quiz,
                  navigationOptions: {
                      title: "Quiz",
                      headerTitleStyle: Header.headerTitleStyle,
                      headerTintColor: Header.headerTintColor,
                      headerStyle: Header.headerStyle
                  }
              },
              NewCard: {
                  screen: NewCard,
                  navigationOptions: {
                      title: "Add Card",
                      headerTitleStyle: Header.headerTitleStyle,
                      headerTintColor: Header.headerTintColor,
                      headerStyle: Header.headerStyle
                  }
              }
          })
        : createSwitchNavigator(
              {
                  Home: {
                      screen: TopTabs,
                      navigationOptions: {
                          title: "My Decks",
                          headerTitleStyle: Header.headerTitleStyle,
                          headerTintColor: Header.headerTintColor,
                          headerStyle: Header.headerStyle
                      }
                  },
                  Deck: {
                      screen: Deck,
                      navigationOptions: {
                          title: "Deck",
                          headerTitleStyle: Header.headerTitleStyle,
                          headerTintColor: Header.headerTintColor,
                          headerStyle: Header.headerStyle
                      }
                  },
                  Quiz: {
                      screen: Quiz,
                      navigationOptions: {
                          title: "Quiz",
                          headerTitleStyle: Header.headerTitleStyle,
                          headerTintColor: Header.headerTintColor,
                          headerStyle: Header.headerStyle
                      }
                  },
                  NewCard: {
                      screen: NewCard,
                      navigationOptions: {
                          title: "Add Card",
                          headerTitleStyle: Header.headerTitleStyle,
                          headerTintColor: Header.headerTintColor,
                          headerStyle: Header.headerStyle
                      }
                  }
              },
              { initialRouteName: "Home" }
          );

export default MainStack;
