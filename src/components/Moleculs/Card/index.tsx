import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styled} from './styled';
import moment from 'moment'; // 292.3K (gzipped: 71.6K)
import {useNavigation} from '@react-navigation/native';

interface cardType {
  data: cardDataType;
}
interface cardDataType {
  created_at?: string;
  title?: string;
  id?: string;
}

const Card = ({data}: cardType) => {
  const [value, setValue] = useState<cardType>();
  // useEffect(() => {
  //   data
  //     ?.filter(x => x)
  //     .map(obj => {
  //       setValue(obj);
  //     });
  // }, []);

  const yahya = moment(data?.created_at).format('D MMMM YYYY');

  console.log('jawa', data);
  console.log('value', value);
  console.log('temenan', yahya);

  return (
    <View style={[styled.container, styled.shadowProp]} key={value?.id}>
      <Text style={styled.title} numberOfLines={2}>
        {data?.title}
      </Text>
      <Text style={{paddingHorizontal: 13, marginBottom: 10}} numberOfLines={2}>
        {yahya}
      </Text>
    </View>
  );
};

export default Card;
