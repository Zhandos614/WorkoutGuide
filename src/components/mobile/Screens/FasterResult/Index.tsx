import React from "react";
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

import { Video } from "expo-av";

import styles from "../../Assets/styles/Styles";
import TabBar from "../../Components/TabBar";

export default function FasterResults(props) {
    return (
        <ImageBackground
            source={require("../../Assets/images/faster_background.png")}
            style={styles.BackgroundImage}
        >
            <StatusBar hidden={true} />
            <TabBar />

            {/* Logo Image */}
            <Image
                source={require("../../Assets/images/logo.png")}
                style={[styles.TinyLogo, styles.DailyLogo]}
            ></Image>

            <View style={[styles.Container]}>
                <Text
                    style={[
                        styles.WhiteColorText,
                        styles.TextLargeSize,
                        styles.CenterText,
                        styles.TextBold,
                        styles.LetterSpacingTiny,
                        styles.MbLg,
                    ]}
                >
                    WANT{" "}
                    <Text style={[styles.PinkColorText, styles.TextXLargeSize]}>
                        FASTER
                    </Text>{" "}
                    AND{"\n"}
                    <Text style={[styles.PinkColorText, styles.TextXLargeSize]}>
                        MORE IMPRESSIVE
                    </Text>
                    {"\n"}RESULTS?
                </Text>

                <Video
                    source={{
                        uri:
                            "https://fitkabdao-mobile-app.s3-ap-southeast-1.amazonaws.com/shared/matcha_upsell.mp4",
                    }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    useNativeControls={true}
                    style={{ width: 380, height: 260 }}
                />

                <TouchableOpacity
                    style={[
                        styles.GetStartButton,
                        styles.GreenBackground,
                        styles.MtXMd,
                    ]}
                    activeOpacity={0.5}
                >
                    <Text
                        style={[
                            styles.WhiteColorText,
                            styles.CenterText,
                            styles.LetterSpacingSmall,
                        ]}
                    >
                        LEARN MORE
                    </Text>
                </TouchableOpacity>

                <Text
                    style={[
                        styles.WhiteColorText,
                        styles.LetterSpacingTiny,
                        styles.TextItalic,
                        styles.BorderBottom,
                        {
                            marginTop: 40,
                            fontSize: 12,
                        },
                    ]}
                    onPress={() => {
                        props.navigation.navigate("Workouts");
                    }}
                >
                    No thanks, I don't want faster results.
                </Text>
            </View>
        </ImageBackground>
    );
}