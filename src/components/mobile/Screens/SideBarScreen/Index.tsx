import React, {Component} from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    StatusBar,
    StyleSheet,
    ScrollView,
    Dimensions,
} from "react-native";

import Octicon from "react-native-vector-icons/Octicons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "../../Assets/styles/Styles";
import TabBar from "../../Components/TabBar";
import GuideItem from "../../Components/GuideItem";
import SideBar from "../../Components/SideBar";

export default class SideBarScreen extends Component {
    render() {
        return (
            <View style={[styles.BackgroundImage, styles.DarkBackground]}>
                <StatusBar  hidden = {true} />  
                <TabBar />
                
                {/* Logo Image */}
                <View style={styles.MbSm}>
                    <Text style={[styles.WhiteColorText, styles.TextWorkoutTitle, styles.TextBold, styles.LetterSpacingTiny, styles.MlMd, styles.MtTn]}>
                        <Image source={require('../../Assets/images/logo.png')} style={[styles.BitLogo, styles.MlSm]}></Image>   WORKOUTS
                    </Text>

                    <Text style={[styles.WhiteColorText, styles.TextTinySize, styles.LetterSpacingTiny, styles.Filters]}>
                        <Text>FILTERS</Text>
                    </Text>
                    
                    <TouchableOpacity style={[styles.FilterButton]} activeOpacity={0.5}>
                        <Text style={[styles.WhiteColorText, styles.CenterText, styles.LetterSpacingTiny]}><MaterialCommunityIcon name="tune" style={{ fontSize: 23 }}/></Text>
                    </TouchableOpacity>

                    <View style={[styles.SearchLayout, styles.MtSm]}>
                        <TextInput
                            style={styles.SearchInputText}
                            placeholder="Search"
                            placeholderTextColor="white"
                            underlineColorAndroid="transparent"
                        />
                        <Octicon name="search" style={styles.SearchIcon} />
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

                <SideBar />
            </View>
        );
    }
}
