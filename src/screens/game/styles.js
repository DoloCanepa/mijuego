import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create ({
    container: {
       flex: 1,
       padding: 20,
       alignItems: 'center',
   },
   content: {
       width: '90%',
       height: height * 0.22,
       minHeight: 200,
       alignItems: 'center',
       justifyContent: 'space-around',
   },
   title: {
       fontSize: 16,
       fontFamily: 'Lato-Bold',
   },
   containerButton: {
       width: '100%',
       flexDirection: 'row',
       justifyContent: 'space-around',
       
   },
});
