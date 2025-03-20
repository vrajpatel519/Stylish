import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../constants/colors';
import {TextStyles} from '../../constants/textstyle';
import {Dimens} from '../../constants/dimens';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: wp('4%'),
   
  },
  toolbarContainer:{
    borderBottomWidth:1,

    borderBottomColor:"#C6C6C633"
  },
  locationIcon:{
    height:hp("3%"),
    width:wp("5%"),
    marginRight:wp("1%")
   
  },
  deliveryAddSection:{

    marginTop:hp("3%")
  },
  deliveryAddText:{
    fontFamily:TextStyles.semiBoldText,
    fontSize:Dimens.fontSize.FONTSIZE_14
  },
  
  deliveryAddCard:{
    backgroundColor:Colors.white,
    marginTop:hp("1.5%"),
    elevation:6,
    height:hp("10%"),
width:wp("68%"),
    paddingHorizontal:wp("2%"),
    paddingVertical:hp("1%"),
    borderRadius:6
  },
  addressText:{
    fontFamily:TextStyles.mediumText,
    fontSize:Dimens.fontSize.FONTSIZE_12
  },
  editIcon:{
    height:hp("2%"),
    width:wp("4%")
  },
  address:{
    fontFamily:TextStyles.regularText,
    fontSize:Dimens.fontSize.FONTSIZE_12
  },
  addAddCard:{
    backgroundColor:Colors.white,
    marginTop:hp("1.5%"),
    elevation:6,
    height:hp("10%"),
padding:hp("3%"),
    alignItems:"center",
    justifyContent:"center",
    borderRadius:6
  },
  addAddressIcon:{
    height:hp("4.3%"),
    width:wp("8.5%")
  },

  shoppingListSection:{
    marginTop:hp("3%"),
  },
  
  
 
});
