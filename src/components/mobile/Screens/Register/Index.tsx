import React, {Component} from 'react';
import { 
    View, 
    Text, 
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    StatusBar,
    StyleSheet
  } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Hyperlink from "react-native-hyperlink";

import FBInputBox from '../../Components/FBInputBox';

import styles from "../../Assets/styles/Styles";

const Color = {
  green: "#42b99f",
  weekgreen: "#7daba6",
  pink: "#fc849d",
  blue: "#436fb1",
  white: "#fff",
  darkred: "#800214",
  dark: "#0f0f0f",
  black: "#000",
  darkgreen: "#1d8a45",
  placeholder: "#bebebe"
};

export default function RegisterScreen() {
    return (
      <ImageBackground source={require('../../Assets/images/login_background.png')} style={styles.BackgroundImage}>
      <StatusBar  hidden = {true} />  
      <View style={[styles.Container]}>

        <Image source={require('../../Assets/images/logo.png')} style={[styles.SmallLogo, styles.MbMd]} top={-50}></Image>

        {/* 1st Step */}
        <Text style={[styles.TextMediumSize, styles.TextBold, styles.CenterText, styles.WhiteColorText, styles.LetterSpacingSmall, styles.MbSm]}>
          STEP <Text style={styles.PinkColorText}>1.</Text>
        </Text>

        {/* <FBInputBox placeholder="Test$$$" icon="check" alert={true} password={true}/> */}
        <View style={styles.FBInputLayout}>
          <TextInput
              style={styles.FBInputText}
              placeholder="Name *"
              placeholderTextColor = {Color.placeholder}
              underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.FBInputLayout}>
          <TextInput
              style={styles.FBInputText}
              placeholder="E-mail *"
              placeholderTextColor = {Color.placeholder}
              underlineColorAndroid="transparent"
          />
        </View>

        <View style={[styles.FBInputLayout, styles.FBAlertInput]}>
          <TextInput
              style={styles.FBInputText}
              placeholder="Phone *"
              placeholderTextColor = {Color.placeholder}
              underlineColorAndroid="transparent"
          />
          <TouchableOpacity style={styles.FBInputRightIcon}>
              <Icon
                  name="close"
                  size={20}
                  color={Color.darkred}
              />    
          </TouchableOpacity>
        </View>

        <Text style={[styles.WhiteColorText, styles.RequireText, styles.LetterSpacingTiny, styles.MbMd]}>* REQUIRED FILEDS</Text>


        {/* 2nd Step */}
        <Text style={[styles.TextMediumSize, styles.TextBold, styles.CenterText, styles.WhiteColorText, styles.LetterSpacingSmall, styles.MbSm]}>
          STEP <Text style={styles.PinkColorText}>2.</Text>
        </Text>

        <View style={styles.FBInputLayout}>
          <TextInput
              style={styles.FBInputText}
              placeholder="Choose password"
              secureTextEntry={true}
              placeholderTextColor = {Color.placeholder}
              underlineColorAndroid="transparent"
          />
          <TouchableOpacity style={styles.FBInputRightIcon}>
              <Icon
                  name="check"
                  size={20}
                  color={Color.darkgreen}
              />    
          </TouchableOpacity>
        </View>

        <View style={[styles.FBInputLayout, styles.MbXl]}>
          <TextInput
              style={styles.FBInputText}
              placeholder="Confirm password"
              secureTextEntry={true}
              placeholderTextColor = {Color.placeholder}
              underlineColorAndroid="transparent"
          />
          <TouchableOpacity style={styles.FBInputRightIcon}>
              <Icon
                  name="close"
                  size={20}
                  color={Color.darkred}
              />    
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={[styles.CreateAccountButton]} activeOpacity={0.5}>
          <Text style={[styles.WhiteColorText, styles.CenterText, styles.LetterSpacingTiny]}>GET STARTED</Text>
        </TouchableOpacity>

        <Text style={[styles.BlackRedColorText, styles.TextTinySize, styles.LetterSpacingTiny, styles.MtMd]}>
            SOME FIELDS ARE INCORRECTLY OR MISSING
        </Text>

      </View>
    </ImageBackground>
    );
}
