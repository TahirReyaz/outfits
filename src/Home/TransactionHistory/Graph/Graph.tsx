import { Dimensions } from "react-native";
import React from "react";

import { Box, useTheme } from "../../../components";
import { Theme } from "../../../components/Theme";
import Underlay from "./Underlay";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305; // This number came from figma design

const lert = (v0: number, v1: number, t: number) => (1 - t) * v0 + t * v1;

export interface DataPoint {
  date: number;
  value: number;
  color: keyof Theme["colors"];
}
interface GraphProps {
  data: DataPoint[];
}

const Graph = ({ data }: GraphProps) => {
  const theme = useTheme();
  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - theme.spacing.l;
  const height = canvasHeight - theme.spacing.l;
  const step = canvasWidth / data.length;
  const values = data.map((p) => p.value);
  const dates = data.map((p) => p.date);
  const minX = Math.min(...dates);
  const maxX = Math.max(...dates);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);

  return (
    <Box marginTop="xl" paddingBottom="l" paddingLeft="l">
      <Underlay {...{ minY, maxY, dates, step }} />
      <Box width={width} height={height} marginTop="xl">
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
            >
              <Box
                position="absolute"
                top={0}
                bottom={0}
                left={theme.spacing.m}
                right={theme.spacing.m}
                backgroundColor={point.color}
                opacity={0.1}
                borderTopLeftRadius="m"
                borderTopRightRadius="m"
              />
              <Box
                position="absolute"
                top={0}
                height={32}
                left={theme.spacing.m}
                right={theme.spacing.m}
                backgroundColor={point.color}
                borderRadius="m"
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Graph;
