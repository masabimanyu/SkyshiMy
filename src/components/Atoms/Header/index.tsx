import {Text, View} from 'react-native';
import React from 'react';
import {styled} from './styled';
import {HeaderType} from '../../../types/headerTypes';

const Header = ({title}: HeaderType) => {
  return (
    <View style={styled.container}>
      <Text style={styled.title}>{title}</Text>
    </View>
  );
};

export default Header;
