import {
  Card,
  CardBody,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import {
  FaLinux,
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import React from "react";
import { BsGlobe } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import IconType from "react-icons/lib";
import { ResultGame } from "../hooks/useGames";

interface Props {
  game: ResultGame;
}

type CustomIconType = React.ElementType;
const GameCard = ({ game }: Props) => {
  const iconMap: { [key: string]: CustomIconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    mac: FaApple,
    playstation: FaPlaystation,
    nintendo: SiNintendo,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl" paddingBottom={4}>
          {game.name}
        </Heading>
        <HStack>
          {game.parent_platforms.map(({ platform }) => (
            <>
              <Icon
                as={iconMap[platform.slug]}
                color="gray.500"
                fontSize={20}
              ></Icon>
            </>
          ))}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
