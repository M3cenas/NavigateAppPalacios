import React from 'react';
import {useSelector, connect, useDispatch} from 'react-redux';
import {addItem} from '../../store/actions/cart.actions';
import {View, Text, Image, Button} from 'react-native';
import {colors} from '../../constants/themes';
import {styles} from './styles';

const AlbumDetail = ({navigation, route}) => {
  const dispatch = useDispatch();
  const album = useSelector(state => state.albums.selectedAlbum);
  const {name, artist, coverArt, releaseDate} = album;

  const handleAddToCart = () => dispatch(addItem(album));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Image style={styles.coverArt} source={coverArt} />
      <Text>{artist}</Text>
      <Text>{releaseDate}</Text>
      <Button
        title="Order now"
        onPress={() => handleAddToCart()}
        color={colors.primaryColor}
      />
      <Button
        title="Cart"
        onPress={() => navigation.navigate('Cart')}
        color="#212121"
      />
    </View>
  );
};

export default connect()(AlbumDetail);
