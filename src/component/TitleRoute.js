import React, { Component } from 'react';
import { StyleSheet, Text, Alert } from 'react-native';
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

        const descriptions = this.props.descriptions;

        function showAlert() {
            if (descriptions) {
                Alert.alert(
                    'Legendas',
                    descriptions,
                    [
                        { text: 'OK'},
                    ],
                    { cancelable: false }
                    );
            }
        }

        return (
            <TouchableHighlight
                onPress={showAlert}
                underlayColor=''
            >
                <Text style={styles.route}>{this.props.route}</Text>
            </TouchableHighlight>
        )
    }
}

export default TitleRoute;