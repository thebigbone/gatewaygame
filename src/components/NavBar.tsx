import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";
import ColorSwitch from "./ColorSwitch";

const NavBar = () => {
  return (
    <HStack justify="space-between" padding="10px">
      <Image src={logo} boxSize="100px"></Image>
      <ColorSwitch />
    </HStack>
  );
};

export default NavBar;
