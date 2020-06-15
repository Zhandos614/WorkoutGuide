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
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from 'expo-linear-gradient';
import { Video } from "expo-av";


import styles from "../../Assets/styles/Styles";
import TabBar from "../../Components/TabBar";
import GuideDayListItem from '../../Components/GuideDayListItem';
import GuideWeekAccordion from "../../Components/GuideWeekAccordion";
import { throwIfAudioIsDisabled } from "expo-av/build/Audio/AudioAvailability";

export default class Guide extends Component {
    constructor (props) {
        super(props)
        this._replayVideo = this._replayVideo.bind(this);
        this.count = 0;
        this.state = {
            count: 0
        };
    }

    _handleVideoRef = component => {
        this.playbackObject = component
    }

    _replayVideo () {
        this.setState({count: this.state.count + 1});
        if(this.state.count % 2 == 0) this.playbackObject.pauseAsync();
        else {
            this.playbackObject.playAsync();
        }
    }

    componentDidMount() {
        this._replayVideo();
    }

    render() {
        console.log(this.state.count);
        return (
            <View style={[styles.UpperContainer, styles.DarkBackground]}>
                <StatusBar hidden = {true} />  
                <TabBar />

                <View style={[styles.GuideVideoPlayPart]}>
                    <Video
                        source={require("../../Assets/videos/1.mp4")}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay={false}
                        isLooping
                        useNativeControls={false}
                        style={[styles.GuideTopVideo]}
                        ref={this._handleVideoRef}
                    />
                </View>

                <View style={[styles.GuideVideo]}>
                    <LinearGradient
                        colors={['transparent', 'black']}
                        style={[this.state.count % 2 == 0 ? styles.Hidden : styles.GuideVideoBackgroundGradient]}
                    />

                    <Image source={require('../../Assets/images/logo.png')} style={[styles.BitLogo, this.state.count % 2 == 0 ? styles.Hidden : styles.GuideVideoLogo]}></Image>

                    <View style={[this.state.count % 2 == 0 ? styles.Hidden : styles.GuideTitlePart]}>
                        <Text style={[styles.PinkColorText, styles.TextBold, styles.TextTinySize]}>MUSCLE BUILDINGS</Text>
                        <Text style={[styles.WhiteColorText, styles.TextBold, styles.TextWorkoutTitle, styles.LetterSpacingTiny]}>Ultimate Beginner's Guide</Text>
                        <Text style={[styles.WhiteColorText, styles.LetterSpacingTiny, styles.MtTn]}>
                            <SimpleLineIcon name="chart" style={[styles.TextNormalSize, styles.WeekGreenColorText]} />  Beginner{'\t'}{'\t'}
                            <SimpleLineIcon name="clock" style={[styles.TextNormalSize, styles.WeekGreenColorText]} /> 45 Minutes
                        </Text>
                        <TouchableOpacity style={styles.GuideIsLiked}>
                            <Text><Icon name="heart-o" style={[styles.TextNormalSize, styles.WhiteColorText]} /></Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                    activeOpacity={0.5}
                    style={[this.state.count % 2 == 0 ? styles.Hidden : styles.GuideVideoPlayIcon]}
                    onPress={this._replayVideo}
                    >
                    <Text>
                        <EvilIcon name="play" style={[ styles.WhiteColorText, styles.TextXXLargeSize ]} />
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={[this.state.count % 2 != 0 ? styles.Hidden : styles.GuideVideoPauseIcon]}
                    onPress={this._replayVideo}
                    >
                    <Text>
                        <MaterialCommunityIcon name="pause-circle-outline" style={[ styles.WhiteColorText, styles.PauseButtonSize ]} />
                    </Text>
                </TouchableOpacity>

                <View style={styles.GuideDescription}>
                    <Text style={[styles.GuideDescriptionText, styles.WhiteColorText, styles.LetterSpacingTiny]}>Lorem ipsum dolor sit amet, consectetur adipicsing elit. Vestibulum a posuere nulla. Fusce eros felis, posuere vitae purus at, dictum convallis quam. Suspendisse scelerisque vel ipsum nec tincidunt.</Text>
                </View>

                <GuideWeekAccordion />
            </View>
        );
    }
}