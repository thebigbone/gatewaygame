import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../components/api-client";

export interface ResultGame {
    id: number;
    name: string;
    background_image: string
}
  
  interface FetchGamesResponse {
    count: number;
    results: ResultGame[];
}

const useGames = () => {
    const [game, setGame] = useState<ResultGame[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controller = new AbortController();
      // use effect to send request to backend
      apiClient
        .get<FetchGamesResponse>("/games", {signal: controller.signal})
        .then((res) => setGame(res.data.results))
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)}
        ); // custom type fetchgamesresponse for defining response type i.e. count and result

    return () => controller.abort();
    }, []);

    return {game, error};
}

export default useGames;