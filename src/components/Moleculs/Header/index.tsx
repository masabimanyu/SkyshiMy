import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styled} from './styled';
import {HeaderType} from '../../../types/headerTypes';
import {backButton} from '../../../Assets/images';
import FastImage from 'react-native-fast-image';

const Header = ({onBack, title}: HeaderType) => {
  return (
    <View style={styled.container}>
      {onBack && (
        <TouchableOpacity
          activeOpacity={0.7}
          accessibilityLabel="activity-add-button"
          onPress={onBack}>
          <View
            style={{
              marginHorizontal: 20,
              paddingVertical: 22,
            }}>
            <FastImage
              style={{
                width: 24,
                height: 28,
              }}
              source={backButton}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        </TouchableOpacity>
      )}
      <Text style={styled.title}>{title}</Text>
    </View>
  );
};

export default Header;
