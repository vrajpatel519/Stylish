import {StyleSheet} from 'react-native';
import {TextStyles} from '../../constants/textstyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../constants/colors';
import {Dimens} from '../../constants/dimens';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: wp('5%'),
    justifyContent: 'space-between',
    paddingTop: hp('10%'),
  },
  titleContainer: {
    marginBottom: hp('4.5%'),
  },
  content: {
    flex: 1,
    paddingBottom: hp('12.60%'),
  },
  titleText: {
    fontFamily: TextStyles.boldText,
    fontSize: Dimens.fontSize.FONTSIZE_36,
    color: Colors.black,
  },
  textfield: {
    marginBottom: hp('3.5%'),
  },
  regularTextContainer: {
    flexDirection: 'row',
    marginBottom: hp('4.5%'),
  },

  regularText1: {
    fontFamily: TextStyles.regularText,
    fontSize: Dimens.fontSize.FONTSIZE_12,
    color:Colors.primary,
  },
  regularText2: {
    fontFamily: TextStyles.regularText,
    fontSize: Dimens.fontSize.FONTSIZE_12,
    color:Colors.darkGray1,
  },
});
