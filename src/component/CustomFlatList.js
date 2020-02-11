import React, { Component, useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import CustomText from './CustomText';

class CustomFlatList extends Component {
    render() {
        const lines = this.props.data;

        return (
            <FlatList
                data={lines}
                renderItem={
                    ({ item }) => (
                        <CustomText navigation={this.props.navigation} id={item.id} value={item.key}/>
                    )
                }
            />
        );
    }
}

export default CustomFlatList;