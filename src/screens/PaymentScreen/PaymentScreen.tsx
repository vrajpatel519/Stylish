import React, { useState } from 'react';
import {
  FlatList,
  Image,

  Modal,

  TouchableWithoutFeedback,

  View,
} from 'react-native';

import ToolbarComponent from '../../components/ToolbarComponent';
import LabelComponent from '../../components/LableComponent';
import {styles} from './Styles';


import {CartProducts} from '../../constants/products';
import {icons, image} from '../../constants/images';
import {useNavigation} from '@react-navigation/native';
import CartListCardComponent from '../../components/CartListCardComponent';
import RactangularButton from '../../components/RactangularButton';
import PaymentCardComponent from '../../components/PaymentCardComponent';

const PaymentScreen = () => {
  const navigation = useNavigation();
   const [modalVisible, setModalVisible] = useState(false);
   const [selectedPayment, setSelectedPayment] = useState<string | null>(null);


   const paymentMethods = [
    { id: 'VISA', img: image.VISA, accNo: '*********2109' },
    { id: 'PAYPAL', img: image.PAYPAL, accNo: '*********2109' },
    { id: 'MAESTRO', img: image.MAESTRO, accNo: '*********2109' },
    { id: 'APPLEPAY', img: image.APPLEPAY, accNo: '*********2109' },
  ];

  const handlePaymentSelect = (id: string) => {
    setSelectedPayment(id);
  };

  const handleContinue = () => {
    if (selectedPayment) {
      console.log('Selected Payment Method:', selectedPayment);
      setModalVisible(true);
    } else {
      console.log('Please select a payment method');
      
    }
  };

  return (
    <View style={styles.container}>
      <ToolbarComponent
        frontIcon={icons.IC_ARROW_LEFT}
        frontPress={() => navigation.goBack()}
        titleText="Checkout"
      />
      <View style={styles.orderSection}>
      <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <LabelComponent value='Order' style={styles.blurText}/>
        <LabelComponent value='₹ 7,000' style={styles.blurText}/>
     </View>
      <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <LabelComponent value='Shipping' style={styles.blurText}/>
        <LabelComponent value='₹ 30' style={styles.blurText}/>
     </View>
      <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <LabelComponent value='Total' style={styles.text}/>
        <LabelComponent value='₹ 7,030' style={styles.text}/>
     </View>
      </View>
      <View style={styles.divider}/>

      <View style={styles.paymentSection}>
      <LabelComponent value='Payment' style={styles.text}/>
      {paymentMethods.map((method) => (
          <PaymentCardComponent
            key={method.id}
            img={method.img}
            accNo={method.accNo}
            onPress={() => handlePaymentSelect(method.id)}
            style={[
              styles.paymentCard,
              selectedPayment === method.id && styles.selectedPaymentCard, 
            ]}
          />
        ))}
<RactangularButton title="Continue" onPress={handleContinue} />
      </View>
      <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <TouchableWithoutFeedback
            onPress={() => setModalVisible(false)}
            accessible={false}>
            <View style={styles.modalOverlay}>
              <View style={styles.modalContainer}>
                <Image source={image.SUCCESSFULL} style={styles.modalImage} />
                <LabelComponent
                  value="Payment done successfully."
                  style={styles.dialogText}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
    </View>
  );
};

export default PaymentScreen;
