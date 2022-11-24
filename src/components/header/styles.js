import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create ({
    container: {
        backgroundColor: colors.primary,
        height: 100,
        justifyCenter: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    title: {
        fontSize: 25,
        color: colors.text,
        fontWeight: 'bold',
        fontFamily: '',
        paddingVertical: 25,
    }
});