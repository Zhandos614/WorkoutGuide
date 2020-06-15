import React, {Component} from 'react';
import { 
    Text, 
} from "react-native";

import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import Tabs from 'react-native-tabs';

import styles from "../Assets/styles/Styles";

const Color = {
    green: "#42b99f",
    pink: "#fc849d",
    blue: "#436fb1",
    white: "#fff",
    darkred: "#800214",
    dark: "#0b0b0b"
};

export default class TabBar extends Component {
    constructor(props){
        super(props);
        this.state = { page: 'Home' };
    }
    render() {
        return (
            <Tabs selected={this.state.page} 
                style={ styles.NavigationBar }
                selectedStyle={{color: Color.pink}} 
                onSelect={ el=>this.setState({ page : el.props.name }) }>

                <Text name="Profile" style={styles.WhiteColorText}>
                    <SimpleLineIcon
                        name="user"
                        style={styles.NavigatorIcon}
                    />
                </Text>
                <Text name="Home" style={styles.WhiteColorText}>
                    <SimpleLineIcon
                        name="home"
                        style={styles.NavigatorIcon}
                    />
                </Text>
                <Text name="Users" style={styles.WhiteColorText}>
                    <SimpleLineIcon
                        name="people"
                        style={styles.NavigatorIcon}
                    />
                </Text>
            </Tabs>
        );
    }
}
