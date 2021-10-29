import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});

    return <View>
        <ColorCounter 
            onIncrease={() => }
            onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)} 
            color="Red"
        />
        <ColorCounter             
            onIncrease={() => }
            onDecrease={() => } 
            color="Green"
        />
        <ColorCounter             
            onIncrease={() => }
            onDecrease={() => } 
            color="Blue"
        />
        <View style={{height: 150, width: 150, backgroundColor:`rgb(${red}, ${green}, ${blue})`}} />
        <View>
            <Text>
                Current color: {`rgb(${red}, ${green}, ${blue})`}
            </Text>
        </View>
    </View>
}

const styles = StyleSheet.create({});

export default SquareScreen;