import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class DescriptionHours extends Component {
    render() {
        const styles = StyleSheet.create({
            description: {
                marginTop: 15,
                fontSize: 18,
            },
            hours: {
                fontSize: 22
            }
        });

        return (
        <>
            <Text style={styles.description}>
                {this.props.description}
            </Text>
            <Text style={styles.hours}>
                {this.props.hours}
            </Text>
        </>
        );
    }
}

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
                    <DescriptionHours description={start.description} hours={start.hours} />
                    {end ? <DescriptionHours description={end.description} hours={end.hours}/> : <></>}
                </View>
            </View>
        );
    }
}

export default ScheduleFrame;