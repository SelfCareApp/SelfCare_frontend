import React, {Component} from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome5'

import {UserSettings, ProfessionalsScreen,PromotionsScreen,
        Search, HomeScreen, BookingScreen, UserMessageScreen,ProfessionalPortfolio
       } from './../screens/userScreens'

import {UserAppointments,UserHistory,EditProfile} from './../screens/userScreens/UserSettingsScreens'
import theme from './../utils/theme'

//navigation for professionals list and Professional account
const HomeStack = createStackNavigator({HomeScreen:HomeScreen,
                        ProfessionalAccount:ProfessionalsScreen,
                        MessageScreen:UserMessageScreen,
                        BookingScreen,
                        ProfessionalPortfolio, 
                      })

const ServiceStack = createStackNavigator({
  UserSettings,
  UserHistory,
  EditProfile
})

//this is the bottom navigator once in the app
const RegUserAppStack = createBottomTabNavigator({
    Services:{
      screen:HomeStack,  //services stack in a stack navigator allowing for a switch in the pages between the professional list and mainscreen
      navigationOptions:{
        tabBarIcon:({focused,tintColor})=>{
          return <Icon name="home" size={24} color={tintColor}/>
        }
          }
  
    },  
    Search:{
        screen:Search,
        navigationOptions:{
          tabBarIcon:({focused,tintColor})=>{
            return <Icon name="search" size={24} color={tintColor}/>
          }
            }
      },
      Appointments:{
        screen:UserAppointments,
        navigationOptions:{
          tabBarIcon:({focused,tintColor})=>{
            return <Icon name="calendar-alt" size={24} color={tintColor}/>
          }
            }
      },
      Account:{
        screen:ServiceStack,
        navigationOptions:{
          tabBarIcon:({focused,tintColor})=>{
            return <Icon name="user-cog" size={24} color={tintColor}/>
          },
            }
      }
  
  },
  {
      navigationOptions: ({ navigation }) => (
        {
          
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
        },
      }),
      tabBarLabel: {
      },
      tabBarOptions: {
        activeTintColor: theme.primaryColor.iconColor,
        inactiveTintColor: theme.primaryColor.selectedIcon,
        showLabel: false,
        style: { backgroundColor: theme.primaryColor.backgroundColor},
  
      },
    }
  );

  export {RegUserAppStack}