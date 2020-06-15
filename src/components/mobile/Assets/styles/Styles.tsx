import { StyleSheet, Dimensions } from 'react-native';
import * as React from "react";
import { realpath } from 'fs';
import Constants from 'expo-constants';
import { reducer } from '../../../store';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Color = {
  green: "#42b99f",
  weekgreen: "#7daba6",
  pink: "#fc849d",
  blue: "#436fb1",
  white: "#fff",
  darkred: "#800214",
  dark: "#0f0f0f",
  black: "#000",
  placeholder: "#bebebe"
};

export default StyleSheet.create({
  // Layout
  
  // Margin-bottom
  MbXlg: {
    marginBottom: 160
  },

  MbXl: {
    marginBottom: 100
  },

  MbLg: {
    marginBottom: 40
  },

  MbMd: {
    marginBottom: 30
  },

  MbSm: {
    marginBottom: 20
  },

  MbTn: {
      marginBottom: 10
  },

  // Margin-top
  MtXlg: {
    marginTop: 200
  },

  MtXl: {
    marginTop: 100
  },

  MtXMd: {
    marginTop: 60
  },

  MtLg: {
    marginTop: 40
  },

  MtMd: {
    marginTop: 30
  },

  MtSm: {
    marginTop: 20
  },

  MtTn: {
    marginTop: 10
  },

  // Margin-left
  MlXlg: {
    marginLeft: 200
  },

  MlXl: {
    marginLeft: 100
  },

  MlLg: {
    marginLeft: 40
  },

  MlMd: {
    marginLeft: 30
  },

  MlSm: {
    marginLeft: 20
  },

  MlTn: {
    marginLeft: 10
  },

  // Margin-left
  MrXlg: {
    marginRight: 200
  },

  MrXl: {
    marginRight: 100
  },

  MrLg: {
    marginRight: 40
  },

  MrMd: {
    marginRight: 30
  },

  MrSm: {
    marginRight: 20
  },

  MrTn: {
    marginRight: 10
  },

  // Top

  TopLg: {
      top: 60
  },

  // Padding 
  NormalPadding: {
    padding: 20
  },

  LetterSpacingLarge: {
    letterSpacing: 8
  },

  LetterSpacingMedium: {
    letterSpacing: 4
  },

  LetterSpacingSmall: {
    letterSpacing: 2
  },

  LetterSpacingTiny: {
    letterSpacing: 1
  },

//   Text styles
  WhiteColorText: {
    color: Color.white,
  },

  WeekGreenColorText: {
    color: Color.weekgreen,
  },

  PinkColorText: {
    color: Color.pink
  },

  GreenColorText: {
    color: Color.green
  },

  BlackRedColorText: {
    color: Color.darkred
  },

  CenterText: {
    textAlign: "center"
  },

  LeftText: {
    textAlign: "left"
  },

  TextBold: {
    fontWeight: "bold",
  },

  // Text size
  TextXXLargeSize: {
    fontSize: 60
  },

  TextXLargeSize: {
    fontSize: 32
  },

  TextLargeSize:{
    fontSize: 27
  },

  TextWorkoutTitle: {
    fontSize: 23
  },

  TextNormalSize: {
    fontSize: 20,
  },

  TextMediumSize: {
    fontSize: 17,
  },

  TextSmallSize: {
    fontSize: 15,
  },

  TextTinySize: {
    fontSize: 11,
  },

  TextItalic: {
    fontStyle: "italic"
  },

  RequireText: {
    fontSize: 7,
    opacity: 0.35,
    marginLeft: -200
  },

  Introtext: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
  },
  
// Components
  Container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },

  UpperContainer: {
    flex: 1,
    alignItems:'center',
  },

  LargeLogo: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },

  MediumLogo: {
    width: 90,
    height: 90,
    borderColor: Color.white,
    resizeMode: 'contain',
  },

  SmallLogo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },

  TinyLogo: {
    width: 34,
    height: 34,
    resizeMode: 'contain',
  },

  BitLogo: {
    width: 29,
    height: 29,
    resizeMode: 'contain'
  },

  BackgroundImage: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center"
  },

  GetStartButton: {
    width: 200,
    padding: 12, 
    borderRadius: 50,
    backgroundColor: Color.pink,
  },

  ContinueWithRegisterButton: {
    width: 250,
    padding: 12, 
    borderRadius: 50,
    backgroundColor: Color.blue,
  },

  CreateAccountButton: {
    width: 250,
    padding: 12, 
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Color.pink
  },

  LoginButton: {
    width: 150,
    padding: 10, 
    borderRadius: 50,
    backgroundColor: Color.green
  },

  WideButton: {
    width: 190,
    padding: 12, 
    borderRadius: 50,
    borderWidth: 1,
  },

  MeduimButton: {
    width: 130,
    padding: 10, 
    borderRadius: 50,
  },

  NormalPaddingButton: {
    width: 130,
    padding: 7, 
    borderRadius: 50,
  },

  SmallButton: {
    width: 100,
    padding: 10, 
    borderRadius: 50,
  },

  Link: {
    color: Color.white, 
    fontSize: 13 ,
  },

  TextDecoratin: {
    textDecorationLine: "underline"
  },

  FBInputLayout: {
    width: 350,
    height: 48, 
    padding: 10,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: Color.white,
    borderRadius: 40,
    marginBottom: 10,
  },

  FBAlertInput: {
    borderColor: Color.darkred,
  },
 
  FBInputText: {
    width: 250,
    color: Color.white
  },
 
  FBInputRightIcon: {
    position: "absolute",
    right: 0,
    marginTop: 14,
    marginRight: 20
  },

  SearchLayout: {
    width: 380,
    marginLeft: 30,
    color: Color.white,
    backgroundColor: Color.black
  },

  SearchInputText: {
    left: 50,
    width: 250,
    color: Color.white
  },
 
  SearchIcon: {
    color: Color.white,
    position: "absolute",
    fontSize: 18,
    top: 5,
    left: 5
  },

  // Navigation style
  NavigationBar: {
    backgroundColor: Color.dark,
    height: 50,
  },
  NavigatorIcon: {
    fontSize: 25
  },

  GreenBackground: {
    backgroundColor: Color.green
  },

  WeekGreenBackground: {
    backgroundColor: Color.weekgreen
  },

  PinkBackground: {
    backgroundColor: Color.pink
  },

  DarkBackground: {
    backgroundColor: Color.dark
  },

  PinkBorder: {
    borderWidth: 1,
    borderColor: Color.pink
  },

  GreenBorder: {
    borderWidth: 0.8,
    borderColor: Color.green
  },
  
  BorderBottom: {
    paddingBottom: 5,
    borderBottomWidth: 0.5,
    borderColor: Color.white
  },

  // Guide style
  GuideLayout: {
    width: 95 + "%",
    height: 220,
  },

  GuideBackgroundContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 20, 
  }, 

  GuideBackgroundImage: {
    flex: 1, 
    width: null, 
    height: null,
    borderRadius: 20,
  },

  GuideStartButton: {
    position: "absolute",
    right: 0,
    top: 10,
  },

  GuideItemsScrollView: {
    left: 10,
    width: screen.width,
    height: screen.height - 210,
  },

  WorkoutImageLinearGradient: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 300,
  },

  Filters: {
    position: "absolute",
    right: 70,
    top: 10
  },
  FilterButton: {
    position: "absolute",
    right: 30,
    top: 5
  },

  GuideVideo: {
    width: "100%",
    height: screen.height * 0.35
  },

  GuideVideoPlayPart: {
    position: "absolute",
    width: "100%",
    height: screen.height * 0.35
  },

  GuideVideoPlayIcon: {
    position: "absolute",
    left: 190,
    top: 100
  },
  GuideVideoPauseIcon: {
    position: "absolute",
    left: 197,
    top: screen.height * 0.25,
  },
  PauseButtonSize: {
    fontSize: 45
  },
  GuideTopVideo: {
    width: "100%",
    height: screen.height * 0.35
  },

  GuideDescription: {
    borderTopColor: Color.weekgreen,
    borderWidth: 1,
    padding: 15,
    width: "100%",
    height: screen.height * 0.1,
  },
  GuideDescriptionText: {
    fontSize: 10,
    lineHeight: 20
  },
  
  GuideVideoBackgroundGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: screen.height * 0.35,
  },
  GuideVideoLogo: {
    top: 50,
    left: 40,
    position: "absolute",
  },
  GuideTitlePart: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    height: 110,
  },
  GuideIsLiked: {
    position: "absolute",
    right: 15,
    bottom: 30
  },
  GuideAccordian: {
    width: "100%",
    height: screen.height * 0.55 - 100,
    backgroundColor: "white"
  },

  DailyLogo: {
    position: "absolute",
    top: 40,
    left: 25
  },
  DailyTitle: {
    height: screen.height * 0.15
  },
  DailyOrder: {
    width: screen.width * 0.85,
  },

  Divider: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#333"
  },

  ProfileBar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: screen.width * 0.87,
    height: screen.height,
    backgroundColor: Color.black,
    padding: 20,
  },

  ProfileIntroField: {
    height: screen.height * 0.14,
    borderBottomWidth: 1,
    borderColor: Color.pink
  },

  SideBarAvatar: {
    width: 100,
    height: 100,
    borderRadius: 100
  },

  ProfileName: {
    position: "absolute",
    top: 5,
    left: 110,
  },
  ProfileClose: {
    position: "absolute",
    right: 10,
    top: 15
  },
  LinkList: {
    marginTop: 30
  },
  TextProfileIconSize: {
    fontSize: 20
  },
  LinkListDivider: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "white"
  },

  ProfileLogo: {
    position: "absolute",
    top: 20,
    left: 25
  },

  ProfileHeader: {
    marginTop: 10,
  },

  ProfileAvatar: {
    width: 120,
    height: 120,
    borderRadius: 100
  },

  DayList: {
    width: screen.width,
    height: 150,
    padding: 15
  },
  DayListImagePart: {
    width: 150,
    height: "100%",
  },
  DayListImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  DayListVideoPlayButton: {
    position: "absolute",
    top: 40,
    left: 50
  },
  DayListVideoPlayButtonFontSize: {
    fontSize: 50
  },
  DayListImagePartGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%"
  },

  DayListDescriptionPart: {
    position: "absolute",
    top: 15,
    left: 185,
    width: 235,
    height: "100%",
  },

  ResultsBlock: {
    width: screen.width,
    height: 190,
  },
 
  ProfileGuideItemsScrollView: {
    left: 10,
    width: screen.width,
    height: 270,
  },
  FavoritePrograms: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 10
  },


  WorkoutsHeader: {
    width: "100%",
    height: screen.height * 0.05,
  },
  WorkoutsTitle: {
    position: "absolute",
    left: 105,
  },


  Hidden: {
    display: "none"
  }
});