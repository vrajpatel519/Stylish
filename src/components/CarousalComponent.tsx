import React, { useRef } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity, ImageSourcePropType } from "react-native";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";
import Animated, { useSharedValue } from "react-native-reanimated";
import { icons, image } from "../constants/images";
import { TextStyles } from "../constants/textstyle";

const { width } = Dimensions.get("window");



interface CarouselItem {
  id: number;
  image: ImageSourcePropType;
  text?: string;
  text2?: string;
  buttonText?: string;
}

interface CarouselComponentProps {
  data: CarouselItem[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ data }) => {
  const carouselRef = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    carouselRef.current?.scrollTo({
      count: index - progress.value, // Ensures smooth transition to nearest index
      animated: true,
    });
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Carousel
        ref={carouselRef}
        loop
        width={width}
        height={189}
        autoPlay
        autoPlayInterval={3000}
        data={data}
        scrollAnimationDuration={1000}
        onProgressChange={progress} // ✅ Syncs pagination dots
        renderItem={({ item }) => (
          <View
            style={{
              width: width - 30,
              height: 189,
              borderRadius: 12,
              overflow: "hidden",
              alignSelf: "center",
            }}
          >
            <Image
              source={item.image}
              style={{ width: "100%", height: "100%", position: "absolute" }}
            />
            {item.text && item.text2 && item.buttonText && <View
              style={{
                position: "absolute",
                left: 20,
                top: "35%",
                transform: [{ translateY: -40 }],
                padding: 10,
                borderRadius: 10,
                alignItems: "flex-start",
              }}
            >
              <Text style={{ color: "white", fontFamily: TextStyles.boldText, fontSize: 20 }}>
                {item.text}
              </Text>
              <Text style={{ color: "white", fontFamily: TextStyles.regularText, fontSize: 12, width: "70%" }}>
                {item.text2}
              </Text>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  backgroundColor: "transparent",
                  paddingVertical: 8,
                  paddingHorizontal: 8,
                  borderRadius: 6,
                  borderWidth: 1,
                  borderColor: "white",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontFamily: TextStyles.semiBoldText, fontSize: 12, marginRight: 4 }}>
                  {item.buttonText}
                </Text>
                <Image source={icons.IC_RIGHT_ARROW} style={{ width: 14, height: 10 }} />
              </TouchableOpacity>
            </View>}
          </View>
        )}
      />


      <Pagination.Basic
        progress={progress}
        data={data}
        dotStyle={{ backgroundColor: "#DEDBDB", borderRadius: 50 }}
        activeDotStyle={{
            borderRadius: 50,
        
            backgroundColor: "#FFA3B3",
        }}
        containerStyle={{ gap: 5, marginTop: 10 }}
        onPress={onPressPagination} 

      />
    </View>
  );
};

export default CarouselComponent;
