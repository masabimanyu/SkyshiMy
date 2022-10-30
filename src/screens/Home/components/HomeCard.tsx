import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../../../components/Moleculs/Card';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {Api} from '../../../utils/api';

interface HomeCardType {
  id?: string;
  title?: string;
  created_at?: string;
}
const HomeCard = ({data}: HomeCardType) => {
  const navigation = useNavigation();

  const [obj, setObj] = useState<HomeCardType>();
  const [value, setValue] = useState<HomeCardType>();

  console.log('pasarkuda', value);
  console.log('sasasa', obj);

  useEffect(() => {
    dataSetUp();
  }, []);

  const dataSetUp = async () => {
    data
      ?.filter(item => item.id)
      .map(saya => {
        setObj(saya);
      });
  };

  const onPressCard = (item: string): void => {
    navigation.navigate('Details', {value: {item}});
    console.log('Berhasil Pindah', item);
  };

  return (
    <View>
      <View
        style={{
          paddingHorizontal: 20,
          alignContent: 'space-between',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {data?.map((item, index) => {
          return (
            <View style={{marginVertical: 10, marginHorizontal: 10}}>
              <TouchableOpacity onPress={() => onPressCard(item)}>
                <Card data={item} accessibilityLabel="activity-item" />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({});
