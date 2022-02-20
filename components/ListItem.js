import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

function ListItem({ item, index, size, navigation }) {
    return (
        <TouchableOpacity
            style={styles.listItem}
            onPress={() => {
                navigation.push("Dog", { dogUrl: item });
            }}>
            <View style={styles.listItemView}>
                <Image
                    style={styles.listItemImage}
                    source={{
                        width: size,
                        height: size,
                        uri: item,
                    }}
                />
                <Text style={styles.listItemText}></Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {},
    listItemView: {
        flexDirection: "column",
    },
    listItemImage: {},
    listItemText: { display: "none" },
});

export default ListItem;
