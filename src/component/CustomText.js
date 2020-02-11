import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';
import DataBase from '../services/database';

class CustomText extends Component {
    render() {
        const styles = StyleSheet.create({
            item: {
                fontSize: 20,
            },
            button: {
                padding: 10,
                height: 50,
            }
        });

        return (
            <TouchableHighlight
                underlayColor='#ddd'
                style={styles.button}
                onPress={
                    () => {
                        this.props.navigation.navigate('Schedule', { lines: DataBase.lines[this.props.id]})
                    }
                }
            >
                <Text style={styles.item}>
                    {this.props.value}
                </Text>
            </TouchableHighlight>
        );
    }
}

export default CustomText;