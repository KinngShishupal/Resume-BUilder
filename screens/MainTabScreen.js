import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfessionalInformationScreenScreen from './ProfessionalInformationScreenScreen';
import ExploreScreen from './ExploreScreen';
import ResumeScreen from './ResumeScreen';
import EducationalInformationScreen from './EducationalInformationScreen';
import ImageSelectorScreen from './ImageSelectorScreen';

const Tab = createMaterialBottomTabNavigator();

function MainTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Resume"
      activeColor="#fff"
      barStyle={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Resume"
        component={ResumeScreen}
        options={{
          tabBarLabel: 'Resume',
          tabBarColor: '#b300b3',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Personal"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Personal',
          tabBarColor: '#808000',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="human-male" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Education"
        component={EducationalInformationScreen}
        options={{
          tabBarLabel: 'Education',
          tabBarColor: '#006666',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Professional Information"
        component={ProfessionalInformationScreenScreen}
        options={{
          tabBarLabel: 'Professional Information',
          tabBarColor: 'green',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Image"
        component={ImageSelectorScreen}
        options={{
          tabBarLabel: 'Image',
          tabBarColor: '#999900',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="camera" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabScreen;
