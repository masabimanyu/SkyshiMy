import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styled} from './styled';
import moment from 'moment';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import {Api} from '../../../../utils/api';

// import {CheckBox, Image} from 'react-native-elements';
// import {checkedImg} from '../../../../Assets/images';
// import CheckBox from 'react-native-check-box';
// import BouncyCheckbox from 'react-native-bouncy-checkbox';
// import CheckBox from 'react-native-check-box'
// import Checkbox from 'react-native-modest-checkbox';
// import Icon from 'react-native-vector-icons';
interface cardType {
  created_at?: string;
  title?: string;
  id?: string;
}
const CardList = ({accessibilityLabel, onPress, data}: cardType) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const yahya = moment(data?.created_at).format('D MMMM YYYY');

  console.log('jawa', data);
  console.log('value check', toggleCheckBox, data?.id);
  console.log('temenan', yahya);

  const deletedList = async (data: cardType) => {
    axios
      .delete(` ${Api}todo-items/?id=${data?.id}`)
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
  return (
    <View>
      <View style={[styled.container, styled.shadowProp]} key={data?.id}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignContent: 'space-between',
            alignItems: 'stretch',
            alignSelf: 'stretch',
          }}>
          <View style={styled.checkboxWrapper}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
          </View>
          <View
            style={[
              styled.dot,
              data?.priority === 'very-high'
                ? styled.dotHigh
                : data?.priority === 'high'
                ? styled.dotMidHigh
                : data?.priority === 'normal'
                ? styled.dotNormal
                : styled.dotLow,
            ]}
          />

          <Text style={styled.title} numberOfLines={1}>
            {data?.title}
          </Text>
          <TouchableOpacity
            accessibilityLabel={accessibilityLabel}
            onPress={onPress}
            style={styled.checkboxWrapper}>
            <Icon name="delete" size={15} color="#A4A4A4" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardList;
