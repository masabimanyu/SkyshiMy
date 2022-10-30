/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  StatusBar,
  StyleSheet,
  RefreshControl,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Header from '../../components/Moleculs/Header';
import Button from '../../components/Atoms/Button';
import {styled} from './styled';
import FastImage from 'react-native-fast-image';
import {alert, cancel, emptyStateList, filter} from '../../Assets/images';
import axios from 'axios';
import {Api} from '../../utils/api';
import CardList from '../../components/Moleculs/Card/List';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {set} from 'react-native-reanimated';

const Details = ({route, navigation}: typeDetails) => {
  const {value} = route.params;
  const [refreshing, setRefreshing] = useState(false);

  const [data, setData] = useState('');
  const [item, setItem] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalSuccessVisible, setModalSuccessVisible] = useState(false);
  const [isModalDeleted, setIsModalDeleted] = useState(false);

  const [itemTitle, onChangeText] = useState();

  const [openLevel, setOpenLevel] = useState(false);
  const [valueLevel, setValueLevel] = useState('');
  const [itemsLevel, setItemsLevel] = useState([
    {label: 'Very Low', value: 'very-low'},
    {label: 'Low', value: 'low'},
    {label: 'Normal', value: 'normal'},
    {label: 'High', value: 'high'},
    {label: 'Very High', value: 'very-high'},
  ]);

  const obj = value?.item;

  useEffect(() => {
    getData(obj);
    dataMap();
  }, []);

  const dataMap = () => {
    {
      data.map(obj => {
        return setItem(obj);
      });
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleModalDeleted = () => {
    setIsModalDeleted(!isModalDeleted);
  };

  const toggleModalSuccess = () => {
    getData(obj);
    setModalSuccessVisible(!isModalSuccessVisible);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData(obj).then(() => setRefreshing(false));
  }, []);

  console.log('makasar', item);

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
        onChangeText('');
        toggleModalSuccess();
        getData(response?.data);
        console.log('sukses', response?.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  const getData = async (obj: string) => {
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

  const deletedList = async (obj: cardType) => {
    axios
      .delete(` ${Api}todo-items/${obj?.id}`)
      .then(response => {
        if (response?.status === 200) {
          getData();
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

  console.log('sudah', value?.item);
  console.log('saya', data);

  return (
    <View style={styled.container}>
      <Header title="New Activity" onBack={() => navigation.goBack()} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <TextInput
          style={data?.length > 0 ? styled.title : styled.titleNull}
          value={value?.item.title}
        />
        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 10,
          }}>
          <Icon name="edit" size={18} color="#A4A4A4" />
        </View>
      </View>
      <View style={styled.titleContainer}>
        <View
          style={{
            borderRadius: 90,
            height: 35,
            width: 35,
            borderColor: '#A4A4A4',
            borderWidth: 0.6,
            marginHorizontal: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              paddingVertical: 8,
              marginHorizontal: -10,
            }}>
            <Icon name="arrowup" size={15} color="#A4A4A4" />
            <Icon name="arrowdown" size={15} color="#A4A4A4" />
          </View>
        </View>
        <Button
          accessibilityLabel="modal-add-save-button"
          icon="+"
          title="Tambah"
          disabled={false}
          onPress={toggleModal}
        />
      </View>
      {/* Modal Added Item */}
      <Modal
        accessibilityLabel="modal-add-item"
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
            <Text style={{fontSize: 22, color: '#111111', fontWeight: '600'}}>
              Tambah List Item
            </Text>
            <TouchableOpacity onPress={toggleModal} activeOpacity={0.8}>
              <Icon name="close" size={20} color="#11111" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'column',
              paddingVertical: 6,
              paddingHorizontal: 5,
            }}>
            <Text style={styled.titleModal}>NAMA LIST ITEM</Text>
            <TextInput
              style={styled.input}
              placeholder="Tambahkan Nama List Item"
              onChangeText={onChangeText}
              value={itemTitle}
            />
            <Text style={styled.titleModal}>PRIORITY</Text>
            <View
              style={{
                borderColor: '#e5e5e5',
                paddingHorizontal: 15,
                marginTop: 10,
                backgroundColor: '#fff',
              }}>
              <DropDownPicker
                theme="LIGHT"
                style={{
                  backgroundColor: '#fff',
                  borderColor: '#e5e5e5',
                }}
                dropDownContainerStyle={{
                  backgroundColor: '#fff',
                  opacity: 200,
                  borderColor: '#e5e5e5',
                }}
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
                accessibilityLabel="modal-add-save-button"
                title="Simpan"
                onPress={createNewItem}
                disabled={itemTitle && valueLevel ? false : true}
              />
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal titleSuccess */}
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
            <TouchableOpacity onPress={toggleModalSuccess}>
              <View style={{paddingHorizontal: 10, justifyContent: 'flex-end'}}>
                <Icon name="close" size={18} color="#000" />
              </View>
            </TouchableOpacity>
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
      {/* Modal Deleted */}
      <Modal
        accessibilityLabel="Deleted Activity"
        isVisible={isModalDeleted}
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
            height: 255,
            width: 320,
            paddingVertical: 10,
            backgroundColor: '#fff',
          }}>
          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                alignSelf: 'center',
                // marginVertical: 30,
                paddingVertical: 20,
                paddingHorizontal: 20,
              }}>
              <FastImage
                style={{
                  justifyContent: 'center',
                  width: 66,
                  alignContent: 'center',
                  alignSelf: 'center',
                  height: 61,
                }}
                source={alert}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styled.titleDelete}>
                Apakah anda yakin menghapus List "{obj?.title}" ?
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 40,
                }}>
                <Button
                  accessibilityLabel="modal-add-save-button"
                  icon=""
                  title="Batal"
                  disabled={false}
                  onPress={toggleModalDeleted}
                />
                <Button
                  accessibilityLabel="modal-add-save-button"
                  icon=""
                  title="Hapus"
                  disabled={false}
                  onPress={deletedList}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        vertical={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 0,
          paddingVertical: 0,
        }}>
        {data?.length > 0 ? (
          <>
            {data.map(obj => {
              return (
                <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
                  <CardList
                    accessibilityLabel="todo-item"
                    data={obj}
                    onPress={toggleModalDeleted}
                  />
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
      </ScrollView>
    </View>
  );
};

export default Details;
