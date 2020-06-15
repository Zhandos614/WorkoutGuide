import React, {Component} from 'react';
import { 
    View, 
    TextInput,
    StyleSheet,
  } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from 'react-native-elements';

// import styles from "../Assets/styles/Styles";

const Color = {
  darkred: "#800214",
  darkgreen: "#1d9349",
  white: "#fff",
};

let styles = {
  FBInputLayout: {
    width : 350,
    height : 48,    
    padding : 10,
    paddingLeft : 20,
    borderWidth : 1,
    borderColor : Color.white,
    borderRadius : 40,
    marginBottom : 10,
  },

  FBAlertInput: {
    borderColor: Color.darkred,
  },
 
  FBInputText: {
    color: Color.white,
    width : 250
  },
 
  FBInputRightIcon: {
    position: "absolute",
    right: 0,
    marginTop: 14,
    marginRight: 20
  },

  DisplayNone: {
      display: "none"
  }
};

export default class FBInputBox extends Component {
    render() {
        let {placeholder, icon, alert, password} = this.props;
        return (
            <View style={[styles.FBInputLayout, alert ? styles.FBAlertInput : '']}>
                <TextInput
                    style={styles.FBInputText}
                    placeholder = {placeholder}
                    placeholderTextColor = {Color.white}
                    secureTextEntry={password}
                    underlineColorAndroid="transparent"
                />
                <Icon
                    name={icon}
                    style={ icon ? styles.FBInputRightIcon : styles.DisplayNone}
                    size={15}
                    color={ icon && icon == "check" ? Color.darkgreen : Color.darkred }
                />
            </View>
        );
    }
}
