import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, StatusBar, SafeAreaView} from 'react-native';
import TextfieldComponent from '../../components/TextFieldComponent';
import RactangularButton from '../../components/RactangularButton';
import SsoButton from '../../components/SsoButton';
import LableComponent from '../../components/LableComponent';
import {NavigationProp} from '@react-navigation/native';
import {icons} from '../../constants/images';
import {styles} from './Styles';
import {Dimens} from '../../constants/dimens';
import {Strings} from '../../constants/strings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';



interface LoginPageProps {
  navigation: NativeStackNavigationProp<any>;
}

const LoginPage = ({navigation}: LoginPageProps) => {
 
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState('');

    useEffect(() =>{
      GoogleSignin.configure({
        offlineAccess: true,
        webClientId: '920305468678-opnbo0nk0fmd8j65kqjhanlndbmf9pg7.apps.googleusercontent.com',
      });
    },[]);
  const checkgetStart = async () => {
    const hasSeenGetStarted = await AsyncStorage.getItem('hasSeenGetStarted');
    if (hasSeenGetStarted) {
      navigation.replace('Dashboard');
    } else {
      navigation.navigate('GetStartPage');
    }
  };

  const validateForm = () => {
    if (!email.includes('@')) {
      Alert.alert('Error', 'Please enter a valid email address');
      return false;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return false;
    }
   
    return true;
  };

  const handleSignup = () => {
    if (!validateForm()) return;

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Success', 'signed in!');
        console.log('signed in!');
        checkgetStart();
      })
      .catch(error => {
      
          Alert.alert('Error', error.message);
        
      });
  };

  const handleSigninGoogle = async () => {

    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      console.log("SignInResult");

      const { type, data } = await GoogleSignin.signIn();
      if (type === 'success') {
        // const { id, name, email, photo, familyName, givenName } = data.user;

        const googleCredential = auth.GoogleAuthProvider.credential(data.idToken);

        Alert.alert('Success', 'User account created & signed in!');

        return auth().signInWithCredential(googleCredential);
      } else if (type === 'cancelled') {
        return; 
      }
    } catch (error:any) {
      console.log("Google Sign-In failed:", error);
      
      Alert.alert('Error', error.message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={styles.titleContainer}>
        <LableComponent value={Strings.LOGINTITLE} style={styles.titleText} />
      </View>
      <View style={styles.content}>
        <TextfieldComponent
          placeholder={'Username or Email'}
          value={email}
          onChangeText={setEmail}
          icon={icons.IC_USER}
          keyboardType="email-address"
          style={{marginBottom: 31}}
        />
        <TextfieldComponent
          placeholder={'Password'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          icon={icons.IC_PASSWORD}
          style={{marginBottom: 9}}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordPage')}>
          <LableComponent
            value={'Forgot Password?'}
            style={styles.forgotPasswordText}
          />
        </TouchableOpacity>

        <RactangularButton
          title={'Login'}
          onPress={() => handleSignup()}
          style={styles.loginButton}
        />
        <LableComponent
          value={'-OR Continue With-'}
          style={styles.continueText}
        />
        <View style={styles.ssoContainer}>
          <SsoButton
            onPress={handleSigninGoogle}
            imageSource={icons.IC_GOOGLE}
            style={styles.ssoButton}
          />
          <SsoButton
            onPress={() => console.log('Google Login Pressed!')}
            imageSource={icons.IC_APPLE}
            style={styles.ssoButton}
            iconSize={Dimens.icon.APPLESIZE}
          />
          <SsoButton
            onPress={() => console.log('Google Login Pressed!')}
            imageSource={icons.IC_FACEBOOK}
            iconSize={Dimens.icon.FACEBOOKSIZE}
          />
        </View>
        <View style={styles.footer}>
          <LableComponent
            value={'Create An Account'}
            style={[styles.footerText1, ,]}
          />
          <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')}>
            <LableComponent value={'Sign Up'} style={[styles.footerText2]} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
