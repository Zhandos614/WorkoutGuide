import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    StatusBar,
    StyleSheet,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import Hyperlink from "react-native-hyperlink";

import styles from "../../Assets/styles/Styles";

const Color = {
  green: "#42b99f",
  weekgreen: "#7daba6",
  pink: "#fc849d",
  blue: "#436fb1",
  white: "#fff",
  darkred: "#800214",
  dark: "#0f0f0f",
  black: "#000",
  darkgreen: "#1d8a45",
  placeholder: "#bebebe"
};

export default function LoginScreen(props) {
    return (
        <ImageBackground
            source={require("../../Assets/images/login_background.png")}
            style={styles.BackgroundImage}
        >
            <StatusBar hidden={true} />
            <View style={[styles.Container]}>
                <Image
                    source={require("../../Assets/images/logo.png")}
                    style={[styles.SmallLogo, styles.MbXlg]}
                    top={-50}
                ></Image>

                <Text
                    style={[
                        styles.TextNormalSize,
                        styles.TextBold,
                        styles.CenterText,
                        styles.WhiteColorText,
                        styles.LetterSpacingSmall,
                        styles.MbMd,
                    ]}
                >
                    WELCOME
                </Text>

                <View style={styles.FBInputLayout} width={350} height={50}>
                    <TextInput
                        style={styles.FBInputText}
                        width={250}
                        placeholder="Login"
                        placeholderTextColor={Color.placeholder}
                        underlineColorAndroid="transparent"
                    />
                    <TouchableOpacity style={styles.FBInputRightIcon}>
                        <Icon
                            name="check"
                            size={20}
                            color={Color.darkgreen}
                        />    
                    </TouchableOpacity>
                </View>

                <View style={[styles.FBInputLayout, styles.MtTn]} width={350} height={50}>
                    <TextInput
                        style={styles.FBInputText}
                        width={250}
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor={Color.placeholder}
                        underlineColorAndroid="transparent"
                    />
                    <TouchableOpacity style={styles.FBInputRightIcon}>
                        <Icon
                            name="close"
                            size={20}
                            color={Color.darkred}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={[styles.LoginButton, styles.MtLg]}
                    activeOpacity={0.5}
                    onPress={() => {
                        props.navigation.navigate("FasterResult");
                    }}
                >
                    <Text
                        style={[
                            styles.WhiteColorText,
                            styles.CenterText,
                            styles.LetterSpacingTiny,
                        ]}
                    >
                        LOGIN
                    </Text>
                </TouchableOpacity>

                <Text
                    style={[
                        styles.WhiteColorText,
                        styles.TextDecoratin,
                        styles.LetterSpacingTiny,
                        {
                            marginTop: 50,
                        },
                    ]}
                >
                    Forgot your password?
                </Text>
            </View>
        </ImageBackground>
    );
}
