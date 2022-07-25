import axios from "axios";
import { newGamesURL, popularGamesURL, upcomingGamesURL } from "../api";

export const loadGames = () => async (dispatch) => {
  const upcomingGames = await axios.get(upcomingGamesURL());
  const popularGames = await axios.get(popularGamesURL());
  const newGames = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      upcoming: upcomingGames.data.results,
      popular: popularGames.data.results,
      newGames: newGames.data.results,
    },
  });
};
