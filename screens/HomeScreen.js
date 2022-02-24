import React from "react";
import { StyleSheet, SafeAreaView, ImageBackground, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require("../assets/dogs-dog-park-training-cropped.jpg")}
                style={styles.imgBackground}></ImageBackground>
            <LinearGradient
                // Background Linear Gradient
                colors={["#f89e3d", "#273c88"]}
                start={[0.7, 0.1]}
                end={[1, 0.8]}
                style={styles.background}>
                <Button
                    title="Let's get started"
                    styles={styles.button}
                    onPress={() => {
                        navigation.push("Breed List", { breed: "african" });
                    }}
                />
            </LinearGradient>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    background: {
        position: "absolute",
        height: "100%",
        width: "100%",
        opacity: 0.8,
        justifyContent: "center",
        alignItems: "center",
    },
    imgBackground: {
        flex: 1,
        width: "100%",
        alignItems: "center",
    },
    button: {},
});

export default HomeScreen;
