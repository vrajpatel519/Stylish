import {NavigationProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  StatusBar,
  ImageBackground,
  Text,
  Modal,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {image} from '../../constants/images';
import {styles} from './Styles';
import RactangularButton from '../../components/RactangularButton';
import LinearGradient from 'react-native-linear-gradient';
import LabelComponent from '../../components/LableComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface GetStartPageProps {
  navigation: NavigationProp<any>;
}

const GetStartPage = ({navigation}: GetStartPageProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const completeGetStart = async () => {
    await AsyncStorage.setItem('hasSeenGetStarted', 'true');
    navigation.navigate('Dashboard');
  };
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={modalVisible ? 'rgba(13, 11, 11, 0.7)' : 'transparent'}
        translucent={true}
      />
      <ImageBackground
        source={image.GETSTART}
        style={styles.backgroundImageContainer}>
        <View style={styles.container}>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.85)']}
            locations={[1 / 100, 1]}
            style={styles.gradientContainer}>
            <Text style={styles.text}>You want Authentic, here you go!</Text>
            <LabelComponent
              value="Find it here, buy it now!"
              style={styles.description}
            />
            <RactangularButton
              title={'Get Started'}
              onPress={() => completeGetStart()}
              style={styles.button}
            />
          </LinearGradient>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <TouchableWithoutFeedback
            onPress={() => setModalVisible(false)}
            accessible={false}>
            <View style={styles.modalOverlay}>
              <View style={styles.modalContainer}>
                <Image source={image.SUCCESSFULL} style={styles.modalImage} />
                <LabelComponent
                  value="Payment done successfully."
                  style={styles.dialogText}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ImageBackground>
    </>
  );
};


export default GetStartPage;
