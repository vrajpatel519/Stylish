import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import {icons, image} from '../constants/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TextStyles} from '../constants/textstyle';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface ProductItem {
  id: string;
  image: ImageSourcePropType;
  title: string;
  subtitle?: string;
  discountedPrice: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating?: number;
  totalUsers?: number;
}
type RootStackParamList = {
  ProductDetailScreen: undefined; // If you have params, replace `undefined` with an object
};
const ProductCardComponent = ({
  item,
  isWhishlist = false,
}: {
  item: ProductItem;
  isWhishlist?: boolean;
}) => {
 const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      onPress={() => {navigation.push("ProductDetailScreen"), console.log("navigate Product detail screen");
      }}
      style={{
        width: isWhishlist ? '48%' : wp('50%'),
        backgroundColor: '#fff',
        borderRadius: 4,
        paddingBottom: hp('0.7%'),
        marginBottom: hp('2%'),
        marginRight: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 5,
        elevation: 2,
        alignSelf: 'flex-start',

        justifyContent: 'center',
      }}>
      <Image
        source={item.image}
        style={{
          width: '100%',
          height: isWhishlist ? hp('24%') : hp('20%'),
          borderRadius: 4,
        }}
        resizeMode="cover"
      />
      <View style={{paddingHorizontal: wp('2%')}}>
        <Text
          style={{
            fontSize: 12,
            fontFamily: TextStyles.mediumText,
            marginTop: 8,
            width: '85%',
          }}>
          {item.title}
        </Text>
        {item.subtitle && (
          <Text
            style={{
              fontSize: 10,
              fontFamily: TextStyles.regularText,
              marginBottom: 5,
            }}>
            {item.subtitle}
          </Text>
        )}
        <Text style={{fontSize: 12, fontFamily: TextStyles.mediumText}}>
          ₹{item.discountedPrice}
        </Text>
        {item.originalPrice && (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{position: 'relative'}}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#BBBBBB',
                  fontFamily: TextStyles.regularText,
                  textDecorationLine: 'line-through',
                }}>
                ₹{item.originalPrice}
              </Text>
            </View>

            <Text
              style={{
                fontSize: 10,
                fontFamily: TextStyles.regularText,
                color: '#FE735C',
                marginLeft: 6,
              }}>
              {item.discountPercentage}% OFF
            </Text>
          </View>
        )}
        {item.rating !== null && item.rating !== undefined && (
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            {Array.from({length: 5}).map((_, index) => (
              <Image
                key={index}
                source={
                  index < Math.floor(item.rating!)
                    ? icons.IC_STAR
                    : icons.IC_STAR_UNFILLED
                }
                style={{width: 14, height: 14, marginRight: 2}}
                resizeMode="contain"
              />
            ))}
            <Text
              style={{
                fontSize: 10,
                fontFamily: TextStyles.regularText,
                color: '#A4A9B3',
                marginLeft: 6,
              }}>
              ({item.totalUsers})
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardComponent;
