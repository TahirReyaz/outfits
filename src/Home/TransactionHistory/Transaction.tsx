import React from "react";
import { DataPoint } from "./Graph";
import { Box, Text } from "../../components";

interface TransactionProps {
  transaction: DataPoint;
}
const Transaction = ({ transaction }: TransactionProps) => {
  return (
    <Box
      marginTop="l"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Box flexDirection="row" alignItems="center" marginBottom="s">
          <Box
            backgroundColor={transaction.color}
            style={{ width: 10, height: 10, borderRadius: 5 }}
            marginRight="s"
          />
          <Text variant="title3">{`#${transaction.id}`}</Text>
        </Box>
        <Text color="darkGrey">{`$${transaction.value} - ${new Date(
          transaction.date
        ).toLocaleDateString()}`}</Text>
      </Box>
      <Box>
        <Text color="secondary" variant="button">
          See more
        </Text>
      </Box>
    </Box>
  );
};

export default Transaction;
