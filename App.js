import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

const testBorderStyle = {
    // Tip: you can uncomment the following lines to show component borders
    // borderStyle: "dotted",
    // borderWidth: 3,
};

function QaScreen() {
    // TODO: add missing components and adjust styles
    // Tip: you can uncomment "testBorderStyle", then the border of the flexboxes will show up
    // react native style: https://reactnative.dev/docs/style
    // react native flexbox: https://reactnative.dev/docs/flexbox
    return (
        <View style={{ ...testBorderStyle, flex: 1 }}>
            <View style={{ ...testBorderStyle, flex: 1 }} />
            <View style={{ ...testBorderStyle, flex: 1, flexDirection: 'row' }}>
                <View style={{
                    ...testBorderStyle,
                    flex: 3,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Text style={{
                        fontSize: 25,
                        color: "red",
                        fontWeight: "bold"
                    }}>Answer Your First Question</Text>
                </View>
                <View style={{
                    ...testBorderStyle,
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <AntDesign name="right" size={24} color="black" />
                </View>
            </View>
            <View style={{ ...testBorderStyle, flex: 1 }}>
                <Text>Answer Your Second Question</Text>
            </View>
            <View style={{ ...testBorderStyle, flex: 1 }}>
                <Text>Answer Your Third Question</Text>
            </View>
            <View style={{
                ...testBorderStyle,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <TouchableOpacity style={{
                    ...testBorderStyle,
                    height: 100,
                    width: 100,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "blue"
                }}
                    onPress={() => alert("pressed")}>
                    <Text style={{
                        fontSize: 25,
                        color: "red",
                        fontWeight: "bold"
                    }}>Done</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

function CounterScreen() {
    // TODO: create a counter using react hook (https://reactjs.org/docs/hooks-state.html)
    // the counter means every time you click "click me", the text number above it will increase by 1
    const count = 0
    return (
        <View style={{
            flex: 1,
            alignContent: "center",
            justifyContent: "center",
        }}
        >
            <Text> You clicked {count} times </Text>
            <TouchableOpacity onPress={() => alert("pressed")}>
                <Text style={{ color: "red" }}>
                    Click me
                </Text>
            </TouchableOpacity>
        </View>
    )
}
function TagScreen() {
    // TODO: write down your idea on how to built the screen so that user can add, select or deselect tags
    const TagBtn1 = ({ content }) => {
        return (
            <TouchableOpacity style={{
                borderRadius: 15,
                padding: 6,
                paddingHorizontal: 5,
                marginHorizontal: 4,
                marginVertical: 5,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#4069D9",
                shadowColor: "black",
                shadowOffset: { height: 2, width: 2 },
                shadowOpacity: 0.4,
            }}
                onPress={() => { alert("pressed") }}
            >
                <Text style={{ fontSize: 30, color: "white" }}>{content}</Text>
            </TouchableOpacity>
        )
    }
    const TagBtn2 = ({ content }) => {
        return (
            <TouchableOpacity style={{
                borderRadius: 15,
                padding: 6,
                paddingHorizontal: 5,
                marginHorizontal: 4,
                marginVertical: 5,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                shadowColor: "black",
                shadowOffset: { height: 2, width: 2 },
                shadowOpacity: 0.4,
            }}
                onPress={() => { alert("pressed") }}
            >
                <Text style={{ fontSize: 30, color: "grey" }}>{content}</Text>
            </TouchableOpacity>
        )
    }
    const TagBtn3 = ({ content }) => {
        return (
            <TouchableOpacity style={{
                borderRadius: 15,
                borderStyle: "solid",
                borderColor: "#4069D9",
                borderWidth: 3,
                padding: 6,
                paddingHorizontal: 5,
                marginHorizontal: 4,
                marginVertical: 5,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                shadowColor: "black",
                shadowOffset: { height: 2, width: 2 },
                shadowOpacity: 0.4,
            }}
                onPress={() => { alert("pressed") }}
            >
                <Text style={{ fontSize: 30, color: "grey" }}>{content}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ ...testBorderStyle, flex: 1 }}>
            <View style={{ ...testBorderStyle, flex: 2 }} />
            <View style={{ ...testBorderStyle, flex: 6, paddingHorizontal: 50 }} >
                <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Text style={{
                        fontSize: 30,
                        color: "#122F77",
                        fontWeight: "bold"
                    }}>I'm interested in ...</Text>
                </View>
                <View style={{ ...testBorderStyle, flexDirection: "row", flexWrap: "wrap" }} >
                    <TagBtn1 content={"#Add New"} />
                    <TagBtn2 content={"#UI/UX"} />
                    <TagBtn2 content={"#Disney"} />
                    <TagBtn3 content={"#Disney"} />
                </View>
            </View>
            <View style={{
                ...testBorderStyle,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <TouchableOpacity style={{
                    ...testBorderStyle,
                    height: 50,
                    width: 200,
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: '#122F77'
                }}
                    onPress={() => alert("pressed")}>
                    <Text style={{
                        fontSize: 20,
                        color: "white",
                        fontWeight: "bold"
                    }}>Done</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="QA" component={QaScreen} />
            <Tab.Screen name="Counter" component={CounterScreen} />
            <Tab.Screen name="Tag" component={TagScreen} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
