import React, { useRef } from "react";
import { Dimensions, StyleSheet, View, Image } from "react-native";
import Animated, {
  divide,
  Extrapolate,
  interpolateNode,
  multiply,
} from "react-native-reanimated";
import {
  useScrollHandler,
  interpolateColor,
} from "react-native-redash/lib/module/v1";
import Dot from "./Dot";

import Slide, { SLIDER_HEIGHT } from "./Slide";
import Subslide from "./Subslide";
import { useTheme } from "../../components";
import { AuthNavigationProps } from "../../components/Navigation";
import { Theme, makeStyles } from "../../components/Theme";

const { width } = Dimensions.get("window");

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfits here!",
    color: "#BFEAF5",
    img: {
      src: require("../assets/1.png"),
      width: 401,
      height: 623,
    },
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    color: "#BEECC4",
    img: {
      src: require("../assets/2.png"),
      width: 539,
      height: 518,
    },
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual and unique style and look amazing everyday",
    color: "#FFE4D9",
    img: {
      src: require("../assets/3.png"),
      width: 637,
      height: 683,
    },
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description: "Discover the trends in fashion and explore your personality",
    color: "#FFDDDD",
    img: {
      src: require("../assets/4.png"),
      width: 448,
      height: 656,
    },
  },
];
export const assets = slides.map((slide) => slide.img.src);

const Onboarding = ({ navigation }: AuthNavigationProps<"Onboarding">) => {
  const styles = useStyles();
  const theme = useTheme();
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {/* Bg images */}
        {slides.map(({ img }, index) => {
          const opacity = interpolateNode(x, {
            inputRange: [
              (index - 0.5) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });

          return (
            <Animated.View style={[styles.underlay, { opacity }]} key={index}>
              <Image
                source={img.src}
                style={{
                  width: width - theme.borderRadii.xl,
                  height:
                    ((width - theme.borderRadii.xl) * img.height) / img.width,
                }}
              />
            </Animated.View>
          );
        })}

        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ title, img }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, img }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Animated.View style={[styles.footerContent, ,]}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} index={index} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1;

              return (
                <Subslide
                  key={index}
                  {...{ subtitle, description, last }}
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome");
                    } else if (scroll.current) {
                      (scroll.current as any).scrollTo({
                        x: width * (index + 1),
                        animated: true,
                      });
                    }
                  }}
                />
              );
            })}
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDER_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii.xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomRightRadius: theme.borderRadii.xl,
    overflow: "hidden",
  },
}));
