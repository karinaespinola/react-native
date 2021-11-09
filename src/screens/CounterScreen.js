import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const COUNT_INCREMENT = 1;

const reducer = (state, action) => {
    switch(action.type) {
        case 'increase':
            return { ...state, counter: state.counter + COUNT_INCREMENT };
        case 'decrease':
            return { ...state, counter: state.counter - COUNT_INCREMENT };
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 });

    return <View>
        <View>
            <Button 
                title="Increase"
                onPress={() => {
                   dispatch({ type: 'increase', payload: COUNT_INCREMENT });
                }}
            />
            <Button 
                title="Decrease"
                onPress={() => {
                    dispatch({ type: 'decrease', payload: COUNT_INCREMENT });
                }}
            />
           <Text>Current Count: {state.counter}</Text>
        </View>
    </View>
};

const styles = StyleSheet.create({});

export default CounterScreen;