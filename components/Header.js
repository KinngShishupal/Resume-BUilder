import {useNavigation} from '@react-navigation/core';
import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useRoute} from '@react-navigation/native';
import {screensHistory} from '../store/constants';

const Header = ({
  backgroundColor,
  heading,
  headingColor,
  iconColor = '#fff',
  display,
}) => {
  const navigation = useNavigation();
  const {name} = useRoute();
  const screenSwitcher = name => {
    const indexValue = screensHistory.indexOf(name);
    navigation.navigate(screensHistory[indexValue - 1]);
  };

  return (
    <View style={[styles.header, {backgroundColor: backgroundColor}]}>
      <TouchableOpacity onPress={() => screenSwitcher(name)}>
        <MaterialCommunityIcons
          name="keyboard-backspace"
          color="green"
          size={26}
          style={[styles.icon, {color: iconColor, display: display}]}
        />
      </TouchableOpacity>
      <Text style={[styles.title, {color: headingColor}]}>{heading}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Resume')}>
        <MaterialCommunityIcons
          name="home"
          color="green"
          size={26}
          style={[styles.icon, {color: iconColor, display: display}]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  icon: {
    fontSize: 40,
    color: '#fff',
  },
});
