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
  
  },
  container1: {
  
    paddingHorizontal: wp('4%'),
  },
  toolbarContainer: {
    borderBottomWidth: 1,

    borderBottomColor: '#C6C6C633',
  },

  productContainer: {
    flexDirection: 'row',

    marginVertical: hp('6%'),
  },
  img: {
    height: hp('22%'),
    width: wp('35%'),
    resizeMode: 'cover',
    borderRadius: 4,
    marginRight: wp('3%'),
  },
  title: {
    fontFamily: TextStyles.semiBoldText,
    fontSize: Dimens.fontSize.FONTSIZE_16,
  },
  subtitle: {
    width: '90%',
    fontFamily: TextStyles.regularText,
    fontSize: Dimens.fontSize.FONTSIZE_14,
  },
  dropdownContainer: {
    flexDirection: 'row',
    marginVertical: hp("2%"),
  },
  dropdown: {
    height: hp('4%'),
    width: wp("12%"),
  },
  dropdownContainer1: {
    flexDirection: 'row',
paddingHorizontal:wp("1%"),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 4,
    marginRight:wp("2%")
  },
  sizeText: {
    fontFamily: TextStyles.regularText,
    fontSize: Dimens.fontSize.FONTSIZE_14,
    marginRight: wp('2%'),
  },
  size: {
    fontFamily: TextStyles.mediumText,
    fontSize: Dimens.fontSize.FONTSIZE_14,
  },
  dropdownContainer2: {
    width: '20%',
  },
  couponContainer:{
    flexDirection:'row',
    justifyContent:"space-between",
    marginBottom:hp("3%")
  },
  couponIcon:{
    height:hp("2.8%"),
    width:wp("9%"),
    marginRight:wp("2%")
  },
  couponText:{
    fontFamily: TextStyles.mediumText,
    fontSize: Dimens.fontSize.FONTSIZE_16,
    marginBottom:hp("2%")
  },
  selectText:{
    fontFamily: TextStyles.semiBoldText,
    fontSize: Dimens.fontSize.FONTSIZE_14,
    color:Colors.primary
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.silverSand,

    width: '100%',
  },
  paymentSection:{
    marginVertical:hp("3%")
  },
  regularText:{
    fontFamily: TextStyles.regularText,
    fontSize: Dimens.fontSize.FONTSIZE_16,
    marginRight:wp("2%"),
    marginBottom:hp("1%")
  },
  knowmoreText:{
    fontFamily: TextStyles.semiBoldText,
    fontSize: Dimens.fontSize.FONTSIZE_12,
    color:Colors.primary
  },
  totalSection:{
    marginVertical:hp("3%")
  },
  footerContainer:{
    flex:1,
    flexDirection:"row",
    width:"100%",
    paddingHorizontal:wp("3%"),
    alignItems: "center",
    justifyContent:"space-between",
    borderTopLeftRadius:24,
    borderTopRightRadius:24,
    borderWidth:1,
    borderColor:"#979797",
    backgroundColor:"#F8F8F8"
  },
  button:{
   width:wp("60%"),
    justifyContent:"center",
    alignItems:"center"
  },
  buttonText:{
    fontFamily:TextStyles.semiBoldText,
    color:Colors.white,
    fontSize:14
  }
});
