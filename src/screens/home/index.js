import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import GenreGrid from '../../components/molecules/genre-grid/index';
import {GENRES} from '../../constants/genres';

const Home = ({navigation}) => {
  const handleSelectGenre = genre => {
    navigation.navigate('Album', {
      Id: genre.Id,
      name: genre.name,
    });
  };
  const renderItem = ({item}) => (
    <GenreGrid item={item} onSelected={handleSelectGenre} />
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
