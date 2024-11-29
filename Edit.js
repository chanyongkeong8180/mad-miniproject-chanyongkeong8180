import React, {useState} from 'react'
import {View, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {datasource} from './Data.js';

const Edit = ({navigation, route}) => {
    const [name, setName] = useState(route.params.name);
    const [quantity, setQuantity] = useState(route.params.quantity);
    const [price, setPrice] = useState(route.params.price);
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <TextInput
                    style={[styles.row, {borderWidth: 1}]}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={[styles.row, {borderWidth: 1}]}
                    value={quantity.toString()}
                    keyboardType="number-pad"
                    onChangeText={(text) => setQuantity(parseInt(text))}
                />
                <TextInput
                    style={[styles.row, {borderWidth: 1}]}
                    value={price.toFixed(2).toString()}
                    keyboardType="decimal-pad"
                    onChangeText={(text) => setPrice(parseFloat(text))}
                />
            </View>
            <View style={{marginBottom: 20}}>
                <TouchableOpacity
                    style={[styles.row, {backgroundColor: 'lime'}]}>
                    <Text style={styles.buttontext}>Confirm Changes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.row, {backgroundColor: 'red'}]}
                    onPress = {()=>{
                        navigation.navigate("Home")
                    }}>
                    <Text style={styles.buttontext}>Cancel Changes</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Edit;

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
