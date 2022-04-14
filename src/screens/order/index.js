import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, connect, useSelector} from 'react-redux';
import OrderItem from '../../components/molecules/order-item';
import {getOrders, removeOrder} from '../../store/actions/order.action';
import {styles} from './styles';

const Order = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.userId);
  const orders = useSelector(state => state.order.orders);
  console.log(orders.items);
  useEffect(() => {
    dispatch(getOrders(userId));
  }, []);

  const onDelete = Id => {
    dispatch(removeOrder(Id));
  };

  const onDetails = Id => {
    console.log(Id);
  };

  const renderItem = ({item}) => (
    <OrderItem data={item} onDelete={onDelete} onDetails={onDetails} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={item => item.Id.toString()}
      />
    </View>
  );
};

export default connect()(Order);
