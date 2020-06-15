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
    Switch,
    TextInput
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import Octicon from "react-native-vector-icons/Octicons";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import { LinearGradient } from 'expo-linear-gradient';

import styles from "../../Assets/styles/Styles";
import TabBar from "../../Components/TabBar";
import GuideItem from "../../Components/GuideItem";
import GuideDayListItem from '../../Components/GuideDayListItem';
import GuideWeekAccordion from "../../Components/GuideWeekAccordion";

export default class Test extends Component {
    render() {
        return (
            <View style={[styles.UpperContainer, styles.DarkBackground]}>
                <StatusBar  hidden = {true} />  
                <TabBar />

                <View style={[styles.WorkoutsHeader, styles.MtMd]}>
                    <Image source={require('../../Assets/images/logo.png')} style={[styles.TinyLogo, styles.MlLg]}></Image>
                    <Text style={[styles.WorkoutsTitle, styles.WhiteColorText, styles.TextLargeSize, styles.TextBold, styles.LetterSpacingTiny]}>WORKOUTS</Text>
                    <Text style={[styles.WhiteColorText, styles.TextTinySize, styles.LetterSpacingTiny, styles.Filters]}>
                        <Text>FILTERS</Text>
                        {/* <Octicon name="settings" style={{ fontSize: 23 }}/> */}
                    </Text>
                    
                    <TouchableOpacity style={[styles.FilterButton]} activeOpacity={0.5}>
                        <Text style={[styles.WhiteColorText, styles.CenterText, styles.LetterSpacingTiny]}><Octicon name="settings" style={{ fontSize: 23 }}/></Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.SearchLayout]}>
                    <TextInput
                        style={styles.SearchInputText}
                        placeholder="Search"
                        placeholderTextColor="white"
                        underlineColorAndroid="transparent"
                    />
                    <Octicon name="search" style={[styles.SearchIcon]} />
                </View>

                <View style={[styles.UpperContainer, styles.MtTn]}>
                    <View style={[styles.GuideItemsScrollView]}>
                        <ScrollView>  
                            <GuideItem background_image_number={1} liked={true} btnType="green" />
                            <GuideItem background_image_number={2} liked={false} btnType="pink" />
                            <GuideItem background_image_number={3} liked={true} btnType="border" />
                            <GuideItem background_image_number={1} liked={false} btnType="pink" />
                            <GuideItem background_image_number={2} liked={true} btnType="green" />
                            <GuideItem background_image_number={3} liked={false} btnType="border" />
                            <GuideItem background_image_number={1} liked={true} btnType="green" />
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}