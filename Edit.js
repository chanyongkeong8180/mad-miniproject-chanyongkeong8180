import React, {useState} from 'react'
import {View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, } from 'react-native';
import {datasource} from './Data.js';

const Edit = ({navigation, route}) => {
    const [name, setName] = useState(route.params.name);
    const [quantity, setQuantity] = useState(route.params.quantity);
    const [price, setPrice] = useState(route.params.price);
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={{flex: 1}}>
                <Text style={[styles.inputtext]}>Enter Item:</Text>
                <TextInput
                    style={[styles.row, styles.input]}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Text style={[styles.inputtext]}>Enter Quantity:</Text>
                <TextInput
                    style={[styles.row, styles.input]}
                    value={quantity.toString()}
                    keyboardType="number-pad"
                    onChangeText={(text) => setQuantity(parseInt(text))}
                />
                <Text style={[styles.inputtext]}>Enter Price:</Text>
                <TextInput
                    style={[styles.row, styles.input]}
                    value={price.toFixed(2).toString()}
                    keyboardType="decimal-pad"
                    onChangeText={(text) => setPrice(parseFloat(text))}
                />
            </View>
            </ScrollView>
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
    inputtext: {
        fontSize: 20,
        margin: 20
    },
    input: {
        fontSize: 20,
        borderWidth: 1
    },
    buttontext: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center'
    }
});
