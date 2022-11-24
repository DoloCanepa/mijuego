import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 15,
    },
    title: {
        fontSize: 18,
        color: '#212121',
        textAlign: 'center',
        paddingVertical: 20,
    },
    label: {
        fontSize: 15,
        color: '#c3c388',
        paddingVertical: 5,
        textAlign: 'center',
    },
    inputContainer: {
        width: '80%',
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: 20,
        paddingVertical: 20,
    },
    input: {
        borderBottomColor: '#c3c388',
        borderBottomWidth: 1,
        minWidth: 70,
        fontSize: 22,
        paddingVertical: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-around',
        marginTop: 20,
    },
});