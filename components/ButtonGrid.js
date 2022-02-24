import React from "react";
import { StyleSheet, Dimensions, FlatList, View, Button } from "react-native";

function ButtonGrid({ breeds, numColumns, navigation }) {
    const { width } = Dimensions.get("window");

    const size = width / numColumns;

    return (
        <FlatList
            data={breeds}
            keyExtractor={(item, index) => index}
            numColumns={numColumns}
            renderItem={({ item, index }) => (
                <View style={styles.listView}>
                    <Button
                        title={item}
                        styles={styles.button}
                        onPress={() => {
                            navigation.push("Breed List", { breed: item });
                        }}
                    />
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    listView: {
        flex: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    button: {
        // flex: 1,
    },
});

export default ButtonGrid;
