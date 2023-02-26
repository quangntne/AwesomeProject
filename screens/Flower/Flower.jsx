import React from 'react';
import { View, Text } from 'react-native';

import * as styles from './Flower.styles';


const Flower = (props) => {
  const {
    style = '',
  } = props;
  
  console.log(props);

  return (
    <View style={[styles.wrapper, style]}>
      <Text>Flower</Text>
    </View>
  );
};

export default Flower;

