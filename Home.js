import React from 'react'
import {View, TouchableOpacity, Text, FlatList, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {datasource} from './Data.js';

const Home = ({navigation}) => {
  let total = 0;
  for (let i = 0; i < datasource.length; i++) {
      total += datasource[i].quantity * datasource[i].price;
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
          style={[styles.row, {justifyContent: 'center', marginBottom: 20}]}
          onPress={()=> {
            navigation.navigate('Add')
          }}>
          <Icon name="plus" size={35} color='darkgreen' />
      </TouchableOpacity>
      <FlatList data={datasource} renderItem={renderItem} />
        <View style={[styles.row, {marginTop: 20}]}>
            <Text style={styles.totaltext}>Total Price</Text>
            <Text style={styles.totaltext}>${total.toFixed(2)}</Text>
        </View>
    </View>
  );
}

export default Home;

const renderItem = ({item}) => {
  return (
      <View style={[styles.row, {marginTop: 20, marginBottom: 20}]}>
          <Text style={styles.datatext}>{item.name}</Text>
          <Text style={styles.datatext}>{item.quantity}</Text>
          <Text style={styles.datatext}>${item.price.toFixed(2)}</Text>
            <View style={styles.column}>
              <TouchableOpacity
                  style={{flex: 1, marginBottom: 20}}>
                  <Icon name="pen-to-square" size={35} color='orange' />
              </TouchableOpacity>
              <TouchableOpacity
                  style={{flex: 1, marginBottom: 20}}>
                  <Icon name="trash-can" size={35} color='red' />
              </TouchableOpacity>
            </View>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        marginTop: 30
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 20,
        backgroundColor: 'lime',
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    datatext: {
        flex: 1,
        fontSize: 15,
        marginRight: 10
    },
    totaltext: {
        fontSize: 30,
        fontWeight: 'bold',
        marginRight: 20
    }
});