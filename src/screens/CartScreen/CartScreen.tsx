import React from 'react';
import {
  FlatList,
  Image,

  View,
} from 'react-native';

import ToolbarComponent from '../../components/ToolbarComponent';
import LabelComponent from '../../components/LableComponent';
import {styles} from './Styles';


import {CartProducts} from '../../constants/products';
import {icons, image} from '../../constants/images';
import {useNavigation} from '@react-navigation/native';
import CartListCardComponent from '../../components/CartListCardComponent';

const CartScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ToolbarComponent
        frontIcon={icons.IC_ARROW_LEFT}
        frontPress={() => navigation.goBack()}
        titleText="Checkout"
        style={styles.toolbarContainer}
      />

      <View style={styles.deliveryAddSection}>
        <View style={{flexDirection: 'row'}}>
          <Image source={icons.IC_LOCATION} style={styles.locationIcon} />
          <LabelComponent
            value="Delivery Address"
            style={styles.deliveryAddText}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.deliveryAddCard}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <LabelComponent value="Address:" style={styles.addressText} />
              <Image source={icons.IC_EDITADDRESS} style={styles.editIcon} />
            </View>
            <LabelComponent
              value="216 St Paul's Rd, London N1 2LL, UK Contact :  +44-784232"
              style={styles.address}
            />
          </View>
          <View style={styles.addAddCard}>
            <Image
              source={icons.IC_ADD_ADDRESS}
              style={styles.addAddressIcon}
            />
          </View>
        </View>
      </View>

      <View style={styles.shoppingListSection}>
      <FlatList
        data={CartProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartListCardComponent item={item} />}
      />
      </View>
    </View>
  );
};

export default CartScreen;
