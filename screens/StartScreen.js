import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const StartScreen = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Home')}
      
      >
      <View>
        <Text style={styles.text}>Resumer</Text>
      </View>

      <View style={styles.play}>
        <MaterialCommunityIcons name="play-pause" color="#004d00" size={100} />

        <Text style={styles.content}>Tap To Play</Text>
      </View>
      <ImageBackground
        source={require('./images/appBackground.jpg')}
        resizeMode="cover"
        style={styles.image}></ImageBackground>
    </TouchableOpacity>
  );
};

export default StartScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(255, 190, 179)',
    },
    avatar: {},
    image: {
      flex: 1,
      justifyContent: 'center',
      opacity: 0.4,
    },
    text: {
      color: '#000',
      fontSize: 80,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
      position: 'absolute',
      width: '100%',
      letterSpacing: 4,
      textShadowColor: 'rgba(0, 0, 0, 1)',
      textShadowOffset: {width: -30, height: 35},
      textShadowRadius: 10,
    },
    play: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    content: {
      fontSize: 50,
      color: '#4d0000',
      fontWeight: 'bold',
    },
  });
