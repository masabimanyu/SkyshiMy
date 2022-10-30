import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styled} from './styled';
import moment from 'moment';

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
const CardList = ({data}: cardType) => {
  // const [toggleCheckBox, setToggleCheckBox] = useState(false);
  // const [checkboxState, setCheckboxState] = useState(false);

  // const [checked, setChecked] = useState(false);

  // useEffect(() => {
  //   data
  //     ?.filter(x => x)
  //     .map(obj => {
  //       setValue(obj);
  //     });
  // }, []);

  const yahya = moment(data?.created_at).format('D MMMM YYYY');

  console.log('jawa', data);
  console.log('value', data);
  console.log('temenan', yahya);

  return (
    <View>
      <View style={[styled.container, styled.shadowProp]} key={data?.id}>
        <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
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
        </View>
      </View>
    </View>
  );
};

export default CardList;
