import React from "react";
import { StyleSheet } from "react-native";

import Screens from "./screens";

function App() {
    return <Screens />;
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
