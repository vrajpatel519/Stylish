import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

import ToolbarComponent from '../../components/ToolbarComponent';
import LabelComponent from '../../components/LableComponent';
import {styles} from './Styles';

import {CartProducts} from '../../constants/products';
import {icons, image} from '../../constants/images';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import RactangularButton from '../../components/RactangularButton';

const ShopBagScreen = () => {
  const navigation = useNavigation();

  // State for dropdown selections
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedQuantity, setSelectedQuantity] = useState('1');

  // Size options
  const sizeOptions = [
    {label: 'S', value: 'S'},
    {label: 'M', value: 'M'},
    {label: 'L', value: 'L'},
    {label: 'XL', value: 'XL'},
  ];

  // Quantity options
  const quantityOptions = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <ToolbarComponent
          frontIcon={icons.IC_ARROW_LEFT}
          frontPress={() => navigation.goBack()}
          titleText="Shopping Bag"
          lastIcon={icons.IC_FAVORITE}
        />
        <View style={styles.productContainer}>
          <Image source={image.DOD_IMG1} style={styles.img} />
          <View style={{flexDirection: 'column'}}>
            <LabelComponent value="Women’s Casual Wear" style={styles.title} />
            <LabelComponent
              value="Checked Single-Breasted Blazer"
              style={styles.subtitle}
            />

            <View style={styles.dropdownContainer}>
              <View style={styles.dropdownContainer1}>
                <Text style={styles.sizeText}>Size</Text>
                <Dropdown
                  style={styles.dropdown}
                  data={sizeOptions}
                  labelField="label"
                  valueField="value"
                  value={selectedSize}
                  selectedTextStyle={styles.size}
                  containerStyle={styles.dropdownContainer2}
                  onChange={item => setSelectedSize(item.value)}
                />
              </View>
              <View style={styles.dropdownContainer1}>
                <Text style={styles.sizeText}>Qty </Text>
                <Dropdown
                  style={styles.dropdown}
                  data={quantityOptions}
                  labelField="label"
                  valueField="value"
                  value={selectedQuantity}
                  selectedTextStyle={styles.size}
                  containerStyle={styles.dropdownContainer2}
                  onChange={item => setSelectedQuantity(item.value)}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <LabelComponent value="Delivery by" style={styles.sizeText} />
              <LabelComponent value="10 May 2025" style={styles.title} />
            </View>
          </View>
        </View>
        <View style={styles.couponContainer}>
          <View style={{flexDirection: 'row'}}>
            <Image source={icons.IC_COUPON} style={styles.couponIcon} />
            <LabelComponent value="Apply Coupons" style={styles.couponText} />
          </View>
          <TouchableOpacity>
            <LabelComponent value="Select" style={styles.selectText} />
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <View style={styles.paymentSection}>
          <LabelComponent
            value="Order Payment Details"
            style={styles.couponText}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}>
            <LabelComponent value="Order Amounts" style={styles.regularText} />
            <LabelComponent value={'₹ 7,000.00'} style={styles.title} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <LabelComponent value="Convenience" style={styles.regularText} />
              <TouchableOpacity>
                <LabelComponent value="Know More" style={styles.knowmoreText} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <LabelComponent
                value={'Apply Coupon'}
                style={styles.knowmoreText}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}>
            <LabelComponent value="Delivery Fee" style={styles.regularText} />

            <LabelComponent value={'Free'} style={styles.selectText} />
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.totalSection}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <LabelComponent value="Order Total  " style={styles.couponText} />
            <LabelComponent value="₹ 7,000.00" style={styles.title} />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <LabelComponent
              value="EMI  Available "
              style={styles.regularText}
            />
            <TouchableOpacity>
              <LabelComponent value="Details" style={styles.knowmoreText} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <View>
        <LabelComponent value="₹ 7,000.00" style={styles.title} />
        <TouchableOpacity>
          <LabelComponent value="View Details" style={styles.knowmoreText} />
        </TouchableOpacity>
        </View>
        <RactangularButton title='Proceed to Payment' onPress={()=>{navigation.navigate("PaymentScreen")}} style={styles.button} styleText={styles.buttonText}/>
       
      </View>
    </View>
  );
};

export default ShopBagScreen;
