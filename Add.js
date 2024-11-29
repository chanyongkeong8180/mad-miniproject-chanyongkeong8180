import React, {useState} from 'react'
import {View, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {datasource} from './Data.js';

const Add = ({navigation}) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(1);
    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.row, {borderWidth: 1}]}
                placeholder="Enter Item"
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={[styles.row, {borderWidth: 1}]}
                placeholder="Enter Quantity"
                keyboardType="number-pad"
                onChangeText={(text) => setQuantity(parseInt(text))}
            />
            <TextInput
                style={[styles.row, {borderWidth: 1}]}
                placeholder="Enter Price"
                keyboardType="decimal-pad"
                onChangeText={(text) => setPrice(parseFloat(text))}
            />
            <View style={{marginTop: 80, marginBottom: 20}}>
                <TouchableOpacity
                    style={[styles.row, {backgroundColor: 'lime'}]}>
                    <Text style={styles.buttontext}>Add Item</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.row, {backgroundColor: 'red'}]}
                    onPress = {()=>{
                        navigation.navigate("Home")
                    }}>
                    <Text style={styles.buttontext}>Back To List</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Add;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        marginTop: 30
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 20,
        padding: 20
    },
    buttontext: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center'
    }
});
