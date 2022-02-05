import { FlatList, Text, View } from 'react-native';
import { useContext } from 'react';

import { StyleContext } from '../StyleContext';

export default function History({navigation, history}) {
    const styles = useContext(StyleContext);

    return (
        <View style={styles.container}>
            <Text>History</Text>
            <FlatList
                data={history}
                renderItem={ ({item}) => <Text>{item.key}</Text> }
                keyExtractor={ (item, index) => index.toString() }
            />
        </View>
    );

}