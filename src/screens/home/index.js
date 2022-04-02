import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import CategoryGrid from '../../components/molecules/category-grid/index';
import {CATEGORIES} from '../../constants/categories';

const Home = ({navigation}) => {
  const handleSelectCategory = Categories => {
    navigation.navigate('Categories', {
      id: Categories.id,
      title: Categories.name,
    });
  };
  const renderItem = ({item}) => (
    <CategoryGrid item={item} onSelected={handleSelectCategory} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.Id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;
