import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../constants/colors';
import { TextStyles } from '../../constants/textstyle';
import { Dimens } from '../../constants/dimens';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
 backgroundColor:Colors.background,
    paddingHorizontal: wp('4%'),
    paddingBottom:hp("9.5%")

    
  },
  searchbar:{
     paddingHorizontal: wp('4.50'),
    marginTop: hp('2.1%'),
 marginBottom: hp('2.14%'),


  },
 
  totalItemCountText:{
    fontFamily:TextStyles.semiBoldText,
    color:Colors.black,
    fontSize:Dimens.fontSize.FONTSIZE_18,
    marginBottom: hp('2.14%'),
  },



});
