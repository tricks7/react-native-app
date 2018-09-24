/* eslint-disable no-underscore-dangle,import/no-unresolved,react/prop-types */
import React from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import ProfileScreen from '../containers/ProfileScreen';
import GalleryScreen from '../containers/GalleryScreen';
import ArticleScreen from '../containers/ArticleScreen';
import ChatScreen from '../containers/chat/ChatScreen';
import MessagesScreen from '../containers/chat/MessagesScreen';
import ChartsScreen from '../containers/ChartsScreen';

import { Colors, Fonts } from '../constants';

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Profile',
      }
    },
    Gallery: {
      screen: GalleryScreen,
      navigationOptions: {
        title: 'Gallery',
      }
    },
    Article: {
      screen: ArticleScreen,
      navigationOptions: {
        title: 'Product View',
      }
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        title: 'Chat',
      }
    },
    Messages: {
      screen: MessagesScreen,
    },
    Charts: {
      screen: ChartsScreen,
      navigationOptions: {
        title: 'Chart',
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: (typeof navigation.state.params === 'object' && navigation.state.params.title)
        ? navigation.state.params.title : navigation.state.params,
      headerTitleStyle: {
        fontFamily: Fonts.primaryLight,
      },
      headerStyle: {
        backgroundColor: '#577AD9',
      },
      headerTitleStyle: {
        color: Colors.white,
        fontFamily: Fonts.primaryRegular,
      },
      headerTintColor: '#222222',
      headerLeft: props => (
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            paddingLeft: 25,
          }}
        >
          <Image
            source={require('../../assets/images/icons/arrow-back.png')}
            resizeMode="contain"
            style={{
              height: 20,
            }}
          />
        </TouchableOpacity>
      ),
    }),
  },
);


export default RootStackNavigator;
