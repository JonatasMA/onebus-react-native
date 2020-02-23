import React from 'react';
import { View, StyleSheet } from 'react-native';
import Env from '../enviroments';

function HorizontalRuler() {
    const styles = StyleSheet.create({
        HorizontalRuler: {
            flex: 1,
            height: 1,
            backgroundColor: '#0000001e',
            marginHorizontal: 16,
        }
    });

    return (
        <View style={styles.HorizontalRuler}/>
    );
}

export default HorizontalRuler;