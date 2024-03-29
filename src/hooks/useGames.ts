import { useState, useEffect } from "react";
import axios, { CanceledError } from "axios";
import apiClient from "../services/api-client";
import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";


export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  gameQuery: GameQuery
) =>
  useData<Game>(
    "/games",
    { params: { genres:gameQuery.genre?.id, 
      platform: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder, 
      search: gameQuery.searchText },
    } 
  ,
    [gameQuery]
  );
export default useGames;
