import React from "react";
import {  FlatList, Dimensions, ImageSourcePropType } from "react-native";
import ProductCardComponent from "./ProductCardComponent";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';






interface Product {
  id: string;
  image: ImageSourcePropType;
  title: string;
  subtitle?: string;
  originalPrice?: number;
  discountedPrice: number;
  discountPercentage?: number;
  rating?: number;
  totalUsers?: number;
  
}

const HorizontalScrollCards = ({ products ,isWhishlist=false}: { products: Product[], isWhishlist?:boolean }) => {
  return isWhishlist ? (

    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      numColumns={2}
      
      renderItem={({ item }) => <ProductCardComponent item={item} isWhishlist={isWhishlist}/>}
      contentContainerStyle={{   paddingVertical: 10,
       
        paddingHorizontal: wp("1%"),  alignItems: "stretch", // Ensure both columns align properly
        gap: 0,  }}
        columnWrapperStyle={{
          justifyContent: "space-between", // Avoid extra space in uneven rows
        }}
      showsVerticalScrollIndicator={false}
    
    />
  ) : (
 
    <FlatList
      data={products}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductCardComponent item={item} />}
      contentContainerStyle={{ paddingVertical: 10 }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default HorizontalScrollCards;
