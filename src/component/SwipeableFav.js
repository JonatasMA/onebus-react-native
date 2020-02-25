import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { Swipeable, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

import LineText from './LineText';
import Env from '../enviroments';

function SwipeableFav() {
    const [props] = useState(arguments[0]);
    const [fav, setFav] = useState(props.favorite);
    const mainRoutes = useSelector(state => state.mainRoutes);
    const dispatch = useDispatch();

    useEffect(()=>{
        mainRoutes[props.id].fav = fav;
        dispatch({ type: 'UPDATE_MAIN_ROUTES', mainRoutes });
    },[fav]);

    const styles = StyleSheet.create({
        rightAction: {
            backgroundColor: Env.primary.light,
            justifyContent: 'center',
            alignItems: 'flex-end',
            height: 72,
        },
        actionText: {
            color: '#fff',
            fontWeight: '600',
            fontSize: 16,
            padding: 16
        }
    });

    const RightActions = ({ progress, dragX, onPress }) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.rightAction}>
                    <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
                        Favoritar
                    </Animated.Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <Swipeable
            renderRightActions={(progress, dragX) => (
                <RightActions progress={progress} dragX={dragX} onPress={() => {
                    setFav(!fav)
                }} />
            )}
        >
            <LineText id={props.id} value={props.value}/>
            {fav ? <MaterialIcons style={{ position: 'absolute', right: 16, top: 24, bottom: 24 }} name="favorite" size={24} color={Env.primary.light} /> : null}
        </Swipeable >
    );
}

export default SwipeableFav;