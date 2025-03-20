import {StyleSheet} from 'react-native';
import {TextStyles} from '../../constants/textstyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../constants/colors';
import {Dimens} from '../../constants/dimens';
import LinearGradient from "react-native-linear-gradient";

export const styles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1, 
    justifyContent: "flex-end", 
    alignItems: "center",
    
   
  },
  gradientContainer: {
    width: "100%", 
    paddingVertical: hp('4%'),
    alignItems: "center",
  },
  text: {
    color: Colors.white,
    fontFamily: TextStyles.semiBoldText,
    fontSize: Dimens.fontSize.FONTSIZE_36,
    textAlign: 'center',
    paddingTop:hp('50%'),
    paddingBottom: hp('1%'),
  },
  description:{
    color: Colors.white,
    fontFamily:TextStyles.regularText,
    fontSize:Dimens.fontSize.FONTSIZE_14,
    paddingBottom: hp('6%'),
  },
  button:{
    marginBottom: hp('2%')
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(13, 11, 11, 0.7)", // Dark background with transparency
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: wp("93%"),
    height: hp('28%'),
    backgroundColor: Colors.white,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
   
  },
  modalImage: {
    width: wp("45%"),
    height: hp('15%'),
    marginBottom: 10,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  dialogText: {
   fontFamily:TextStyles.semiBoldText,
   fontSize:Dimens.fontSize.FONTSIZE_14,

  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },

});
