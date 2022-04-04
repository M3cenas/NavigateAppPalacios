import React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './styles';
import {ALBUMS} from '../../constants/albums';
import AlbumGrid from '../../components/molecules/album-grid/index';

const Album = ({navigation, route}) => {
  const {Id} = route.params;
  const selectedGenre = ALBUMS.filter(albums => albums.genre === Id);
  const handleSelectAlbum = album => {
    navigation.navigate('AlbumDetail', {album});
  };
  const renderItem = ({item}) => (
    <AlbumGrid item={item} onSelected={handleSelectAlbum} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={selectedGenre}
        keyExtractor={item => item.Id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Album;
