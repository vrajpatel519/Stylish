import React, { useState } from 'react';
import {

    Image,
  ImageSourcePropType,
  ScrollView,
  TouchableOpacity,
  View,

} from 'react-native';


import ToolbarComponent from '../../components/ToolbarComponent';
import LabelComponent from '../../components/LableComponent';
import SearchbarComponent from '../../components/SearchbarComponent';
import {styles} from './Styles';

import HorizontalScrollCards from '../../components/HorizontalScrollCardsComponent';

import { WishlistProducts} from '../../constants/products';
import { icons, image } from '../../constants/images';
import { useNavigation } from '@react-navigation/native';
import {
    launchImageLibrary,
    ImagePickerResponse,
    ImageLibraryOptions,
    Asset,
  } from 'react-native-image-picker';
import CheckoutTextfieldComponent from '../../components/CheckoutTextFieldComponent';
import RactangularButton from '../../components/RactangularButton';



const CheckoutDetailScreen = () => {
const navigation= useNavigation();
const [profileImage, setProfileImage] = useState<ImageSourcePropType>(
    image.PROFILE,
  );
  const [imageUri, setImageUri] = useState<string | null>(null);
    const [email,setEmail] = useState<string>('');
    const [password, setPassword] = useState('');

const handleImagePicker = async () => {
    // const hasPermission = await requestStoragePermission();

    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1,
      selectionLimit: 1,
    };

    launchImageLibrary(options, response => {
        console.log("Response assets: " + response.assets);
      if (response.assets && response.assets.length > 0) {
        console.log("Response assets: " + response.assets);
        
        const selectedImage: Asset = response.assets[0];

        if (selectedImage.fileSize && selectedImage.fileSize > 5 * 1024 * 1024) {
        //   Toast.show({
        //     text: 'Upload Image Less than 5MB',
        //     duration: Snackbar.LENGTH_SHORT,
        //   });
          return;
        }

        const allowedFormats = ['image/jpeg', 'image/png', 'image/svg+xml'];
        if (!allowedFormats.includes(selectedImage.type ?? '')) {
        //   Snackbar.show({
        //     text: 'Only JPG, PNG, and SVG files are allowed',
        //     duration: Snackbar.LENGTH_SHORT,
        //   });
          return;
        }

        setProfileImage({uri: selectedImage.uri ?? ''});
        setImageUri(selectedImage.uri ?? null);
      }
    });
  };
  return (
    <View style={styles.container}>
       <ToolbarComponent frontIcon={icons.IC_ARROW_LEFT} frontPress={()=>navigation.goBack()} titleText='Checkout' />
<ScrollView>
<View style={styles.profileSection}>
        <Image source={profileImage} style={styles.profileImage} />
        <TouchableOpacity style={styles.editIconBtn} onPress={handleImagePicker}>
          <Image source={icons.IC_EDIT} style={styles.editIcon}/>
        </TouchableOpacity>
      </View>

      <View style={styles.personalDetailSection}>
        <LabelComponent value='Personal Details' style={styles.personalDetailText}/>
<CheckoutTextfieldComponent placeholder='Email Address' value={'aashifa@gmail.com'} style={styles.textField}/>
<CheckoutTextfieldComponent placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry={true} style={styles.textField}/>
<TouchableOpacity>
<LabelComponent value='Change Password' style={styles.changepasswordText}/>
</TouchableOpacity>
      </View>
      <View style={styles.divider} />
 <View  style={styles.businessAddressDetailSection}>
 <LabelComponent value='Business Address Details' style={styles.personalDetailText}/>
 <CheckoutTextfieldComponent placeholder='Pincode' value={'450116'}  style={styles.textField}/>
 <CheckoutTextfieldComponent placeholder='Address' value={"216 St Paul's Rd, "}  style={styles.textField}/>
 <CheckoutTextfieldComponent placeholder='City' value={"London"}  style={styles.textField}/>
 <CheckoutTextfieldComponent placeholder='State' value={"N1 2LL,"}  style={styles.textField}/>
 <CheckoutTextfieldComponent placeholder='Country' value={"United Kingdom"}  style={styles.textField}/>

 </View>
 <View style={styles.divider} />
 <View  style={styles.businessAddressDetailSection}>
 <LabelComponent value='Bank Account Details' style={styles.personalDetailText}/>
 <CheckoutTextfieldComponent placeholder='Bank Account Number' value={'204356XXXXXXX'}  style={styles.textField}/>
 <CheckoutTextfieldComponent placeholder='Account Holder’s Name' value={"Abhiraj Sisodiya"}  style={styles.textField}/>
 <CheckoutTextfieldComponent placeholder='IFSC Code' value={"SBIN00428"}  style={styles.textField}/>
 <RactangularButton title={'Save'} onPress={()=>{navigation.navigate("CartScreen")} }/>
 </View>

</ScrollView>
    </View>
  );
};

export default CheckoutDetailScreen;
