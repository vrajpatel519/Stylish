import React from 'react';
import {

  View,

} from 'react-native';


import ToolbarComponent from '../../components/ToolbarComponent';
import LabelComponent from '../../components/LableComponent';
import SearchbarComponent from '../../components/SearchbarComponent';
import {styles} from './Styles';

import HorizontalScrollCards from '../../components/HorizontalScrollCardsComponent';

import { WishlistProducts} from '../../constants/products';
import { icons, image } from '../../constants/images';




const WishlistScreen = () => {

  return (
    <View style={styles.container}>
       <ToolbarComponent frontIcon={icons.IC_MENU} logo={image.LOGO2} lastIcon={image.PROFILE}/>
      <SearchbarComponent style={styles.searchbar} />

      <LabelComponent value="52,082+ Iteams " style={styles.totalItemCountText} />
     <HorizontalScrollCards products={WishlistProducts} isWhishlist={true}/>
 
    </View>
  );
};

export default WishlistScreen;
