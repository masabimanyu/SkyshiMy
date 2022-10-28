import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../../components/Atoms/Header';
import Button from '../../components/Moleculs/Button';
import {styled} from './styled';

const Details = ({navigation: {goBack}}) => {
  return (
    <View style={styled.container}>
      <Header title="TO DO LIST APP" />
      <View style={styled.titleContainer}>
        <Text style={styled.title}>Activity</Text>
        <Button icon="+" title="Tambah" />
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        accessibilityLabel="activity-add-button"
        onPress={() => goBack()}>
        <View>
          <Text style={styled.title}>Details</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
