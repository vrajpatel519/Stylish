import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Alert,
  StyleSheet,
  Image,
} from 'react-native';
import { icons } from '../constants/images';
import { TextStyles } from '../constants/textstyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface SearchbarComponentProps {
  style?: object;
}

const SearchbarComponent: React.FC<SearchbarComponentProps> = ({ style }) => {
  const [isListening, setIsListening] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');





 

  return (
    <View style={[styles.container, style]}>
      <Image source={icons.IC_SEARCH} style={styles.search} />
      <TextInput
        style={styles.input}
        placeholder="Search any Product.."
        placeholderTextColor={'#BBBBBB'}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <TouchableOpacity onPress={()=>{}} style={styles.micButton}>
        <Image
          source={isListening ? icons.IC_MIC_ON : icons.IC_MIC_OFF}
          style={styles.mic}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  search: {
    height: hp('1.9%'),
    width: wp('4.20%'),
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontFamily: TextStyles.regularText,
    fontSize: 14,
    color: '#BBBBBB',
  },
  micButton: {
    padding: 5,
  },
  mic: {
    height: hp('2.40%'),
    width: wp('3.94%'),
  },
});

export default SearchbarComponent;
