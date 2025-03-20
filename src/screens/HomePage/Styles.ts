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
 
  categotyTitle:{
    fontFamily:TextStyles.semiBoldText,
    color:Colors.black,
    fontSize:Dimens.fontSize.FONTSIZE_18,
    marginBottom: hp('2.14%'),
  },

  listContainer: {
    justifyContent: 'center',
    alignItems: 'center', 
    paddingTop: 10, 
    backgroundColor: Colors.white,
    borderRadius: 6,
    
   
    elevation:4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height:4},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    marginBottom:hp("2.14%")
},
itemContainer: {
  
    alignItems: 'center',
    marginHorizontal: 5,
},
image: {
    width: wp('16%'),
    height: hp('7.8%'),
    borderRadius: 45, 
   
},
label: {
    marginTop: 4,
    fontSize: 10,
    fontFamily:TextStyles.regularText,
    color: Colors.black,
 
},
timeCard:{
  marginTop:hp("2.14%")
},
specialOfferCard:{
  flexDirection:"row", alignItems:"center", backgroundColor:Colors.white,
  marginTop:hp("2.14%"),
  width:"100%",
  height:hp("13%"),
   elevation:4,
 borderRadius:6,
//   shadowColor: '#000',
//   shadowOffset: { width: 0, height:4},
//   shadowOpacity: 0.2,
//   shadowRadius: 10,
},
imgSpecialOffer:{
  height:hp("8%"),
  width:wp("20%")
},
specialOfferTitle:{
  fontFamily:TextStyles.mediumText,
  fontSize:Dimens.fontSize.FONTSIZE_16,
  marginLeft:wp("8%"),

},
specialOfferSubTitle:{
  fontFamily:TextStyles.regularText,
  fontSize:Dimens.fontSize.FONTSIZE_12,
  width:"55%",
  marginLeft:wp("8%"),
  marginTop:hp("0.5%")

},
heelsContainer:{
  
  height:hp("25%"),
  backgroundColor: Colors.white,
  elevation:4,
  marginTop:hp("2.14%"),
  justifyContent:"center"
},
heelsContainerBackground:{
  position:"absolute",
 backgroundColor:"#E7E7EB4D",
width:"99%",
justifyContent:"center",
alignItems:"flex-end",
height:"93%",
marginVertical:hp("2%"),
marginRight:wp("6%"),
paddingRight:wp("4%")
},
heelimg:{
  
 height:"100%",
 width:"50%"

},
heelsTextCOntainer:{
  alignItems:"center",
  justifyContent:"center"
},
heelstext1:{
  textAlign:"center",
  fontFamily:TextStyles.mediumText,
  fontSize:Dimens.fontSize.FONTSIZE_16
},
heelstext2:{
  textAlign:"center",
  fontFamily:TextStyles.regularText,
  fontSize:Dimens.fontSize.FONTSIZE_10
},
heelsButton:{
marginTop:hp("2%"),
width:wp("30%"),
  height:hp("4%"),

  alignItems:"center",
  justifyContent:"center"
},
heelsButtonText:{
  fontSize:Dimens.fontSize.FONTSIZE_12,
  fontFamily:TextStyles.mediumText,
  marginRight:wp("1.5%")

},
timeCard2:{
  marginTop:hp("2.14%"),
  backgroundColor:"#FD6E87",
  padding:wp("2.5%")
},
summersaleContainer:{
  marginTop:hp("2.14%"),
  backgroundColor:Colors.white,
  paddingBottom:hp("2%"),
  elevation:4,
  borderRadius:6,
 
},
summersaleimg:{
  height:hp("25%"),
  width:"100%",
 borderTopRightRadius:6,
 borderTopLeftRadius:6

},
summersaleTextContainer:{
  marginHorizontal:wp("2%")
},
summersaleTitle:{
  fontFamily:TextStyles.mediumText,
  fontSize:Dimens.fontSize.FONTSIZE_20
},
summersaleSubtitle:{
  fontFamily:TextStyles.regularText,
  fontSize:Dimens.fontSize.FONTSIZE_16
},
summersaleButton:{
  width:wp("28%"),
  height:hp("4%"),

  alignItems:"center",
  justifyContent:"center"
},
sponserContainer:{
  marginVertical:hp("2.14%"),
  backgroundColor:Colors.white,
  paddingBottom:hp("2%"),
  elevation:4,
  borderRadius:6
},
sponserimg:{
  height:hp("35%"),
  width:"100%",
  borderRadius:8
},
sponserTitle:{
  fontFamily:TextStyles.mediumText,
  fontSize:Dimens.fontSize.FONTSIZE_20
},
sponserTextContainer:{
  flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop: hp("1%"), marginRight:wp("2%")
},
sponserSubtitle:{
  fontFamily:TextStyles.boldText,
  fontSize:Dimens.fontSize.FONTSIZE_16
},
sponserRightArrow:{
  height:hp("1.5%"),
  width:wp("2%")
},

});
