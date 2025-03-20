import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ImageSourcePropType, Image, View } from 'react-native';
import {  TextStyles } from '../constants/textstyle';
import { Colors } from '../constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LabelComponent from './LableComponent';
import { Dimens } from '../constants/dimens';

interface PaymentCardComponentProps {
  img: ImageSourcePropType;
  accNo:string;
  onPress: () => void;
  style?:object;
  
}

const PaymentCardComponent: React.FC<PaymentCardComponentProps> = ({ img,accNo, onPress, style}) => {
  return (
    
       <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
     
     <Image source={img} style={styles.img}/>
     <LabelComponent value={accNo} style={styles.text}/>
  
</TouchableOpacity>
   
  );
};

const styles = StyleSheet.create({
 card: {
    flexDirection: "row",
    backgroundColor: "#F4F4F4", 
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal:wp("5%"),
    width:"100%",
    borderRadius:8,
    borderWidth:1,
    borderColor:"#F8F8F8",
    height:hp("8%")
  },
img:{
    height:hp("4%"),
    width:wp("20%"),
    resizeMode:"contain"
},
text:{
    fontFamily:TextStyles.mediumText,
    fontSize:Dimens.fontSize.FONTSIZE_16,
    color:"#6E7179"
}
 
  
});

export default PaymentCardComponent;
