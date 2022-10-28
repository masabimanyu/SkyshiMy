import {StatusBar, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Atoms/Header';
import {styled} from './styled';
import Button from '../../components/Moleculs/Button';
import FastImage from 'react-native-fast-image';
import {emptyState} from '../../Assets/images';

const Home = () => {
  return (
    <View style={styled.container}>
      <Header title="TO DO LIST APP" />
      <View style={styled.titleContainer}>
        <Text style={styled.title}>Activity</Text>
        <Button icon="+" title="Tambah" />
      </View>
      <View
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          paddingVertical: StatusBar.currentHeight * 5,
          alignSelf: 'center',
        }}>
        <FastImage
          style={{
            width: 319,
            height: 204,
          }}
          source={emptyState}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text
          style={{
            textAlign: 'center',
            marginTop: 35,
            fontWeight: '800',
            fontSize: 18,
          }}>
          Buat Activity pertamamu
        </Text>
      </View>
    </View>
  );
};

export default Home;
