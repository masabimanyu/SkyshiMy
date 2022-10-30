/* eslint-disable react-native/no-inline-styles */
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Moleculs/Header';
import Button from '../../components/Atoms/Button';
import {styled} from './styled';
import FastImage from 'react-native-fast-image';
import {cancel, emptyStateList} from '../../Assets/images';
import axios from 'axios';
import {Api} from '../../utils/api';
import CardList from '../../components/Moleculs/Card/List';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';

const Details = ({route, navigation}: typeDetails) => {
  const {value} = route.params;
  const [data, setData] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [itemTitle, onChangeText] = useState();

  const [openLevel, setOpenLevel] = useState(false);
  const [valueLevel, setValueLevel] = useState(null);
  const [itemsLevel, setItemsLevel] = useState([
    {label: 'low', value: 'low'},
    {label: 'high', value: 'high'},
  ]);

  const obj = value?.item;

  useEffect(() => {
    handleNavigate(obj);
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  console.log('kalim', !valueLevel ? value?.item : obj);

  const createNewItem = async () => {
    let body = {
      activity_group_id: value?.item?.id,
      title: itemTitle,
      priority: valueLevel,
    };
    axios
      .post(` ${Api}todo-items`, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        toggleModal();
        handleNavigate(response?.data);
        console.log('sukses', response?.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  const handleNavigate = async (obj: string) => {
    axios
      .get(`${Api}activity-groups/${obj.id}`)
      .then(res => {
        setData(res?.data?.todo_items);
        console.log('sukses pindah', res?.data?.todo_items);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
  console.log('sudah', value?.item);
  console.log('saya', data);
  return (
    <View style={styled.container}>
      <Header title="New Activity" onBack={() => navigation.goBack()} />
      <View>
        <TextInput
          style={data?.length > 0 ? styled.title : styled.titleNull}
          value={value?.item.title}
        />
      </View>
      <View style={styled.titleContainer}>
        <View
          style={{
            borderRadius: 90,
            height: 32,
            width: 32,
            borderColor: '#888888',
            borderWidth: 0.6,
            marginHorizontal: 10,
          }}
        />
        <Button
          icon="+"
          title="Tambah"
          disabled={false}
          onPress={toggleModal}
        />
      </View>

      <Modal
        isVisible={isModalVisible}
        animationIn="fadeIn"
        animationOut="zoomOut"
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            borderRadius: 10,
            height: 320,
            width: 320,
            backgroundColor: '#fff',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              paddingVertical: 12,
              borderBottomColor: '#e5e5e5',
              borderBottomWidth: 1,
              marginBottom: 20,
            }}>
            <Text style={{fontSize: 20, color: '#111111', fontWeight: '600'}}>
              Tambah List Item
            </Text>
            <TouchableOpacity onPress={toggleModal} activeOpacity={0.8}>
              <FastImage
                style={{
                  width: 13,
                  height: 13,
                  paddingVertical: 10,
                }}
                source={cancel}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'column',
              paddingVertical: 6,
              paddingHorizontal: 5,
            }}>
            <Text style={styled.titleModal}>Nama List Item</Text>
            <TextInput
              style={styled.input}
              placeholder="Tambahkan Nama List Item"
              onChangeText={onChangeText}
              value={itemTitle}
            />
            <View
              style={{
                alignItems: 'center',
                borderColor: '#e5e5e5',
                justifyContent: 'center',
                paddingHorizontal: 15,
                backgroundColor: '#fff',
              }}>
              <DropDownPicker
                badgeDotColors={[
                  '#e76f51',
                  '#00b4d8',
                  '#e9c46a',
                  '#e76f51',
                  '#8ac926',
                  '#00b4d8',
                  '#e9c46a',
                ]}
                open={openLevel}
                value={valueLevel}
                items={itemsLevel}
                setOpen={setOpenLevel}
                setValue={setValueLevel}
                setItems={setItemsLevel}
              />
            </View>
            <View
              style={{
                width: 80,
                marginRight: 10,
                justifyContent: 'flex-end',
                marginTop: 20,
                alignSelf: 'flex-end',
              }}>
              <Button
                title="Simpan"
                onPress={createNewItem}
                disabled={itemTitle && valueLevel ? false : true}
              />
            </View>
          </View>
        </View>
      </Modal>

      {data?.length > 0 ? (
        <>
          {data.map(obj => {
            return (
              <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
                <CardList data={obj} />
              </View>
            );
          })}
        </>
      ) : (
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            paddingVertical: StatusBar.currentHeight * 5,
            alignSelf: 'center',
          }}>
          <FastImage
            style={{
              justifyContent: 'center',
              width: 300,
              alignSelf: 'center',
              height: 204,
            }}
            source={emptyStateList}
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
      )}
    </View>
  );
};

export default Details;
