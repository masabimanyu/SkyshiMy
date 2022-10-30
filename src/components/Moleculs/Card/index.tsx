import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styled} from './styled';
import moment from 'moment';
import axios from 'axios';
import {Api} from '../../../utils/api';
import Icon from 'react-native-vector-icons/dist/AntDesign';

interface cardType {
  data: cardDataType;
}
interface cardDataType {
  created_at?: string;
  title?: string;
  id?: string;
  accessibilityLabel: string;
  onPress: string;
}

const Card = ({accessibilityLabel, data}: cardType) => {
  const [value, setValue] = useState<cardType>();

  const deletedList = async (data: cardType) => {
    axios
      .delete(` ${Api}activity-groups/?id=${data?.id}`)
      .then(response => {
        if (response?.status === 200) {
          console.log('sukses delete', response?.status);
        } else {
          console.log('delete gagal', response?.status);
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  const yahya = moment(data?.created_at).format('D MMMM YYYY');

  console.log('jawa card', data?.id);
  console.log('value', value);
  console.log('temenan', yahya);

  return (
    <View style={[styled.container, styled.shadowProp]} key={data?.id}>
      <Text style={styled.title} numberOfLines={2}>
        {data?.title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 13,
          marginBottom: 10,
          alignContent: 'center',
          justifyContent: 'space-between',
        }}>
        <Text numberOfLines={2}>{yahya}</Text>
        <TouchableOpacity
          accessibilityLabel={accessibilityLabel}
          onPress={deletedList}
          style={styled.checkboxWrapper}>
          <Icon name="delete" size={15} color="#A4A4A4" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
