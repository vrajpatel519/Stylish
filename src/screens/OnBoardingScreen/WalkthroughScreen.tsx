import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/AppNavigator'; 
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';
import { TextStyles} from '../../constants/textstyle';
import LabelComponent from '../../components/LableComponent';
import { Colors } from '../../constants/colors';
import { image } from '../../constants/images';
import { styles } from './Styles';

const steps = [
  {
    id: 1,
    image: image.ONBOARDING1,
   style: {height:300, width:300},

   lable: 'Choose Products',
   discription:'Amet minim mollit non deserunt ullamco est\nsit aliqua dolor do amet sint. Velit officia\nconsequat duis enim velit mollit.'
  },
  {
    id: 2,
    image: image.ONBOARDING2,
    style: {height:220, width:300},
     lable: 'Make Payment',
   discription:'Amet minim mollit non deserunt ullamco est\nsit aliqua dolor do amet sint. Velit officia\nconsequat duis enim velit mollit.'
  },
  {
    id: 3,
    image: image.ONBOARDING3,
    style: {height:350, width:350},
     lable: 'Get Your Order',
   discription:'Amet minim mollit non deserunt ullamco est\nsit aliqua dolor do amet sint. Velit officia\nconsequat duis enim velit mollit.'
  },
];

export default function Walkthrough() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [currentStep, setCurrentStep] = useState(0);

  const completeWalkthrough = async () => {
    await AsyncStorage.setItem('hasSeenWalkthrough', 'true');
    navigation.navigate('LoginPage');
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeWalkthrough();
    }
  };

  const handleSkip = () => {
    completeWalkthrough();
  };

  const distanceThreshold = 100;
  const velocityThreshold = 0.2;
  
  const handleSwipe = ({ nativeEvent }: any) => {
    const { translationX, velocityX, state } = nativeEvent;
  
    if (state !== State.END) return; 
  
    if (translationX < -distanceThreshold && velocityX < -velocityThreshold) {
      handleNext(); 
    } else if (translationX > distanceThreshold && velocityX > velocityThreshold) {
      setCurrentStep((prev) => Math.max(0, prev - 1)); 
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'}/>
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.pageCount}>{`${currentStep + 1} `}</Text>
          <Text
            style={[
              styles.pageCount,
              {color: Colors.quickSilver},
            ]}>{`/ ${steps.length} `}</Text>
        </View>

        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <PanGestureHandler onHandlerStateChange={handleSwipe}>
        <View style={styles.card}>
          <Image
            source={steps[currentStep].image}
            style={steps[currentStep].style}
          />
         <LabelComponent value={steps[currentStep].lable}  style={styles.lableTitleText}/>
         <LabelComponent value={'Amet minim mollit non deserunt ullamco est\nsit aliqua dolor do amet sint. Velit officia\nconsequat duis enim velit mollit.'} style={styles.descriptionText}/>
        </View>
      </PanGestureHandler>

      <View style={styles.footerContainer}>
       
        <TouchableOpacity
          disabled={currentStep === 0}
          onPress={() => setCurrentStep(currentStep - 1)}
          
        >
          <Text style={[styles.buttonText,{color:Colors.silverSand}, currentStep === 0 && styles.disabledText, ]}>Prev</Text>
        </TouchableOpacity>

        
        <View style={styles.indicatorContainer}>
  {steps.map((_, index) => (
    <View 
      key={index} 
      style={[
        styles.indicator,
        currentStep === index && styles.activeIndicator,
      ]}
    />
  ))}
</View>
        <TouchableOpacity onPress={handleNext} >
          <Text style={[styles.buttonText, {color:Colors.primary}]}>
            {currentStep < steps.length - 1 ? 'Next' : 'Finish'}
          </Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
}

