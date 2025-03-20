import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants/colors';
import { TextStyles } from '../constants/textstyle';
import LabelComponent from './LableComponent';
import { Dimens } from '../constants/dimens';
import { icons } from '../constants/images';

interface ProductItem {
  id: string;
  image: any;
  title: string;
  variations?: string[]; 
  discountedPrice: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating?: number;
}

type RootStackParamList = {
  ShopBagScreen: undefined;
};

const CartListCardComponent = ({ item }: { item: ProductItem }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedVariation, setSelectedVariation] = useState(item.variations ? item.variations[0] : '');

  const totalAmount = (item.discountedPrice * selectedQuantity).toFixed(2);

  return (
    <View style={styles.card}>
      <View style={{flexDirection:"row"}}>
         {/* Product Image */}
      <TouchableOpacity onPress={() => navigation.navigate('ShopBagScreen')}>
        <Image source={item.image} style={styles.productImage} />
      </TouchableOpacity>

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>

        {/* Variations (Color Selection) */}
        {item.variations && (<View style={{flexDirection:"row", marginTop:8}}>
          <LabelComponent value='Variations:' style={styles.variationTitle}/>
          <FlatList
            data={item.variations}
            horizontal
            keyExtractor={(variation) => variation}
            renderItem={({ item: variation }) => (
              <TouchableOpacity
                style={[
                  styles.variationButton,
                  selectedVariation === variation && styles.selectedVariationButton,
                ]}
                onPress={() => setSelectedVariation(variation)}
              >
                <Text
                  style={[
                    styles.variationText,
                    selectedVariation === variation && styles.selectedVariationText,
                  ]}
                >
                  {variation}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
          
          
        )}

       {item.rating !== null && item.rating !== undefined && (
                <View
                  style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                    <LabelComponent value={`${item.rating}`} style={styles.rating}/>
                  {Array.from({length: 5}).map((_, index) => (
                    <Image
                      key={index}
                      source={
                        index < Math.floor(item.rating!)
                          ? icons.IC_STAR
                          : icons.IC_STAR_UNFILLED
                      }
                      style={{width: 14, height: 14, marginLeft: 2}}
                      resizeMode="contain"
                    />
                  ))}
                
                </View>
              )}

        {/* Pricing & Total Amount */}
        <View style={styles.priceContainer}>
          <Text style={styles.discountedPrice}>${item.discountedPrice.toFixed(2)}</Text>
          <View style={{flexDirection:"column"}}>
          {item.discountPercentage && (
            <Text style={styles.discountTag}>upto {item.discountPercentage}%off</Text>
          )}
          {item.originalPrice && (
            <Text style={styles.originalPrice}>${item.originalPrice.toFixed(2)}</Text>
          )}
          
          </View>
         
        </View>


       
      </View>
      </View>
     <View style={styles.divider}/>
<View style={{flexDirection:"row", justifyContent:"space-between", width:"100%"}}>
<Text style={styles.orderText}>Total Order(1):</Text>
<Text style={styles.totalAmount}> ${totalAmount}</Text>
</View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
   
    alignItems: 'center',
    backgroundColor: Colors.white,
 paddingVertical:hp("2%"),
 paddingHorizontal:wp("3%"),
    borderRadius:6,
    marginVertical: 10,

    elevation: 6,
  
  },
  productImage: {
    width:wp("35%"),
    height:hp("17%"),
    resizeMode: 'cover',
    marginRight: 10,
    borderRadius:6
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontFamily: TextStyles.semiBoldText,
    color: Colors.black,
  },
  variationButton: {
    paddingHorizontal: wp("1%"),
    paddingVertical: hp("0.2%"),
    marginRight: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
  },
  selectedVariationButton: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  variationTitle:{
    fontFamily:TextStyles.mediumText,
    fontSize:Dimens.fontSize.FONTSIZE_12,
    marginRight:wp("2%")
  },
  variationText: {
    fontFamily: TextStyles.mediumText,
    fontSize: 10,
    color: Colors.black,
  },
  selectedVariationText: {
    color: Colors.white,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating:{
    fontFamily: TextStyles.mediumText,
    fontSize:12
  },
  label: {
    fontSize: 14,
    fontFamily: TextStyles.regularText,
    marginRight: 5,
  },
  picker: {
    height: 30,
    width: 80,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discountedPrice: {
    fontSize: 16,
    fontFamily: TextStyles.semiBoldText,
    marginRight:wp("5%")
   
  },
  originalPrice: {
    fontSize: 12,
    fontFamily: TextStyles.mediumText,
    textDecorationLine: 'line-through',
    marginLeft: 5,
    color: "#A7A7A7",
  },
  discountTag: {
    fontSize: 8,
    fontFamily: TextStyles.mediumText,
    color:Colors.primary,
    marginLeft: 5,
  },
  totalAmount: {
    fontSize: 12,
    fontFamily: TextStyles.semiBoldText,

    marginTop: 5,
  },
  orderText: {
    fontSize: 12,
    fontFamily: TextStyles.mediumText,

    marginTop: 5,
  },
  divider: {
    marginTop:hp("2%"),
    borderBottomWidth: 1,
    borderBottomColor: Colors.silverSand,
    width: '100%',
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 14,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.darkGray1,
    borderRadius: 8,
    color: Colors.black,
    marginBottom: 5,
  },
  inputAndroid: {
    fontSize: 14,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.darkGray1,
    borderRadius: 8,
    color: Colors.black,
    marginBottom: 5,
  },
};

export default CartListCardComponent;
