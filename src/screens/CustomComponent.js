import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    text: {
        color: "blue",
    }
})

const CustomComponent = () => {
    return (
        <Text Style={Style.text}>Hello this is from custom component</Text>
    );
}

export default CustomComponent;