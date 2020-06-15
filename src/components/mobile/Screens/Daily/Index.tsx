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
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Divider } from 'react-native-elements';

import styles from "../../Assets/styles/Styles";
import TabBar from "../../Components/TabBar";

export default function Daily(props) {
    return (
        <ImageBackground
            source={require("../../Assets/images/daily_background.png")}
            style={styles.BackgroundImage}
        >
            <StatusBar hidden={true} />
            <TabBar />

            {/* Logo Image */}
            
            <Image
                source={require("../../Assets/images/logo.png")}
                style={[styles.TinyLogo, styles.DailyLogo]}
            ></Image>

            <View style={[styles.UpperContainer]}>
                <View style={[styles.DailyTitle]}>
                    <Text style={[styles.TextWorkoutTitle, styles.LetterSpacingSmall, styles.TextBold, styles.PinkColorText, styles.MtLg, styles.CenterText]}>DAY 3</Text>
                    <Text style={[styles.TextXLargeSize, styles.TextBold, styles.WhiteColorText, styles.MtTn, styles.CenterText]}>Workout</Text>
                </View>

                <View style={[styles.DailyOrder, styles.MtLg, styles.MbMd]}>
                    <Text style={[styles.TextSmallSize, styles.LetterSpacingSmall, styles.WhiteColorText, styles.LeftText]}><Text style={styles.PinkColorText}>1</Text>) Complete the workout video below</Text>
                    <Divider style={styles.Divider} />
                    <Text style={[styles.TextSmallSize, styles.LetterSpacingSmall, styles.WhiteColorText, styles.LeftText]}><Text style={styles.PinkColorText}>2</Text>) Go to Facebook Group</Text>
                    <Divider style={styles.Divider} />
                    <Text style={[styles.TextSmallSize, styles.LetterSpacingSmall, styles.WhiteColorText, styles.LeftText]}><Text style={styles.PinkColorText}>3</Text>) Comment in Group</Text>
                </View>

                <Video
                    source={require("../../Assets/videos/1.mp4")}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay={false}
                    isLooping
                    useNativeControls={true}
                    style={{ width: 380, height: 230 }}
                />

                <TouchableOpacity
                    style={[
                        styles.ContinueWithRegisterButton,
                        styles.MtLg,
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
                    {'  '}Go To Facebook Gruop
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.WideButton,
                        styles.PinkBorder,
                        styles.MtMd,
                        {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                        },
                    ]}
                    activeOpacity={0.5}
                >
                    <Text style={{ position: "absolute", right: 10, top: 12 }}>
                        <AntDesign name="right" size={20} color="white" />{" "}
                    </Text>
                    <Text
                        style={[
                            styles.WhiteColorText,
                            styles.CenterText,
                            styles.LetterSpacingSmall
                        ]}
                    >NEXT</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}
