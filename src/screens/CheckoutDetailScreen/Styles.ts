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
  profileSection: {
    alignItems: 'center',
    marginTop: hp('3%'),
    position: 'relative',
  },
  editIconBtn: {
    position: 'absolute',
    bottom: 0,
    right: 100,

    padding: 6,
  },
  editIcon: {
    height: hp('4%'),
    width: wp('8.3%'),
  },
  profileImage: {
    width: wp('28%'),
    height: hp('14%'),
    borderRadius: wp('14%'),
    resizeMode: 'cover',
  },
  personalDetailSection: {
    marginVertical: hp('3%'),
  },
  personalDetailText: {
    fontFamily: TextStyles.semiBoldText,
    fontSize: Dimens.fontSize.FONTSIZE_18,
    marginBottom: hp('3%'),
  },
  textField: {
    marginBottom: hp('3%'),
  },
  changepasswordText: {
    fontFamily: TextStyles.mediumText,
    fontSize: Dimens.fontSize.FONTSIZE_12,
    color: Colors.primary,
    textDecorationLine: 'underline',
    textAlign: 'right',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.silverSand,

    width: '100%',
  },
  businessAddressDetailSection: {
    marginVertical: hp('3%'),
  },
});
