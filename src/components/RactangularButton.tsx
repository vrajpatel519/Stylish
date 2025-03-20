import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ImageSourcePropType, Image, View } from 'react-native';
import {  TextStyles } from '../constants/textstyle';
import { Colors } from '../constants/colors';
import { Dimens } from '../constants/dimens';

interface RectangularButtonProps {
  title: string;
  icon?:ImageSourcePropType;
  onPress: () => void;
  style?:object;
  styleText?:object;
}

const RactangularButton: React.FC<RectangularButtonProps> = ({ title, onPress, style,icon ,styleText}) => {
  return (
    <View style={style}>
       <TouchableOpacity style={[styles.button,Dimens.button]} onPress={onPress}>
      <Text style={[styles.buttonText,styleText]}>{title}</Text>
      <Image source={icon} style={{ width: 15, height: 11 }}/>
    </TouchableOpacity>
    </View>
   
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: Colors.primary, 
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%"
  },
  buttonText:{
    fontFamily:TextStyles.semiBoldText,
    color:Colors.white,
    fontSize:20
  }
 
  
});

export default RactangularButton;
