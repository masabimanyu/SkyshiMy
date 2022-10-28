import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styled} from './styled';
import {DefaultNavigationProps} from '../../types';
import {useNavigation} from '@react-navigation/native';

interface ButtonType {
  title?: string;
  icon?: string;
  navigation: DefaultNavigationProps<'default'>;
}
const Button = ({icon, title}: ButtonType) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styled.container}
      accessibilityLabel="activity-add-button"
      onPress={() => navigation.navigate('Details')}>
      <View style={styled.containerTitle}>
        <Text style={styled.iconTitle}>{icon && icon}</Text>
        <Text style={styled.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
