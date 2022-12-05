import React, { useState } from "react";
import { View, Text, Button, Alert } from 'react-native';
import { Card, NumberContainer } from "../../components";
import colors from "../../constants/colors";
import { styles } from './styles';



const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    if(randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNumber;
    }
}

const Game = (selectedNumber) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, selectedNumber));
    const [rounds, setRound] = useState(0);

    return (
        <View style={styles.container}>
               <Card style={styles.content}>
               <Text style={styles.title}>Opponent's Number</Text>
               <NumberContainer number={currentGuess} />
               <View style={styles.containerButton}>
                    <Button
                        title="Lower" 
                        onPress={() => onHandleNextGuess('lower')}
                        color={colors.secondary}
                        
                    />
                    <Button
                        title="Creater"
                        onPress={() => onHandleNextGuess('greater')}
                        color={colors.primary}
                    />
                </View>

               </Card>
        </View>   
    )

}
export default Game
