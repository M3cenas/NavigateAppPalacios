import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import {useSelector, useDispatch, connect} from 'react-redux';
import GenreGrid from '../../components/molecules/genre-grid/index';
import {selectedGenre} from '../../store/actions/genre.action';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const genres = useSelector(state => state.genres.genres);
  const handleSelectGenre = genre => {
    console.log(genre.Id);
    dispatch(selectedGenre(genre.Id));

    navigation.navigate('Album', {name: genre.name});
  };
  const renderItem = ({item}) => (
    <GenreGrid item={item} onSelected={handleSelectGenre} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={genres}
        keyExtractor={item => item.Id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default connect()(Home);
