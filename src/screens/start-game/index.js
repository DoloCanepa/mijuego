import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "./styles";
import { Card } from "../../components";


const StartGame = () => {
    return (
        <View style={styles.container}>
         <Text style={styles.title}>Let's start</Text> 
         <Card style={styles.inputContainer}>
             <Text style={styles.label}>Select a number</Text> 
             <TextInput style={styles.input} placeholder="0"/>
           
            <View style={styles.buttonContainer}> 
              <Button 
                title="Reset"
                onPress={() => null}
                color='#c3c388'
               />
                <Button 
                title="Confirm"
                onPress={() => null}
                color='#c3c388'
               />
             </View>
             </Card> 
         </View>
    );
} 

export default StartGame;