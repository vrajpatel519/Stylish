import React from 'react';
import {Image, ImageProps, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {icons, image} from '../constants/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Dimens} from '../constants/dimens';
import LabelComponent from './LableComponent';
import {TextStyles} from '../constants/textstyle';
import {Colors} from '../constants/colors';

interface TimeCardComponentProps {
    text1:string,
    text2:string,
    img_icon:ImageSourcePropType
  style?: object;
}
const TimeCardComponent: React.FC<TimeCardComponentProps> = ({style,text1,text2,img_icon}) => {
  return (
    <View style={[styles.container,style]}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:"space-between"}}>
        <View>
        <LabelComponent value={text1} style={styles.text1} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={img_icon} style={styles.icon} />
          <LabelComponent value={text2} style={styles.text2} />
        </View>
        </View>
      
         <TouchableOpacity
                        style={{
                          flexDirection: "row",
                        
                          backgroundColor: "transparent",
                          paddingVertical: 6,
                          paddingHorizontal: 10,
                          borderRadius: 6,
                          borderWidth: 1,
                          borderColor: "white",
                          alignItems: "center",
                          marginRight:4
                        }}
                      >
                        <Text style={{ color: "white", fontFamily: TextStyles.semiBoldText, fontSize: 13, marginRight: 4 }}>
                          View All
                        </Text>
                        <Image source={icons.IC_RIGHT_ARROW} style={{ width: 15, height: 11 }} />
                      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimens.height.HEIGHT_60,
    backgroundColor: '#4392F9',
    borderRadius: 12,
padding:wp("2%")
  },
  text1: {
    fontFamily: TextStyles.mediumText,
    fontSize: Dimens.fontSize.FONTSIZE_16,
    color: Colors.white,
  },
  icon: {
    height: hp('2%'),
    width: wp('3.8%'),
    marginHorizontal: wp('1%'),
  },
  text2: {
    fontFamily: TextStyles.regularText,
    fontSize: Dimens.fontSize.FONTSIZE_12,
    color: Colors.white,
  },
});

export default TimeCardComponent;
