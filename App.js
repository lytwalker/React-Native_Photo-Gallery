import React from "react";
import { Dimensions, StyleSheet, SafeAreaView, Image, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import ByBreed from "./screens/ByBreed";
import DogDetails from "./screens/DogDetails";

<HomeScreen />;
<ByBreed />;
<DogDetails />;

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#f4511e",
                    },
                    headerTitleAlign: "center",
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                }}>
                <Stack.Screen name="Welcome" component={HomeScreen} />
                <Stack.Screen name="Breed List" component={ByBreed} />
                <Stack.Screen name="Dog" component={DogDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center",
    },
    bigImage: {},
});

export default App;
