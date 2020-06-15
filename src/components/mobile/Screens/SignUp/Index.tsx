import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import Hyperlink from "react-native-hyperlink";

import styles from "../../Assets/styles/Styles";

export default function SignUpScreen(props) {
    return (
        <ImageBackground
            source={require("../../Assets/images/create_account_background.png")}
            style={styles.BackgroundImage}
        >
            <StatusBar hidden={true} />
            <View style={[styles.Container, styles.TopLg]}>
                <Image
                    source={require("../../Assets/images/logo.png")}
                    style={[styles.MediumLogo, styles.MbLg]}
                ></Image>

                <Text
                    style={[
                        styles.TextNormalSize,
                        styles.CenterText,
                        styles.WhiteColorText,
                        styles.LetterSpacingSmall,
                        styles.MbLg,
                    ]}
                >
                    Create a free account to{"\n"}access your programs
                </Text>

                <TouchableOpacity
                    style={[
                        styles.ContinueWithRegisterButton,
                        styles.MbSm,
                        {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                        },
                    ]}
                    activeOpacity={0.5}
                >
                    <Text style={{ position: "absolute", left: 20, top: 12 }}>
                        <Icon name="facebook" size={20} color="white" />
                    </Text>
                    <Text
                        style={[
                            styles.WhiteColorText,
                            styles.CenterText,
                            styles.LetterSpacingTiny,
                        ]}
                    >
                    {'  '}Continue with Facebook
                    </Text>
                </TouchableOpacity>

                <Text
                    style={[
                        styles.TextSmallSize,
                        styles.CenterText,
                        styles.WhiteColorText,
                        styles.LetterSpacingSmall,
                        styles.MbSm,
                    ]}
                >
                    OR
                </Text>

                <TouchableOpacity
                    style={[styles.CreateAccountButton, styles.MbXl]}
                    activeOpacity={0.5}
                >
                    <Text
                        style={[
                            styles.WhiteColorText,
                            styles.CenterText,
                            styles.LetterSpacingTiny,
                        ]}
                    >
                        Create Your Account
                    </Text>
                </TouchableOpacity>

                <Text
                    style={[
                        styles.WhiteColorText,
                        styles.TextSmallSize,
                        styles.CenterText,
                        styles.LetterSpacingTiny,
                        styles.MbMd,
                    ]}
                >
                    Already have an account?
                </Text>

                <Text
                    style={[
                        styles.WhiteColorText,
                        styles.TextBold,
                        styles.LetterSpacingMedium,
                    ]}
                    onPress={() => {
                        props.navigation.navigate("LoginScreen");
                    }}
                >
                    LOGIN
                </Text>
            </View>
        </ImageBackground>
    );
}
