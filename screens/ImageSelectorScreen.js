import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch} from 'react-redux';
import {addPhoto} from '../store/actions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppHeader from "../components/Header";
import { useNavigation } from '@react-navigation/native';

const ImageSelectorScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()

  const selectFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      dispatch(addPhoto(image.path, navigation));
    });
  };
  const clickImage = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      dispatch(addPhoto(image.path, ));
    });
  };

  return (
    <View style={{flex:1}}>
      <ImageBackground
        source={require('./images/camera.jpg')}
        resizeMode="cover"
        style={styles.image}>
       <AppHeader backgroundColor='green' heading='Image Selector' backgroundColor='#999900' headingColor='#fff'/>
      <View style={styles.wrapper}>
      <TouchableOpacity onPress={clickImage}>
        <View style={styles.camera}>
          <MaterialCommunityIcons name="camera" color="#fff" size={100} />
          <Text style={styles.text}>camera</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={selectFromGallery}>
        <View style={styles.folder} onPress={selectFromGallery}>
          <MaterialCommunityIcons name="folder" color="#fff" size={100} />
          <Text style={styles.text} onPress={selectFromGallery}>
            Gallery
          </Text>
        </View>
      </TouchableOpacity>
      </View>
      </ImageBackground>
  
    </View>
  );
};

export default ImageSelectorScreen;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    alignItems: 'center',
  },
  heading: {
    color: '#000066',
    fontWeight: 'bold',
    fontSize: 40,
  },
  camera: {
    alignItems: 'center',
    backgroundColor: '#999900',
    minWidth: '30%',
    padding: 10,
    margin: 15,
    borderRadius: 10,
  },
  folder: {
    alignItems: 'center',
    backgroundColor: '#999900',
    minWidth: '30%',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    letterSpacing: 2,
    fontStyle: 'italic',
  },
  image: {
    flex: 1,
    // justifyContent: "center"
  },
});

