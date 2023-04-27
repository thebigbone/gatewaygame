import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const CustomText = () => {
    return colorMode === "dark" ? (
      <Text>Switch to Light Mode</Text>
    ) : (
      <Text>Switch to Dark Mode</Text>
    );
  };

  return (
    <HStack>
      <Switch
        colorScheme="blue"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      {CustomText()}
    </HStack>
  );
};

export default ColorSwitch;
