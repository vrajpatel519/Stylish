import React, {useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import TextfieldComponent from '../../components/TextFieldComponent';
import RactangularButton from '../../components/RactangularButton';
import LableComponent from '../../components/LableComponent';
import {NavigationProp} from '@react-navigation/native';
import {Colors} from '../../constants/colors';
import {Dimens} from '../../constants/dimens';
import {Strings} from '../../constants/strings';
import {icons} from '../../constants/images';
import {styles} from './Styles';

interface ForgotPasswordPageProps {
  navigation: NavigationProp<any>;
}

const ForgotPasswordPage = ({navigation}: ForgotPasswordPageProps) => {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={styles.titleContainer}>
        <LableComponent
          value={Strings.FORGOTPASSWORDTITLE}
          style={styles.titleText}
        />
      </View>
      <View style={styles.content}>
        <TextfieldComponent
          placeholder={'Enter your email address'}
          value={text}
          onChangeText={setText}
          icon={icons.IC_EMAIL}
          iconSize={Dimens.icon.EMAIL}
          style={styles.textfield}
        />
        <View style={styles.regularTextContainer}>
          <LableComponent
            value={'*'}
            style={styles.regularText1}
           
          />
          <LableComponent
            value={
              'We will send you a message to set or reset\nyour new password'
            }
            style={styles.regularText2}
           
          />
        </View>
        <RactangularButton
          title={'Submit'}
          onPress={() => console.log('hiiii')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordPage;
