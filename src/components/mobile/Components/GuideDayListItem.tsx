import React, {Component} from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
    ScrollView,
    Switch
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import Octicon from "react-native-vector-icons/Octicons";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import { LinearGradient } from 'expo-linear-gradient';

import styles from "../Assets/styles/Styles";
import TabBar from "../Components/TabBar";

export default class GuideDayListItem extends Component {
    render() {
        return (
            <View style={[styles.DayList]}>
                <View style={[styles.DayListImagePart]}>
                    <Image source={require("../Assets/images/1.jpg")} style={[styles.DayListImage]} />
                    <LinearGradient
                        colors={['black', 'transparent']}
                        start={[0, 1]}
                        end={[1, 0]}
                        style={styles.WorkoutImageLinearGradient}
                    />
                    <TouchableOpacity
                        style={[styles.DayListVideoPlayButton]}
                        activeOpacity={0.5}
                        onPress={() => {
                            props.navigation.navigate("FasterResult");
                        }}>
                        <Text>
                            <EvilIcon name="play" style={[ styles.WhiteColorText, styles.DayListVideoPlayButtonFontSize]} />
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.DayListDescriptionPart]}>
                    <Text style={[styles.PinkColorText, styles.MtTn, styles.TextBold, styles.TextMediumSize]}>DAY 1</Text>
                    <Text style={[styles.WhiteColorText, styles.MtTn, styles.TextBold, styles.TextLargeSize]}>Workout</Text>
                    <Text style={[styles.WhiteColorText, styles.MtTn, styles.TextSmallSize]}>
                        <SimpleLineIcon name="chart" style={[styles.TextNormalSize, styles.WeekGreenColorText]} />  Beginner{'\t'}{'\t'}
                        <SimpleLineIcon name="clock" style={[styles.TextNormalSize, styles.WeekGreenColorText]} />  45 Minutes
                    </Text>
                </View>
            </View>
        );
    }
}