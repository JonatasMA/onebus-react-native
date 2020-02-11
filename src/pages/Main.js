import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

// import Api from '../services/api';
import DataBase from '../services/database';
import CustomFlatList from '../component/CustomFlatList'

function Main({ navigation }) {
    const [lines, setLines] = useState([]);

    useEffect(() => {
        async function getLines() {
            // const response = await Api.get('/lines.json');
            setLines(DataBase.lines);
        }

        getLines();
    }, []);

    return (
        <View>
            <CustomFlatList
                navigation={navigation}
                data={lines.map((line, index) => ({ key: line.route, id: index }))}
            />
        </View>
    );
}

export default Main;