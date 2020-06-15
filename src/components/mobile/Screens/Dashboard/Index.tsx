import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
    },

    Welcome: {
        fontSize: 19,
        color: "#fff",
        fontWeight: "bold",
        marginBottom: 30,
        letterSpacing: 2,
    },

    TextInputStyleClass: {
        height: 50,
        width: "80%",
        padding: 20,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 40,
        marginBottom: 10,
        color: "#fff",
    },

    SubmitButtonStyle: {
        width: "33%",
        padding: 10,
        backgroundColor: "#65b6a0",
        borderRadius: 50,
        marginTop: 50,
        marginBottom: 30,
    },

    TextStyle: {
        color: "#fff",
        textAlign: "center",
        letterSpacing: 2,
    },

    HyperLink: {
        textDecorationLine: "underline",
    },
});

export default function DashboardScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.Welcome}>WELCOME</Text>

            <TextInput
                placeholder="Login"
                underlineColorAndroid="transparent"
                placeholderTextColor="#888"
                style={styles.TextInputStyleClass}
            />

            <TextInput
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#888"
                underlineColorAndroid="transparent"
                style={styles.TextInputStyleClass}
            />

            <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity={0.5}
            >
                <Text style={styles.TextStyle}> LOGIN </Text>
            </TouchableOpacity>
        </View>
    );
}
