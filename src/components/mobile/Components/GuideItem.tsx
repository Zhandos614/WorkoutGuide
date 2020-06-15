import React, {Component} from 'react';
import { 
    View, 
    Text, 
    Image,
    ImageBackground,
    TouchableOpacity,
} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import { LinearGradient } from 'expo-linear-gradient';
import Octicon from 'react-native-vector-icons/Octicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

import styles from "../Assets/styles/Styles";

export default class GuideItem extends Component {
    constructor(props){
        super(props);
    };

    getImage(image_number) {
        switch(image_number) {
            case 1:
            return require('../Assets/images/1.jpg');
            case 2:
            return require('../Assets/images/2.jpg');
            case 3:
            return require('../Assets/images/3.jpg');
            default:
            return require('../Assets/images/1.jpg');
        }
    }
    
    render() {
        let { background_image_number, liked, btnType } = this.props;

        let image = this.getImage(background_image_number);

        return (
            <View style={[styles.GuideLayout, styles.MbTn]}>

                {/* Background Image */}
                <View style={styles.GuideBackgroundContainer}>
                    <Image style={styles.GuideBackgroundImage} source={image}>
                    </Image>
                    <LinearGradient
                        colors={['black', 'transparent']}
                        start={[0, 1]}
                        end={[1, 0]}
                        style={styles.WorkoutImageLinearGradient}
                    />
                </View>

                {/* Main Content of Workout */}

                <View style={styles.NormalPadding}>
                    <TouchableOpacity activeOpacity={0.5}>
                            <Text><Icon name={liked ? "heart" : "heart-o"} style={[styles.TextNormalSize, liked ? styles.PinkColorText : styles.WhiteColorText]} /></Text>
                    </TouchableOpacity>
                    <Text style={[styles.PinkColorText, styles.TextBold, styles.MtLg]}>MUSCLE BUILDINGS</Text>
                    <Text style={[styles.WhiteColorText, styles.TextBold, styles.TextWorkoutTitle]}>Ultimate Beginner's Guide</Text>

                    <View style={styles.MtSm}>
                        <Text style={[styles.WhiteColorText, styles.LetterSpacingTiny, styles.MbTn]}><SimpleLineIcon name="chart" style={[styles.TextNormalSize, styles.WeekGreenColorText]} />   Beginner</Text>
                        <Text style={[styles.WhiteColorText, styles.LetterSpacingTiny, styles.MbTn]}><SimpleLineIcon name="clock" style={[styles.TextNormalSize, styles.WeekGreenColorText]} />   45 Minutes</Text>
                        <TouchableOpacity style={[styles.MeduimButton, btnType == "green" ? styles.GreenBackground : (btnType=="pink" ? styles.PinkBackground : styles.PinkBorder), styles.GuideStartButton]} activeOpacity={0.5}>
                            <Text style={[styles.WhiteColorText, styles.CenterText, styles.LetterSpacingTiny]}>START!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
