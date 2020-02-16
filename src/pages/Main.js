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
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        async function getLines() {
            // const response = await Api.get('/lines.json');
            setLines(DataBase.lines);
        }

        getLines();

        setRoutes(lines.map((line, index) => ({ key: line.route, id: index })));

        const filter = (value) => {
            console.log(value);
            const linesFiltered = lines.map((line)=>{
                if (line.neighborhoods.indexOf(value) > -1) {
                    return line;
                }
            });

            console.log(linesFiltered.length);
            if (linesFiltered.length === 0) {
                setRoutes({ key: 'Não encontrado', id: 0 });
            }
            // setRoutes(linesFiltered.map((line, index) => ({ key: line.route, id: index })));
            setRoutes(linesFiltered.map((line, index) => { console.log(line); return { key: line.route, id: index }}));
        }

        navigation.setOptions(
            {
                headerRight: () => (
                    <TouchableOpacity style={{ paddingRight: 16 }} onPress={()=>('')}>
                        <TextInput
                            style={{ color: Env.basic.text }}
                            placeholder="Procurar"
                            onChangeText={filter}
                        />
                        {/* <MaterialIcons name="search" size={24} color="#FFF" /> */}
                    </TouchableOpacity>
                )
            }
        );
    }, []);

    console.log(routes);

    return (
        <View>
            <LineFlatList
                navigation={navigation}
                data={routes}
            />
        </View>
    );
}

export default Main;