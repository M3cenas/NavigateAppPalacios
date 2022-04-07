import React from 'react';
import {View, Text, Flatlist} from 'react-native';
import {connect, useSelector} from 'react-redux';
import CartItem from '../../components/molecules/cart-item';

const Cart = ({navigation}) => {
  const items = useSelector(state => state.cart.item);
  const total = useSelector(state => state.cart.total);

  const handleDeleteItem = Id => console.log(Id);
  const renderItem = ({item}) => (
    <CartItem item={item} onDelete={handleDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={item => item.Id.toString()}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.price}>${total}</Text>
      </View>
    </View>
  );
};

export default connect()(Cart);
