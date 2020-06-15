import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
} from "react-native";

import styles from "../../Assets/styles/Styles";

export default function WelcomeScreen(props) {
    return (
        <ImageBackground
            source={require("../../Assets/images/get_started_background.png")}
            style={styles.BackgroundImage}
        >
            <StatusBar hidden={true} />
            <View style={[styles.Container, styles.TopLg]}>
                <Image
                    source={require("../../Assets/images/logo.png")}
                    style={[styles.LargeLogo, styles.MbLg]}
                ></Image>

                <Text
                    style={[
                        styles.Introtext,
                        styles.TextBold,
                        styles.WhiteColorText,
                        styles.LetterSpacingSmall,
                    ]}
                >
                    TRAIN WITH ME{"\n"}FOR{" "}
                    <Text style={styles.PinkColorText}>FREE</Text>
                </Text>

                <TouchableOpacity
                    style={styles.GetStartButton}
                    activeOpacity={0.5}
                    onPress={() => {
                        props.navigation.navigate("SignUpScreen");
                    }}
                >
                    <Text
                        style={[
                            styles.WhiteColorText,
                            styles.CenterText,
                            styles.LetterSpacingTiny,
                        ]}
                    >
                        GET STARTED
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}
