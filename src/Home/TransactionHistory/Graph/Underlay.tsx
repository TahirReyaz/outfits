import { StyleSheet } from "react-native";
import React from "react";
import { Box, Text, useTheme } from "../../../components";

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
  const monthNum = new Date(date).getMonth();
  return monthNames[monthNum];
};

interface UnderlayProps {
  dates: number[];
  minY: number;
  maxY: number;
  step: number;
}

const Underlay = ({ dates, minY, maxY, step }: UnderlayProps) => {
  const theme = useTheme();
  return (
    <Box style={StyleSheet.absoluteFill}>
      <Box flex={1} />
      <Box
        marginLeft="l"
        height={theme.spacing.l}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {dates.map((date, index) => (
          <Box width={step}>
            <Text key={index} color="darkGrey" textAlign="center">
              {formatter(date)}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Underlay;
