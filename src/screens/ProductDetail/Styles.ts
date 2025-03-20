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
    paddingBottom:hp("9.5%")
  },
  toolbarConatiner: {
    marginBottom: hp('1%'),
  },
  sizeText: {
    fontFamily: TextStyles.semiBoldText,
    fontSize: Dimens.fontSize.FONTSIZE_14,
  },
  sizeBtnContainer: {
    flexDirection: 'row',
    marginVertical: hp('1%'),
  },
  button: {
    paddingVertical: hp('0.6%'),
    paddingHorizontal: wp('2%'),
    marginRight: wp('2%'),
    borderWidth: 2,
    borderColor: '#FA7189',
    borderRadius: 4,
    backgroundColor: 'transparent',
  },
  selectedButton: {
    backgroundColor: '#FA7189',
  },
  text: {
    fontFamily: TextStyles.semiBoldText,
    color: '#FA7189',
    fontSize: Dimens.fontSize.FONTSIZE_14,
  },
  selectedText: {
    color: '#fff',
  },
  productTitle: {
    fontFamily: TextStyles.semiBoldText,
    fontSize: Dimens.fontSize.FONTSIZE_20,
    marginTop: hp('1%'),
  },
  productSubTitle: {
    fontFamily: TextStyles.regularText,
    fontSize: Dimens.fontSize.FONTSIZE_14,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('1%'),
  },
  starimg: {
    width: wp('4%'),
    height: hp('2%'),
    marginRight: 2,
  },
  totalUserText: {
    textAlign: 'center',
    fontSize: Dimens.fontSize.FONTSIZE_14,
    fontFamily: TextStyles.regularText,
    color: '#A4A9B3',
    marginLeft: 6,
    alignSelf: 'center',
    height: hp('2%'),
  },
  priceContainer: {flexDirection: 'row', alignItems: 'center'},
  originalPrice: {
    fontSize: Dimens.fontSize.FONTSIZE_14,
    color: '#808488',
    fontFamily: TextStyles.regularText,
    textDecorationLine: 'line-through',
  },
  discountPercentage: {
    fontSize: Dimens.fontSize.FONTSIZE_14,
    fontFamily: TextStyles.semiBoldText,
    color: '#FE735C',
  },
  discountPrice: {
    fontSize: Dimens.fontSize.FONTSIZE_14,
    fontFamily: TextStyles.mediumText,
    marginHorizontal: wp('2%'),
  },
  productDetailConatiner: {
    marginVertical: hp('1%'),
  },
  productDetailText: {
    fontFamily: TextStyles.mediumText,
    fontSize: Dimens.fontSize.FONTSIZE_14,
  },
  descriptionText: {
    fontFamily: TextStyles.regularText,
    fontSize: Dimens.fontSize.FONTSIZE_12,
  },
  readMoreText: {
    fontFamily: TextStyles.regularText,
    fontSize: Dimens.fontSize.FONTSIZE_12,
    color: '#FA7189',
  },
  nearstoreBtn:{
    height:hp("3.04%"),
    width:wp("25.5%")
  },
  vipBtn:{
 height:hp("3%"),
    width:wp("11.9%"),
    marginHorizontal:wp("3%")
  },
  gocartBtn:{
    
    marginHorizontal:wp("2%"),
    height:hp("4.5%"),
   width:wp("31.5%")
  },
  gocartBtnContainer:{
    flexDirection:"row",
    marginVertical:hp("2%")
  },
  deliveryContainer:{
    paddingHorizontal:wp("10%"),
  paddingVertical:hp("1%"),
    backgroundColor:"#FFCCD5",
    borderRadius:5,
    justifyContent:"center"
  },
  deliveryText:{
    fontFamily:TextStyles.semiBoldText,
    fontSize:Dimens.fontSize.FONTSIZE_14
  },
  hourText:{
    fontFamily:TextStyles.boldText,
    fontSize:Dimens.fontSize.FONTSIZE_20
  },
  compareContainer:{
    marginVertical:hp("2%"),
    flexDirection:"row",
    justifyContent:"space-between",
  },
  similarBtn:{
    flexDirection:"row",
    height:hp("5%"),
 width:"49.5%",
    backgroundColor:Colors.white,
    borderWidth:1,
    borderColor:"#D9D9D9",
    borderRadius:8,
    alignItems:"center",
    justifyContent:"center"
  },
  eyeimg:{
    height:hp("2%"),
    width:wp("5%"),
    marginRight:wp("1%"),
    tintColor:Colors.black
  },
  similartxt:{
    fontFamily:TextStyles.mediumText,
    fontSize:Dimens.fontSize.FONTSIZE_14
  },
  totalsimilarItems:{
    fontFamily:TextStyles.semiBoldText,
    fontSize:Dimens.fontSize.FONTSIZE_20
  },
});
