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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  card: {
    alignItems: 'center',
  },

  lableTitleText: {
    fontFamily: TextStyles.boldText,
    fontSize: 24,
    color: Colors.black,
  },
  descriptionText: {
    fontFamily: TextStyles.semiBoldText,
    fontSize: 13,
    color: Colors.darkGray1,
    textAlign: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#17223B33',
    marginHorizontal: 4,
  },
  activeIndicator: {
    width: 40,
    backgroundColor: '#17223B',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,

    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 10,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    top: 10,
    paddingHorizontal: 10,
  },
  pageCount: {
    fontSize: 18,
    fontFamily: TextStyles.semiBoldText,
  },
  skipText: {
    fontSize: 18,
    fontFamily: TextStyles.semiBoldText,
    color: Colors.black,
  },

  buttonText: {
    fontSize: 18,
    fontFamily: TextStyles.semiBoldText,
  },
  disabledText: {
    color: '#fff',
  },
  stepIndicator: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
});
