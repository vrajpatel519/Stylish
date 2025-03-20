import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View} from 'react-native';
import {icons, image} from '../constants/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Dimens} from '../constants/dimens';
import LabelComponent from './LableComponent';
import { TextStyles } from '../constants/textstyle';

interface ToolbarComponentProps {
  frontIcon?: ImageSourcePropType;
  frontPress?:()=>void;
  logo?: ImageSourcePropType;
  titleText?: string;
  lastIcon?: ImageSourcePropType;
  lastPress?:()=>void;
  style?: object;
}
const ToolbarComponent: React.FC<ToolbarComponentProps> = ({
  style,
  frontIcon,
  frontPress,
  logo,
  titleText = '',
  lastIcon,
  lastPress
}) => {
  return (
    <View style={[styles.toolbar, style]}>
      <TouchableOpacity onPress={frontPress}>
      <Image source={frontIcon} style={styles.iconBtn} />
      </TouchableOpacity>
      
      {logo ? (
    <Image source={logo} style={styles.image1} />
  ) : (
    <LabelComponent value={titleText} style={styles.titleText}/>
  )}
  <TouchableOpacity onPress={lastPress}>
  <Image source={lastIcon} style={styles.image2} />
  </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // width: "100%",
  },
  titleText:{
    fontFamily:TextStyles.semiBoldText,
    fontSize:Dimens.fontSize.FONTSIZE_18
  },

  image1: {
    width: wp('31.50%'),
    height: hp('4%'),
    resizeMode: 'contain',
  },
  image2: {
    width: wp('8%'),
    height: hp('3.5%'),
    resizeMode: 'contain',
    // marginRight:12
  },
  iconBtn: {
    width: wp('10.5%'),
    height: hp("3%"),
    resizeMode: 'contain',
  },
});

export default ToolbarComponent;
