import React, { useState } from 'react';
import { StyleSheet, TextInput, TextInputProps, View, Image, TouchableOpacity, Text } from 'react-native';
import { TextStyles } from '../constants/textstyle';
import { Colors } from '../constants/colors';
import { icons } from '../constants/images';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LabelComponent from './LableComponent';

interface CheckoutTextfieldComponentProps extends TextInputProps {

  placeholder: string;
  value: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  style?: object;
  keyboardType?: TextInputProps["keyboardType"];
}

const CheckoutTextfieldComponent: React.FC<CheckoutTextfieldComponentProps> = ({ 

  placeholder, 
  value, 
  onChangeText, 
  secureTextEntry = false, 
  keyboardType = "default",
  style 
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  return (
    <View style={style}>
      <LabelComponent value={placeholder} style={styles.label}/>
      <View style={styles.inputContainer}>
        <TextInput
          style={[ value ? styles.inputValue : styles.inputPlaceholder]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          keyboardType={keyboardType}
          placeholderTextColor={Colors.graniteGray}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Image
              source={isPasswordVisible ? icons.IC_EYE_OPEN : icons.IC_EYE_CLOSE}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: TextStyles.regularText,
    fontSize: 12,
    color: Colors.black,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    height: hp("6%"),
    borderWidth: 1,
    borderColor: "#C8C8C8",
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
  },
  inputPlaceholder: {
    flex: 1,
    fontFamily: TextStyles.mediumText,
    fontSize: 13,
    color: Colors.graniteGray,
  },
  inputValue: {
    flex: 1,
    fontFamily: TextStyles.semiBoldText,
    fontSize: 13,
    color: Colors.black,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
});

export default CheckoutTextfieldComponent;
