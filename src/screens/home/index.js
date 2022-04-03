import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import AlbumGrid from '../../components/molecules/album-grid/index';
import {GENRES} from '../../constants/genres';

const Home = ({navigation}) => {
  const handleSelectCategory = Album => {
    navigation.navigate('Album', {
      id: Album.id,
      name: Album.name,
    });
  };
  const renderItem = ({item}) => (
    <AlbumGrid item={item} onSelected={handleSelectCategory} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={GENRES}
        keyExtractor={item => item.Id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;
