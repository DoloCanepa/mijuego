import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create ({
    container: {
        backgroundColor: colors.primary,
        height: height * 0.12,
        justifyCenter: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    title: {
        fontSize: 25,
        color: colors.text,
        fontFamily: 'Lato-BlackItalic',
        paddingVertical: 25,
    }
});