import React, {Component} from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import Octicon from "react-native-vector-icons/Octicons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons"
import EvilIcon from "react-native-vector-icons/EvilIcons";
import Ionicon from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather";

import styles from "../Assets/styles/Styles";
import { Divider } from "react-native-elements";

export default class SideBar extends Component {
    render() {
        return (
            <View style={[styles.ProfileBar]}>
                <View style={styles.ProfileIntroField}>
                    <Image style={styles.SideBarAvatar} source={require('../Assets/images/profile_avatar.png')} />
                    <View style={styles.ProfileName}>
                        <Text style={[styles.WhiteColorText, styles.TextLargeSize, styles.TextBold]}>JANE DOE</Text>
                        
                        <TouchableOpacity
                            style={[styles.MeduimButton, styles.PinkBorder, styles.MtTn]}
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
                                VIEW PROFILE
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={[styles.ProfileClose]}>
                        <Text><Icon name="close" style={[styles.WhiteColorText, styles.TextMediumSize]} /></Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.LinkList}>
                    <TouchableOpacity>
                        <Text style={[styles.WhiteColorText, styles.TextMediumSize, styles.LetterSpacingSmall, styles.MlTn]} ><SimpleLineIcon name="home" style={[styles.TextProfileIconSize]} />     HOME</Text>                
                    </TouchableOpacity>
                    <Divider style={styles.LinkListDivider} />
                    <TouchableOpacity>
                        <Text style={[styles.WhiteColorText, styles.TextMediumSize, styles.LetterSpacingSmall, styles.MlTn]} ><SimpleLineIcon name="game-controller" style={[styles.TextProfileIconSize]} />     PROGRAMS</Text>                
                    </TouchableOpacity>
                    <Divider style={styles.LinkListDivider} />
                    <TouchableOpacity>
                        <Text style={[styles.WhiteColorText, styles.TextMediumSize, styles.LetterSpacingSmall, styles.MlTn]} ><SimpleLineIcon name="heart" style={[styles.TextProfileIconSize]} />     FAVORITES</Text>                
                    </TouchableOpacity>
                    <Divider style={styles.LinkListDivider} />
                    <TouchableOpacity>
                        <Text style={[styles.WhiteColorText, styles.TextMediumSize, styles.LetterSpacingSmall, styles.MlTn]} ><SimpleLineIcon name="people" style={[styles.TextProfileIconSize]} />     COLLECTIVE CLASSES</Text>                
                    </TouchableOpacity>
                    <Divider style={styles.LinkListDivider} />
                    <TouchableOpacity>
                        <Text style={[styles.WhiteColorText, styles.TextMediumSize, styles.LetterSpacingSmall, styles.MlTn]} ><SimpleLineIcon name="earphones" style={[styles.TextProfileIconSize]} />     MY PERSONAL TRAINER</Text>                
                    </TouchableOpacity>
                    <Divider style={styles.LinkListDivider} />
                </View>

                <View style={[styles.LinkList, styles.MtLg]}>
                    <TouchableOpacity>
                        <Text style={[styles.WhiteColorText, styles.TextMediumSize, styles.LetterSpacingSmall, styles.MlTn, styles.MbSm]} ><SimpleLineIcon name="settings" style={[styles.TextProfileIconSize]} />  SETTINGS</Text>                
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.WhiteColorText, styles.TextMediumSize, styles.LetterSpacingSmall, styles.MlTn, styles.MbSm]} ><Ionicon name="ios-globe" style={[styles.TextProfileIconSize]} />   LANGUAGE</Text>                
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.WhiteColorText, styles.TextMediumSize, styles.LetterSpacingSmall, styles.MlTn, styles.MbSm]} ><Feather name="help-circle" style={[styles.TextProfileIconSize]} />  HELP</Text>                
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.WhiteColorText, styles.TextMediumSize, styles.LetterSpacingSmall, styles.MlTn, styles.MbSm]} ><SimpleLineIcon name="star" style={[styles.TextProfileIconSize]} />  RATING</Text>                
                    </TouchableOpacity>
                    <Divider style={styles.LinkListDivider} />
                    
                </View>

                <TouchableOpacity>
                    <Text style={[styles.WhiteColorText, styles.TextMediumSize, styles.LetterSpacingSmall, styles.MlTn, styles.MtMd]} ><SimpleLineIcon name="login" style={[styles.TextProfileIconSize]} />  LOGOUT</Text>  
                </TouchableOpacity>
            </View>
        );
    }
}
