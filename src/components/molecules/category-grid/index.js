import React from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';

export const CategoryGrid = ({item, onSeleted}) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.container}>
      <TouchableComponent
        style={{...styles.touchable, ...{backgroundColor: item.color}}}
        onPress={() => onSeleted()}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

export default CategoryGrid;
