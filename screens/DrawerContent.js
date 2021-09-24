import React from 'react'
import { View, StyleSheet} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from "@react-navigation/drawer";
import {Avatar, Title, Caption, Paragraph, Drawer, Text, Switch, TouchableRipple} from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const DrawerContent = (props) => {
    return (
        <View style = {styles.drawerContent}>
            <DrawerContentScrollView {...props}>
                <View>
                    <Text>hjhh</Text>
                </View>

            </DrawerContentScrollView>
            <Drawer.Section style = {styles.bottomDrawerSection}>
                <Drawer.Item
                label='Sign Out'
                icon={({color, size})=>(
                    <Icon name = 'exit-to-app' color={color} size={size} onPress={()=>{}}/>
                )}
                >

                </Drawer.Item>


            </Drawer.Section>
        </View>
    )
}

export default DrawerContent;

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
