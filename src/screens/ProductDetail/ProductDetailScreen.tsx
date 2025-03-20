import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import ToolbarComponent from '../../components/ToolbarComponent';
import LabelComponent from '../../components/LableComponent';
import SearchbarComponent from '../../components/SearchbarComponent';

import HorizontalScrollCards from '../../components/HorizontalScrollCardsComponent';

import {carousalData2, SimilarProducts} from '../../constants/products';
import {icons, image} from '../../constants/images';
import {styles} from './Styles';
import CarouselComponent from '../../components/CarousalComponent';
import {useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const CompareComponent = () => (
  <View>
    <Text>Compare Products Displayed Here</Text>
  </View>
);
const ProductDetailScreen = () => {
  const [selectedSize, setSelectedSize] = useState<string>('7');
  const sizes = ['6', '7', '8', '9', '10'];
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeComponent, setActiveComponent] = useState<'similar' | 'compare'>(
    'similar',
  );
  const fullText =
    'Perhaps the most iconic sneaker of all time, this original "Chicago" colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1. This 2015 release saw the ...More';
  const shortText = fullText.substring(0, 120) + '...';
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ToolbarComponent
        frontIcon={icons.IC_ARROW_LEFT}
        frontPress={() => navigation.goBack()}
        lastIcon={icons.IC_CART}
     
        style={styles.toolbarConatiner}
      />
      <ScrollView>
        <CarouselComponent data={carousalData2} />
        <LabelComponent
          value={`Size: ${selectedSize}UK`}
          style={styles.sizeText}
        />
        <View style={styles.sizeBtnContainer}>
          {sizes.map(size => (
            <TouchableOpacity
              key={size}
              style={[
                styles.button,
                selectedSize === size && styles.selectedButton, // If selected, apply filled style
              ]}
              onPress={() => setSelectedSize(size)}>
              <Text
                style={[
                  styles.text,
                  selectedSize === size && styles.selectedText,
                ]}>{`${size} UK`}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <LabelComponent value="Nike Sneakers" style={styles.productTitle} />
        <LabelComponent
          value="Vision Alta Men's Shoes Size (All Colours)"
          style={styles.productSubTitle}
        />
        <View style={styles.ratingContainer}>
          {Array.from({length: 5}).map((_, index) => (
            <Image
              key={index}
              source={index == 4 ? icons.IC_STAR_UNFILLED : icons.IC_STAR}
              style={styles.starimg}
              resizeMode="contain"
            />
          ))}
          <Text style={styles.totalUserText}>56890</Text>
        </View>
        <View style={styles.priceContainer}>
          <View style={{position: 'relative'}}>
            <Text style={styles.originalPrice}>₹2,999</Text>
          </View>
          <LabelComponent value="₹1,500" style={styles.discountPrice} />
          <LabelComponent value="30% OFF" style={styles.discountPercentage} />
        </View>
        <View style={styles.productDetailConatiner}>
          <LabelComponent
            value="Product Details"
            style={styles.productDetailText}
          />
          <LabelComponent
            value={isExpanded ? fullText : shortText}
            style={styles.descriptionText}
          />

          <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
            <Text style={styles.readMoreText}>
              {isExpanded ? 'Less' : 'More'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image source={icons.IC_NEARSTORE} style={styles.nearstoreBtn} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={icons.IC_VIP} style={styles.vipBtn} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={icons.IC_RETURNPOLICY} style={styles.nearstoreBtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.gocartBtnContainer}>
          <TouchableOpacity>
            <Image source={image.GOCARTBTN} style={styles.gocartBtn} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={image.BUYNOWBTN} style={styles.gocartBtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.deliveryContainer}>
          <LabelComponent value="Delivery in" style={styles.deliveryText} />
          <LabelComponent value="1 within Hour" style={styles.hourText} />
        </View>

        <View style={styles.compareContainer}>
          <TouchableOpacity  onPress={() => setActiveComponent("similar")} style={styles.similarBtn}>
            <Image source={icons.IC_EYE_OPEN} style={styles.eyeimg} />
            <LabelComponent value="View Similar" style={styles.similartxt} />
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => setActiveComponent("compare")} style={styles.similarBtn}>
            <Image source={icons.IC_COMPARE} style={styles.eyeimg} />
            <LabelComponent value="Add to Compare" style={styles.similartxt} />
          </TouchableOpacity>
        </View>
        <View style={{ padding: 10 }}>
        {activeComponent === "similar" ? <SimilarComponent /> : <CompareComponent />}
      </View>
      </ScrollView>
    </View>
  );
};


const SimilarComponent = () => (
  <View>

    <Text style={styles.totalsimilarItems}>{'Similar To\n282+ Items'}</Text>
    <HorizontalScrollCards products={SimilarProducts} isWhishlist={true}/>
  </View>
);

export default ProductDetailScreen;
