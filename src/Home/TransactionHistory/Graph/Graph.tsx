import { Dimensions } from "react-native";
import React from "react";

import { Box, useTheme } from "../../../components";
import { Theme } from "../../../components/Theme";
import Underlay, { MARGIN } from "./Underlay";
import { lerp } from "./Scale";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305; // This number came from figma design

export interface DataPoint {
  date: number;
  value: number;
  color: keyof Theme["colors"];
  id: number;
}
interface GraphProps {
  data: DataPoint[];
  minDate: number;
  maxDate: number;
}

const Graph = ({ data, minDate, maxDate }: GraphProps) => {
  const numOfMonths = new Date(maxDate - minDate).getMonth();
  const theme = useTheme();
  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - theme.spacing[MARGIN];
  const height = canvasHeight - theme.spacing[MARGIN];
  const step = width / numOfMonths;
  const values = data.map((p) => p.value);
  const dates = data.map((p) => p.date);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);

  return (
    <Box marginTop="xl" paddingBottom={MARGIN} paddingLeft={MARGIN}>
      <Underlay
        {...{ minY, maxY, dates, step, minX: minDate, maxX: maxDate }}
      />
      <Box width={width} height={height} marginTop="xl">
        {data.map((point) => {
          const i = new Date(point.date - minDate).getMonth();
          return (
            <Box
              key={i}
              position="absolute"
              left={step * i}
              bottom={0}
              width={step}
              height={lerp(0, height, point.value / maxY)}
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
