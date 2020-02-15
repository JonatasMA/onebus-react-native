import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// import Api from '../services/api';
import DataBase from '../services/database';
import LineFlatList from '../component/LineFlatList'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import Env from '../enviroments';

function Main({ navigation }) {
    const [lines, setLines] = useState([]);

    useEffect(() => {
        async function getLines() {
            // const response = await Api.get('/lines.json');
            setLines(DataBase.lines);
        }

        getLines();

        navigation.setOptions(
            {
                headerRight: () => (
                    <TouchableOpacity style={{ paddingRight: 16 }} onPress={()=>('')}>
                        <TextInput style={{ color: Env.basic.text }} placeholder="Procurar"></TextInput>
                        {/* <MaterialIcons name="search" size={24} color="#FFF" /> */}
                    </TouchableOpacity>
                )
            }
        );
    }, []);

    return (
        <View>
            <LineFlatList
                navigation={navigation}
                data={lines.map((line, index) => ({ key: line.route, id: index }))}
            />
        </View>
    );
}

export default Main;