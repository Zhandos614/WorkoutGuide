import React, {Component} from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    Switch,
    StyleSheet,
    Dimensions
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import Octicon from "react-native-vector-icons/Octicons";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { LinearGradient } from 'expo-linear-gradient';


import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import GuideDayListItem from './GuideDayListItem'

import styles from "../Assets/styles/Styles";
import TabBar from "../Components/TabBar";
import Guide from "../Screens/Guide/Index";

const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket.asdfasdfasdfaksjdfhaksjdfhkasjdfhaksjdfhkajsdfhalksdfhalskdjfhalsdkjfhakshbclawehrcqlkwjehrcbqlkwercbhqklwjerhbcqlkwjerhcbqkwjerhcqlwkejrhcbqlwkerhbcqiuweyrbcqiwueyrbcqiuweyrbcqoiwueyrcqwe ';

const CONTENT = [
  {
    WeekNumber: '1',
    content: BACON_IPSUM,
  },
  {
    WeekNumber: '2',
    content: BACON_IPSUM,
  },
  {
    WeekNumber: '3',
    content: BACON_IPSUM,
  },
  {
    WeekNumber: '4',
    content: BACON_IPSUM,
  },
];

const SELECTORS = [
  {
    title: 'First',
    value: 0,
  },
  {
    title: 'Third',
    value: 2,
  },
  {
    title: 'None',
  },
];

export default class GuideWeekAccordion extends Component {
      state = {
        activeSections: [],
        collapsed: true,
        multipleSelect: false,
      };
    
      toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
      };
    
      setSections = sections => {
        this.setState({
          activeSections: sections.includes(undefined) ? [] : sections,
        });
      };
    
      renderHeader = (section, _, isActive) => {
        return (
          <View style={[ style.header, isActive ? style.GreenBorder : style.PinkBorder]} >
            <Text style={[style.headerText, styles.WhiteColorText, styles.TextBold, styles.LetterSpacingTiny]}>WEEK  <Text style={isActive ? styles.GreenColorText : styles.PinkColorText}>{section.WeekNumber}</Text></Text>
            <Text style={[style.control, isActive ? styles.GreenColorText : styles.PinkColorText]}><Entypo style={{fontSize: 25}} name={isActive ? "chevron-small-up" : "chevron-small-down"} /></Text>
          </View>
        );
      };
    
      renderContent(section, _, isActive) {
        return (
          <Animatable.View
            duration={400}
            style={[style.content]}
            transition="backgroundColor"
          >
            <GuideDayListItem />
            <GuideDayListItem />
            <GuideDayListItem />
            <GuideDayListItem />
            <GuideDayListItem />
            <GuideDayListItem /> 
          </Animatable.View>
        );
      }

    render() {
        const { multipleSelect, activeSections } = this.state;
        return (
          <View style={{height: 375}}>
            <ScrollView contentContainerStyle={{ }}>
                <Accordion
                    activeSections={activeSections}
                    sections={CONTENT}
                    touchableComponent={TouchableOpacity}
                    expandMultiple={multipleSelect}
                    renderHeader={this.renderHeader}
                    renderContent={this.renderContent}
                    duration={400}
                    onChange={this.setSections}
                />
            </ScrollView>
          </View>
            
        );
    }
}

const Color = {
    green: "#42b99f",
    weekgreen: "#7daba6",
    pink: "#fc849d",
    blue: "#436fb1",
    white: "#fff",
    darkred: "#800214",
    dark: "#0b0b0b",
    black: "#000"
};

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      paddingTop: Constants.statusBarHeight,
    },
    title: {
      textAlign: 'center',
      fontSize: 22,
      fontWeight: '300',
      marginBottom: 20,
    },
    
    header: {
      padding: 10,
      paddingTop: 25, 
      height: 60, 
      borderBottomWidth: 1
    },

    headerText: {
      textAlign: 'left',
      fontSize: 20,
      marginLeft: 10,
      fontWeight: '500',
    },

    content: {
      width: screen.height,
      backgroundColor: Color.dark,
    },

    active: {
      backgroundColor: 'rgba(255,255,255,1)',
    },

    inactive: {
      backgroundColor: 'rgba(245,252,255,1)',
    },
    
    selectors: {
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'center',
    },

    selector: {
      backgroundColor: '#F5FCFF',
      padding: 10,
    },
    activeSelector: {
      fontWeight: 'bold',
    },

    selectTitle: {
      fontSize: 14,
      fontWeight: '500',
      padding: 10,
    },

    multipleToggle: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 30,
      alignItems: 'center',
    },

    multipleToggle__title: {
      fontSize: 16,
      marginRight: 8,
    },

    control: {
      position: "absolute",
      right: 5,
      top: 25,
      color: "white",
    },

    PinkBorder: {
      borderBottomColor: Color.pink
    },
    
    GreenBorder: {
      borderBottomColor: Color.weekgreen
    }
});