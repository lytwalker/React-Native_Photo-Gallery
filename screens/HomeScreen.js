import React from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";

const HomeScreen = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Button
                title="Let's get started"
                onPress={() => {
                    navigation.push("Breed List", { breed: "boxer" });
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default HomeScreen;
