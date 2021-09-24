import {ADD_EDU, ADD_PER, ADD_PHOTO, ADD_PRO} from '../constants';
import {Alert} from 'react-native';

export const addpersonalInfo = (info, navigation) => {
  Alert.alert('Success', 'Data Saved Successfully', [
    {text: 'OK', onPress: () => navigation.navigate('Resume')},
  ]);
  return {
    type: ADD_PER,
    payload: info,
  };
};

export const addProfessionalInformation = (info, navigation) => {
  Alert.alert('Success', 'Data Saved Successfully', [
    {text: 'OK', onPress: () => navigation.navigate('Resume')},
  ]);
  return {
    type: ADD_PRO,
    payload: info,
  };
};

export const addEducationalInformation = (info, navigation) => {
  Alert.alert('Success', 'Data Saved Successfully', [
    {text: 'OK', onPress: () => navigation.navigate('Resume')},
  ]);
  return {
    type: ADD_EDU,
    payload: info,
  };
};

export const addPhoto = (photo, navigation) => {
  Alert.alert('Success', 'Photo Saved Successfully', [
    {text: 'OK', onPress: () => navigation.navigate('Resume')},
  ]);
  return {
    type: ADD_PHOTO,
    payload: photo,
  };
};
