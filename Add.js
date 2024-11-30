import React, {useState} from 'react'
import {View, ScrollView, TextInput, TouchableOpacity, Text, Alert, StyleSheet} from 'react-native';
import {datasource} from './Data.js';

const Add = ({navigation}) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={{flex: 1}}>
                <Text style={[styles.inputtext]}>Enter Item:</Text>
                <TextInput
                    style={[styles.row, styles.input]}
                    onChangeText={(text) => setName(text)}
                />
                <Text style={[styles.inputtext]}>Enter Quantity:</Text>
                <TextInput
                    style={[styles.row, styles.input]}
                    value={quantity.toString()}
                    keyboardType="number-pad"
                    onChangeText={(text) => setQuantity(parseInt(text) || 0)}
                />
                <Text style={[styles.inputtext]}>Enter Price:</Text>
                <TextInput
                    style={[styles.row, styles.input]}
                    value={price.toFixed(2).toString()}
                    keyboardType="decimal-pad"
                    onChangeText={(text) => setPrice(parseFloat(text) || 0)}
                />
            </View>
            </ScrollView>
            <View style={{marginBottom: 20}}>
                <TouchableOpacity
                    style={[styles.row, {backgroundColor: 'lime'}]}
                    onPress={()=>{
                        let item = {name:name,
                            quantity:quantity, price:price}
                        if (name.trim() === "") {
                            Alert.alert("Warning!",
                                "Item name must not be empty.")
                        }
                        else if (quantity <= 0 || price <= 0) {
                            Alert.alert("Warning!",
                                "Quantity and Price must be more than zero.")
                        }
                        if (name.trim() !== "" && quantity > 0 && price > 0) {
                            datasource.push(item);
                            navigation.navigate("Home")
                        }
                    }}>
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
        padding: 20,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'skyblue'
    },
    inputtext: {
        fontSize: 20,
        margin: 20
    },
    input: {
        fontSize: 20,
        borderWidth: 1,
    },
    buttontext: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center'
    }
});
