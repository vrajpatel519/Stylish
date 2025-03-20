import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Alert,
} from 'react-native';
import TextfieldComponent from '../../components/TextFieldComponent';
import RactangularButton from '../../components/RactangularButton';
import SsoButton from '../../components/SsoButton';
import LableComponent from '../../components/LableComponent';
import { TextStyles } from '../../constants/textstyle';

import { NavigationProp } from '@react-navigation/native';
import { Colors } from '../../constants/colors';
import { icons } from '../../constants/images';
import { Dimens } from '../../constants/dimens';
import { Strings } from '../../constants/strings';
import { styles } from './Styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

interface SignupPageProps {
  navigation: NativeStackNavigationProp<any>;
}

const SignupPage = ({ navigation }: SignupPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateForm = () => {
    if (!email.includes('@')) {
      Alert.alert('Error', 'Please enter a valid email address');
      return false;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return false;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return false;
    }
    return true;
  };

  const handleSignup = () => {
    if (!validateForm()) return;

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Success', 'User account created & signed in!');
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Error', 'That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Error', 'That email address is invalid!');
        } else {
          Alert.alert('Error', error.message);
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
      <View style={styles.titleContainer}>
        <LableComponent value={Strings.SIGNUPTITLE} style={styles.titleText} />
      </View>
      <View style={styles.content}>
        <TextfieldComponent placeholder={'Username or Email'} value={email} onChangeText={setEmail} icon={icons.IC_USER} style={{ marginBottom: 10 }} keyboardType={'email-address'}/>
        <TextfieldComponent placeholder={'Password'} value={password} onChangeText={setPassword} secureTextEntry icon={icons.IC_PASSWORD} style={{ marginBottom: 10 }} />
        <TextfieldComponent placeholder={'Confirm Password'} value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry icon={icons.IC_PASSWORD} style={{ marginBottom: 20 }} />
        <RactangularButton title={'Create Account'} onPress={handleSignup} style={{ marginBottom: 20 }} />
        <LableComponent value={'-OR Continue With-'} style={styles.continueText} />
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 28 }}>
          <SsoButton onPress={() => console.log('Google Login Pressed!')} imageSource={icons.IC_GOOGLE} style={styles.ssoButton} />
          <SsoButton onPress={() => console.log('Apple Login Pressed!')} imageSource={icons.IC_APPLE} style={styles.ssoButton} iconSize={Dimens.icon.APPLESIZE} />
          <SsoButton onPress={() => console.log('Facebook Login Pressed!')} imageSource={icons.IC_FACEBOOK} iconSize={Dimens.icon.FACEBOOKSIZE} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
          <LableComponent value={'I Already Have an Account'} style={[styles.footerText, { fontFamily: TextStyles.regularText, color: Colors.darkGray2 }]} />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <LableComponent value={'Login'} style={[styles.footerText, { fontFamily: TextStyles.semiBoldText, color: Colors.primary, textDecorationLine: 'underline' }]} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupPage;
