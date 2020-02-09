import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class ScheduleFrame extends Component {
    render() {
        const styles = StyleSheet.create({
            box: {
                marginHorizontal: 15,
                marginBottom: 15,
                backgroundColor: '#dedede'
            },
            type: {
                marginHorizontal: 15,
                marginTop: 15,
                fontSize: 20,
                borderBottomWidth: 1,
                paddingBottom: 15,
            },
            description: {
                marginTop: 15,
                fontSize: 18,
            },
            hours: {
                fontSize: 22
            }
        });

        const type = this.props.type;
        const start = this.props.start;
        const end = this.props.end;

        return (
            <View style={styles.box}>
                <Text style={styles.type}>
                    {type}
                </Text>
                <View style={styles.box}>
                    <Text style={styles.description}>
                        {start.description}
                    </Text>
                    <Text style={styles.hours}>
                        {start.hours}
                    </Text>
                    <Text style={styles.description}>
                        {end.description}
                    </Text>
                    <Text style={styles.hours}>
                        {end.hours}
                    </Text>
                </View>
            </View>
        );
    }
}

export default ScheduleFrame;