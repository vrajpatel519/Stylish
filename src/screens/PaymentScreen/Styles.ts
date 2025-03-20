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
  orderSection: {
    marginVertical: hp('4%'),
    paddingHorizontal: wp('5%'),
  },
  blurText: {
    fontFamily: TextStyles.mediumText,
    fontSize: Dimens.fontSize.FONTSIZE_18,
    color: '#A8A8A9',
    marginBottom: hp('2%'),
  },
  text: {
    fontFamily: TextStyles.mediumText,
    fontSize: Dimens.fontSize.FONTSIZE_18,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.silverSand,
    width: '100%',
  },
  paymentSection:{
    marginVertical: hp('4%'),
    paddingHorizontal: wp('5%'),
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
  paymentCard:{
    marginVertical:hp("2%")
  },
  selectedPaymentCard: {
    borderWidth: 2,
    borderColor: Colors.primary, 
 
  },
});
