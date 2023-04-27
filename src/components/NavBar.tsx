import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="100px"></Image>
    </HStack>
  );
};

export default NavBar;
