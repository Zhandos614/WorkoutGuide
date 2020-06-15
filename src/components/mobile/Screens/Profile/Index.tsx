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
    ScrollView,
} from "react-native";

import { Video } from "expo-av";
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Divider } from 'react-native-elements';

import styles from "../../Assets/styles/Styles";
import TabBar from "../../Components/TabBar";
import GuideItem from "../../Components/GuideItem";

export default function Profile(props) {
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
                style={[styles.TinyLogo, styles.ProfileLogo]}
            ></Image>

            <View style={[styles.UpperContainer]}>
                <View style={[styles.ProfileHeader]}>
                    <Image style={[styles.ProfileAvatar]} source={require('../../Assets/images/profile_avatar.png')} />
                </View>
                <View style={styles.MtTn}>
                    <Text style={[styles.TextLargeSize, styles.TextBold, styles.WhiteColorText, styles.LetterSpacingTiny]}>JANE DOE</Text>
                </View>
                <TouchableOpacity
                    style={[
                        styles.NormalPaddingButton,
                        styles.PinkBorder,
                        styles.MtTn,
                        {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                        },
                    ]}
                    activeOpacity={0.5}
                >
                    <Text
                        style={[
                            styles.WhiteColorText,
                            styles.CenterText,
                            styles.TextSmallSize,
                            styles.LetterSpacingTiny
                        ]}
                    >EDIT PROFILE</Text>
                </TouchableOpacity>

                <View style={[styles.ResultsBlock, styles.MtTn]}>
                        
                </View>
            
                <View style={[styles.MtTn, styles.FavoritePrograms]}>
                    <Text style={[styles.WhiteColorText, styles.TextSmallSize, styles.LetterSpacingSmall, styles.MbMd, styles.MlMd]}>MY FAVORITE PROGRAMS</Text>
                    <View style={[styles.ProfileGuideItemsScrollView]}>
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
        </ImageBackground>
    );
}
