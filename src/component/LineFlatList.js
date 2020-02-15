import React, { Component } from 'react';
import { FlatList } from 'react-native';
import CustomText from './CustomText';

class LineFlatList extends Component {
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

export default LineFlatList;