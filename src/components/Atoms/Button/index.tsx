import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styled} from './styled';

interface ButtonType {
  title?: string;
  icon?: string;
  disabled: boolean;
  onPress: string;
}
const Button = ({icon, title, onPress, disabled}: ButtonType) => {
  return (
    <TouchableOpacity
      style={disabled ? styled.containerDisable : styled.container}
      onPress={onPress}
      disabled={disabled}>
      <View style={styled.containerTitle}>
        <Text style={styled.iconTitle}>{icon && icon}</Text>
        <Text style={styled.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
