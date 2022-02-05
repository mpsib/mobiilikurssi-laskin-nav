import { NavigationContainer } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { Button, TextInput, View, Text } from 'react-native';

import { StyleContext } from '../StyleContext';


export default function Calculator({navigation, appendHistory}) {
    const styles = useContext(StyleContext);

    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');
    const [result, setResult] = useState('');

    
    const calculate = (operation) => {
        let res;
        if (operation === '+'){
        res = Number(val1) + Number(val2);
        } else if (operation === '-'){
        res = Number(val1) - Number(val2);
        }
        setResult(res);
        let historyString = val1 + ' ' + operation + ' ' + val2 + ' = ' + res;
        appendHistory(historyString);
    }
    
    return (
        <View style={styles.container}>
            <Text>Result: {result}</Text>
                
            <TextInput
                style={{width: 200, borderColor:'gray', borderWidth:1 }}
                onChangeText={text => setVal1(text)}
                value={val1}
                keyboardType={'decimal-pad'}
                />
            <TextInput
                style={{width: 200, borderColor:'gray', borderWidth:1 }}
                onChangeText={text => setVal2(text)}
                value={val2}
                keyboardType={'decimal-pad'}
                />
            <View style={styles.horizontal}>
                <View style={styles.button}>
                    <Button onPress={() => calculate('+')} title="+"/>
                </View>
                <View style={styles.button}>
                    <Button onPress={() => calculate('-')} title="-"/>
                </View>
                <View style={styles.wideButton}>
                    <Button onPress={ () => navigation.navigate('History') }
                      title="history"/>
                </View>
                
            </View>
        </View>
    );

}