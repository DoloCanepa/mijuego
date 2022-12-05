import React, { useEffect, useState } from "react";
import { View, Text, Image, Button, Dimensions } from "react-native";
import { styles } from "./styles";
import { Card } from "../../components";
import colors from "../../constants/colors";


const GameOver = ({rounds, selectedNumber, onRestart}) => {
    return (
        <View style={styles.container}>
            <Text>Game Over</Text>
        </View>
    )
}

export default GameOver;