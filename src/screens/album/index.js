import React, {useEffect} from 'react';

import {View, FlatList} from 'react-native';
import {styles} from './styles';
import {ALBUMS} from '../../constants/albums';
import {useSelector, useDispatch, connect} from 'react-redux';
import {filteredAlbums, selectAlbum} from '../../store/actions/album.action';

import AlbumGrid from '../../components/molecules/album-grid';

const Album = ({navigation, route}) => {
  const dispatch = useDispatch();
  const genreAlbum = useSelector(state => state.albums.filteredAlbums);
  const selectedGenre = useSelector(state => state.genres.selectedGenre);
  console.log(genreAlbum);
  const handleSelectGenre = genre => {
    dispatch(selectAlbum(genre.Id));
    navigation.navigate('AlbumDetail', {name: genre.name});
  };
  const renderItem = ({item}) => (
    <AlbumGrid item={item} onSelected={handleSelectGenre} />
  );

  useEffect(() => {
    dispatch(filteredAlbums(selectedGenre.Id));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={genreAlbum}
        keyExtractor={item => item.Id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default connect()(Album);
