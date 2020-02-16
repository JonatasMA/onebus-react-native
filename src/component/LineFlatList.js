import React, { Component } from 'react';
import { FlatList } from 'react-native';
import LineText from './LineText';

class LineFlatList extends Component {
    render() {
        const lines = this.props.data;

        return (
            <FlatList
                data={lines}
                renderItem={
                    ({ item }) => (
                        <LineText navigation={this.props.navigation} id={item.id} value={item.key}/>
                    )
                }
            />
        );
    }
}

export default LineFlatList;