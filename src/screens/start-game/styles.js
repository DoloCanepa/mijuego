import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 15,
    },
    title: {
        fontSize: 18,
        color: colors.text,
        textAlign: 'center',
        paddingVertical: 20,
    },
    label: {
        fontSize: 20,
        color: colors.secundary,
        paddingVertical: 5,
        textAlign: 'center',
    },
    inputContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: 20,
        paddingVertical: 20,
        paddingVertical: 20,
    },
    input: {
        minWidth: 70,
        fontSize: 22,
        paddingVertical: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-around',
        marginTop: 20,
    },
});