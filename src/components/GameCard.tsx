import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { ResultGame } from "../hooks/useGames";

interface Props {
  game: ResultGame;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
