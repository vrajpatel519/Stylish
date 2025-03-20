import React, { useEffect } from "react";
import { View, Image, StyleSheet, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { Colors } from "../../constants/colors";
import { image } from "../../constants/images";

type Props = NativeStackScreenProps<RootStackParamList, "SplashScreen">;

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    const checkWalkthrough = async () => {
      const hasSeenWalkthrough = await AsyncStorage.getItem("hasSeenWalkthrough");
      if (hasSeenWalkthrough) {
        navigation.replace("LoginPage");
      } else {
        navigation.replace("Walkthrough");
      }
    };

    setTimeout(checkWalkthrough, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
       <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'}/>
      <Image source={image.LOGO1} style={{ height: hp('13.5%'), width: wp('77%') }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
});

export default SplashScreen;
