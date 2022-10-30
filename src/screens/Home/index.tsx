/* eslint-disable react-native/no-inline-styles */
import {
  RefreshControl,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Header from '../../components/Moleculs/Header';
import {styled} from './styled';
import Button from '../../components/Atoms/Button';
import FastImage from 'react-native-fast-image';
import {cancel, emptyState} from '../../Assets/images';
import {Api} from '../../utils/api';
import Card from '../../components/Moleculs/Card';
import HomeCard from './components/HomeCard';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const axios = require('axios');

const Home = () => {
  const [obj, setObj] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalSuccessVisible, setModalSuccessVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [itemTitle, onChangeText] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleModalSuccess = () => {
    setModalSuccessVisible(!isModalSuccessVisible);
  };

  useEffect(() => {
    if (isModalSuccessVisible) {
      setTimeout(() => {
        toggleModalSuccess();
      }, 80000);
    }
    getData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData().then(() => setRefreshing(false));
  }, []);

  const createNew = async () => {
    let body = {
      title: itemTitle,
      email: 'abi@testing.os',
    };
    axios
      .post(` ${Api}activity-groups`, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        toggleModal();
        setModalSuccessVisible(true);
        console.log('sukses', response?.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  const getData = async () => {
    axios
      .get(`${Api}activity-groups?email=abi@testing.os`)
      .then(function (response) {
        setObj(response?.data?.data);
        onChangeText('');
        console.log('sukses', response?.data);
      })
      .catch(function (error) {
        console.log(error);
      }, []);
  };

  return (
    <View style={styled.container}>
      <Header title="TO DO LIST APP" goBack={false} />
      <View style={styled.titleContainer}>
        <Text style={styled.title}>Activity</Text>
        <Button
          accessibilityLabel="activity-add-button"
          icon="+"
          title="Tambah"
          onPress={toggleModal}
        />
      </View>
      {obj?.length > 0 ? (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          vertical={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{margin: 0, flexDirection: 'row'}}>
          <HomeCard data={obj} />
        </ScrollView>
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
      )}
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
            height: 220,
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
              <Icon name="close" size={18} color="#111111" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'column',
              paddingVertical: 6,
              paddingHorizontal: 5,
            }}>
            <Text style={styled.titleModal}>Nama List Activity</Text>
            <TextInput
              style={styled.input}
              placeholder="Tambahkan Nama Activity"
              onChangeText={valueActivity => onChangeText(valueActivity)}
              value={itemTitle}
            />
            <View
              style={{
                width: 80,
                marginRight: 10,
                justifyContent: 'flex-start',
                // paddingHorizontal: '10',
                alignSelf: 'flex-end',
              }}>
              <Button
                accessibilityLabel="modal-add-save-button"
                title="Simpan"
                onPress={createNew}
                disabled={itemTitle ? false : true}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        accessibilityLabel="modal-information"
        isVisible={isModalSuccessVisible}
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
            height: 85,
            width: 320,
            paddingVertical: 10,
            backgroundColor: '#fff',
          }}>
          <View style={{flexDirection: 'column'}}>
            <View style={{paddingHorizontal: 10, justifyContent: 'flex-end'}}>
              <Icon name="close" size={18} color="#000" />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'center',
                alignSelf: 'center',
                marginVertical: 5,
                paddingHorizontal: 15,
              }}>
              <Icon name="infocirlceo" size={18} color="#00A790" />
              <Text style={styled.titleSuccess}>
                Activity Berhasil Ditambahkan
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;
