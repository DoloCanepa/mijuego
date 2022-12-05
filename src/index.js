import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Header } from './components';
import colors from './constants/colors';
import { Game, StartGame } from './screens/index';
import { useFonts } from 'expo-font';




export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-BlackItalic': require('../assets/fonts/Lato-BlackItalic.ttf'),
  });

  

  const [userNumber, setUserNumber] = useState(null);

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }


  let content = <StartGame onStartGame={onStartGame} />

  if (userNumber) {
    content = <Game selectedNumber={userNumber} />
  }

  if(!loaded) {
    return (
  <View style={styles.container}>
    <ActivityIndicator size='large' color={colors.primary} />
  </View>
  )
  }
  return (
    <View style={styles.containerLoader}>
      <Header title={ userNumber ? "lets play" : 'Welcome'}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerLoader: {
    flex: 1,
    backgroundColor: colors.background,
  }
});
