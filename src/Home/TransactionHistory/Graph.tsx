import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Box, useTheme } from "../../components";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305; // This number came from figma design

const lert = (v0: number, v1: number, t: number) => (1 - t) * v0 + t * v1;

interface Point {
  date: number;
  value: number;
}
interface GraphProps {
  data: Point[];
}

const Graph = ({ data }: GraphProps) => {
  const theme = useTheme();
  const width = wWidth - theme.spacing.m * 2;
  const height = width * aspectRatio;
  const step = width / data.length;
  const values = data.map((p) => p.value);
  const dates = data.map((p) => p.date);
  const minX = Math.min(...dates);
  const maxX = Math.max(...dates);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);

  return (
    <Box width={width} height={height} marginTop="m">
      {data.map((point, i) => {
        if (point.value === 0) {
          return null;
        }
        return (
          <Box
            key={i}
            position="absolute"
            left={step * i}
            bottom={0}
            width={step}
            height={lert(0, height, point.value / maxY)}
            backgroundColor="primary"
          />
        );
      })}
    </Box>
  );
};

export default Graph;
