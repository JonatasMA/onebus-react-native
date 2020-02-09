import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';

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
            <TouchableHighlight underlayColor='#ddd' style={styles.button} onPress={() => { this.props.navigation.navigate('Schedule', { id: this.props.id, lines: this.props.lines[this.props.id]}) }}>
                <Text id={this.props.id} style={styles.item}>
                    {this.props.value}
                </Text>
            </TouchableHighlight>
        );
    }
}

export default CustomText;