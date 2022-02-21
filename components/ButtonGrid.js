import React from "react";
import { Dimensions, FlatList } from "react-native";

function ButtonGrid({ photos, numColumns, onEndReached, navigation }) {
    const { width } = Dimensions.get("window");

    const size = width / numColumns;

    return (
        <FlatList
            data={photos}
            keyExtractor={(item, index) => index}
            numColumns={numColumns}
            onEndReached={onEndReached}
            renderItem={({ item, index }) => (
                <Button
                    title={"Go to Screen 2"}
                    onPress={() => {
                        navigation.push("Breed List", { breed: "african" });
                    }}
                />
            )}
        />
    );
}

export default ButtonGrid;
