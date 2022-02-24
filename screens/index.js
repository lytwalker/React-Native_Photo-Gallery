import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import ByBreed from "../screens/ByBreed";
import DogDetails from "../screens/DogDetails";

const Stack = createStackNavigator();

const Screens = ({ navigation, route }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "dodgerblue",
                    },
                    headerTitleAlign: "center",
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        textTransform: "capitalize",
                    },
                }}>
                <Stack.Screen name="Welcome" component={HomeScreen} />
                <Stack.Screen name="Breed List" component={ByBreed} />
                <Stack.Screen name="Dog" component={DogDetails} options={{ title: "Details" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Screens;
