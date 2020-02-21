import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
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

        // setRoutes(lines.map((line, index) => ({ key: line.route, id: index })));

        const filter = (value) => {
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

        function showAlert() {
            Alert.alert(
                'Opa!',
                "Ainda não está funcionando :P\n\nMas, vai ser possivel pesquisar por locais que são refêrencias",
                [
                    { text: 'OK' },
                ],
                { cancelable: false }
            );
        }

        navigation.setOptions(
            {
                headerRight: () => (
                    <TouchableOpacity style={{ paddingRight: 16 }} onPress={showAlert}>
                        <Text style={{ color: Env.basic.text }}>Procurar</Text>
                    </TouchableOpacity>
                    // <TextInput
                    //     style={{ color: Env.basic.text, paddingRight: 16 }}
                    //     placeholder="Procurar"
                    //     onChangeText={filter}
                    // />
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