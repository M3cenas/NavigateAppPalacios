import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

const OrderItem = ({data, onDelete, onDetails}) => {
  const {date, Id, total} = data;
  console.log(data);
  const formatDate = time => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>{formatDate(date)}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.total}>total: $ {total}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => onDetails(Id)}>
            <IonicIcons name="list-outline" size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDelete(Id)}>
            <IonicIcons name="trash-outline" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;
