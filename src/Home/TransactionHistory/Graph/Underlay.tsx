import { StyleSheet } from "react-native";
import React from "react";

import { Box, Text, useTheme } from "../../../components";
import { lerp } from "./Scale";

// const formatter = Intl.DateTimeFormat("en", { month: "short" });
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const formatter = (date: number) => {
  const monthNum = date % 12;
  return monthNames[monthNum];
};
export const MARGIN = "xl";
const ROW_HEIGHT = 16;

interface UnderlayProps {
  dates: number[];
  minY: number;
  maxY: number;
  minX: number;
  maxX: number;
  step: number;
}

const Underlay = ({ dates, minY, maxY, step, minX, maxX }: UnderlayProps) => {
  const theme = useTheme();
  const numOfMonths = new Date(maxX - minX).getMonth();
  return (
    <Box style={StyleSheet.absoluteFill}>
      {/* Y axis */}
      <Box flex={1} justifyContent="space-between">
        {[1, 0.66, 0.33, 0].map((t) => (
          <Box
            key={t}
            flexDirection="row"
            alignItems="center"
            height={ROW_HEIGHT}
            style={{
              top: t === 0 ? ROW_HEIGHT / 2 : t === 1 ? -ROW_HEIGHT / 2 : 0,
            }}
          >
            <Box width={theme.spacing[MARGIN]} paddingRight="s">
              <Text color="darkGrey" textAlign="right">
                {Math.round(lerp(minY, maxY, t))}
              </Text>
            </Box>
            <Box flex={1} height={1} backgroundColor="grey" />
          </Box>
        ))}
      </Box>
      {/* X axis */}
      <Box
        marginLeft={MARGIN}
        height={theme.spacing[MARGIN]}
        flexDirection="row"
        alignItems="center"
      >
        {new Array(numOfMonths)
          .fill(0)
          .map((_, i) => new Date(minX).getMonth() + i)
          .map((date, index) => (
            <Box key={index} width={step}>
              <Text color="darkGrey" textAlign="center">
                {formatter(date)}
              </Text>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Underlay;
