import React from "react";
import { Dimensions, FlatList } from "react-native";
import ListItem from "./ListItem";

function ImageGrid({ photos, numColumns, onEndReached, navigation }) {
    const { width } = Dimensions.get("window");

    const size = width / numColumns;

    return (
        <FlatList
            data={photos}
            keyExtractor={(item, index) => index}
            numColumns={numColumns}
            onEndReached={onEndReached}
            renderItem={({ item, index }) => (
                <ListItem item={item} index={index} size={size} navigation={navigation} />
            )}
        />
    );
}

export default ImageGrid;
