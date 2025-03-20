import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  View,
  FlatList,
  Image,
  Text,
  ImageSourcePropType,
} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {styles} from './Styles';

import BottomNavigation from '../../components/BottomMenuComponent';
import { Colors } from '../../constants/colors';

// interface DashboardProps {
//   navigation: NativeStackNavigationProp<any>;
// }

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.background} barStyle={'dark-content'} />

      <BottomNavigation />
    </SafeAreaView>
  );
};

export default Dashboard;
