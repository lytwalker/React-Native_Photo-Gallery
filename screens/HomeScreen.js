import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, ImageBackground, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { getListAllBreeds } from "../api/dogapi";
import ButtonGrid from "../components/ButtonGrid";

const HomeScreen = ({ navigation, route }) => {
    const [breedsList, setbreedsList] = useState([]);

    useEffect(() => {
        getListAllBreeds()
            .then((breedsList) => {
                setbreedsList(breedsList);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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
                <Text style={styles.title}>Please select a breed</Text>
                <ButtonGrid numColumns={3} breeds={breedsList} navigation={navigation} />
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
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
        textTransform: "capitalize",
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 10,
        margin: 20,
    },
});

export default HomeScreen;
