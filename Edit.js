import React, {useState} from 'react'
import {View, ScrollView, Text, TextInput, TouchableOpacity, Alert, StyleSheet} from 'react-native';
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
                    placeholder="Item Name"
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
                    keyboardType="numeric"
                    onChangeText={(text) => setPrice(parseFloat(text) || 0)}
                />
            </View>
            </ScrollView>
            <View style={{marginBottom: 20}}>
                <TouchableOpacity
                    style={[styles.row, {backgroundColor: 'lime'}]}
                    onPress={()=> {
                        if (name.trim() === "") {
                            Alert.alert("Warning!",
                                "Item name must not be empty.")
                        }
                        else if (quantity <= 0 || price <= 0) {
                            Alert.alert("Warning!",
                                "Quantity and Price must be more than zero.")
                        }
                        if (name.trim() !== "") {
                            datasource[route.params.index].name = name;
                        }
                        if (quantity > 0) {
                            datasource[route.params.index].quantity = quantity;
                        }
                        if (price > 0) {
                            datasource[route.params.index].price = price;
                        }
                        if (name.trim() !== "" && quantity > 0 && price > 0) {
                            navigation.navigate('Home')
                        }
                    }}>
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
        borderWidth: 1
    },
    buttontext: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center'
    }
});
