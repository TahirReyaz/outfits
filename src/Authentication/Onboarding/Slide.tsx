import { Dimensions, StyleSheet, View, Text, Image } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");
export const SLIDER_HEIGHT = height * 0.61;
export const BORDER_RADIUS = 75;

interface SlideProps {
  title: string;
  right?: boolean;
  img: number;
}

const Slide = ({ title, right, img }: SlideProps) => {
  const transform = [
    { translateY: (SLIDER_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.underlay}>
        <Image source={img} style={styles.img} />
      </View>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
  title: {
    fontSize: 80,
    fontFamily: "SFProText-Bold",
    color: "white",
    textAlign: "center",
    lineHeight: 80,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },
  img: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderBottomRightRadius: BORDER_RADIUS,
  },
});
