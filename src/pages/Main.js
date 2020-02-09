import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import Api from '../services/api';
import CustomFlatList from '../component/CustomFlatList'

function Main({ navigation }) {
    const [lines, setLines] = useState([]);

    useEffect(() => {
        async function getLines() {
            const response = await Api.get('/lines.json');
            setLines(response.data);
        }

        getLines();
    }, []);

    return (
        <View>
            <CustomFlatList
                navigation={navigation}
                lines={lines}
                data={lines.map((line, index) => ({ key: line.route, id: index }))}
            />
        </View>
    );
}

export default Main;