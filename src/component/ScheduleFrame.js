import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import Env from '../enviroments';
import HorizontalRuler from './HorizontalRuler';

class DescriptionHours extends Component {
    render() {
        const styles = StyleSheet.create({
            description: {
                marginTop: 16,
                fontSize: 18,
                fontStyle: 'italic'
            },
            hours: {
                marginTop: 8,
                fontSize: 18
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
                marginHorizontal: 16,
                marginBottom: 16,
                backgroundColor: Env.basic.base
            },

            boxFather: {
                elevation: 1,
                marginHorizontal: 16,
                marginBottom: 16,
                borderRadius: 4,
                backgroundColor: Env.basic.base
            },

            type: {
                marginHorizontal: 16,
                marginVertical: 16,
                fontSize: 20,
                fontWeight: 'bold'
            },
        });

        const type = this.props.type;
        const start = this.props.start;
        const end = this.props.end;

        return (
            <View style={styles.boxFather}>
                <Text style={styles.type}>
                    {type}
                </Text>
                <HorizontalRuler />
                <View style={styles.box}>
                    <DescriptionHours description={start.description} hours={start.hours} />
                    {end ? <DescriptionHours description={end.description} hours={end.hours}/> : <></>}
                </View>
            </View>
        );
    }
}

export default ScheduleFrame;