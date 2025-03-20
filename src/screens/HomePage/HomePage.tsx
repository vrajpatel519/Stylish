import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  View,
  FlatList,
  Image,
  Text,
  ImageSourcePropType,
  ScrollView,
} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import ToolbarComponent from '../../components/ToolbarComponent';
import LabelComponent from '../../components/LableComponent';
import {icons, image} from '../../constants/images';
import SearchbarComponent from '../../components/SearchbarComponent';
import BottomNavigation from '../../components/BottomMenuComponent';
import {styles} from './Styles';
import CarouselComponent from '../../components/CarousalComponent';
import TimeCardComponent from '../../components/TimeCardComponent';
import HorizontalScrollCards from '../../components/HorizontalScrollCardsComponent';
import Icons from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../constants/colors';
import RactangularButton from '../../components/RactangularButton';
import {carousalData1, DodProducts, TrendingProducts} from '../../constants/products';


const data = [
  {id: '1', title: 'Beauty', image: image.FEATURE1},
  {id: '2', title: 'Fashion', image: image.FEATURE2},
  {id: '3', title: 'Kids', image: image.FEATURE3},
  {id: '4', title: 'Mens', image: image.FEATURE4},
  {id: '5', title: 'Womens', image: image.FEATURE5},
];

const HomePage = () => {
  const renderItem = ({
    item,
  }: {
    item: {id: string; title: string; image: ImageSourcePropType};
  }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.label}>{item.title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <ToolbarComponent frontIcon={icons.IC_MENU} logo={image.LOGO2} lastIcon={image.PROFILE}/>
      <SearchbarComponent style={styles.searchbar} />
      <ScrollView>
        <LabelComponent value="All Featured" style={styles.categotyTitle} />
        <View style={styles.listContainer}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <CarouselComponent data={carousalData1}/>

        <TimeCardComponent
          text1="Deal of the Day"
          text2="22h 55m 20s remaining"
          img_icon={icons.IC_CLOCK}
          style={styles.timeCard}
        />
        <HorizontalScrollCards products={DodProducts} />
        <View style={styles.specialOfferCard}>
          <Image source={image.SPECIAL_OFFER} style={styles.imgSpecialOffer} />
          <View>
            <LabelComponent
              value="Special Offers 😱"
              style={styles.specialOfferTitle}
            />
            <LabelComponent
              value="We make sure you get the offer you need at best prices"
              style={styles.specialOfferSubTitle}
            />
          </View>
        </View>
        <View style={styles.heelsContainer}>
          <View style={styles.heelsContainerBackground}>
            <View style={styles.heelsTextCOntainer}>
              <LabelComponent
                value="Flat and Heels"
                style={styles.heelstext1}
              />
              <LabelComponent
                value="Stand a chance to get rewarded"
                style={styles.heelstext2}
              />
            </View>
            <RactangularButton
              title={'Visit Now'}
              onPress={() => {}}
              style={styles.heelsButton}
              styleText={styles.heelsButtonText}
              icon={icons.IC_RIGHT_ARROW}
            />
          </View>
          <Image source={image.HEELS} style={styles.heelimg} />
        </View>

        <TimeCardComponent
          text1="Trending Products"
          text2="Last Date 29/02/22"
          img_icon={icons.IC_CALENDER}
          style={styles.timeCard2}
        />
        <HorizontalScrollCards products={TrendingProducts} />
        <View style={styles.summersaleContainer}>
          <Image
            source={image.SUMMERSALEBORDING}
            style={styles.summersaleimg}
          />
          <View style={styles.summersaleTextContainer}>
            <LabelComponent
              value="New Arrivals "
              style={styles.summersaleTitle}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <LabelComponent
                value="Summer’ 25 Collections"
                style={styles.summersaleSubtitle}
              />
              <RactangularButton
                title={'Visit Now'}
                onPress={() => {}}
                style={styles.summersaleButton}
                styleText={styles.heelsButtonText}
                icon={icons.IC_RIGHT_ARROW}
              />
            </View>
          </View>
        </View>
        <View style={styles.sponserContainer}>
          <LabelComponent value='Sponserd' style={styles.sponserTitle}/>
<Image source={image.SPONSERBOARDING} style={styles.sponserimg}/>
<View style={styles.sponserTextContainer}>
<LabelComponent value='up to 50% Off' style={styles.sponserSubtitle}/>
<Image source={icons.IC_APPLE_ARROW_RIGHT} style={styles.sponserRightArrow}/>
</View>

        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;
