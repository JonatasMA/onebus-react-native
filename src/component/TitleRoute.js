import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

class TitleRoute extends Component {
    render() {
        const styles = StyleSheet.create({
            route: {
                margin: 10,
                fontSize: 20,
                alignContent: 'center',
                textAlign: 'center'
            }
        });

        return (
            <TouchableHighlight
                underlayColor=''
            >
                <Text style={styles.route}>{this.props.route}</Text>
            </TouchableHighlight>
        )
    }
}

export default TitleRoute;