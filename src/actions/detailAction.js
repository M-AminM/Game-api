import axios from "axios";
import { gameDetailsURL, screenShotsURL } from "../api";

const detailAction = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await axios.get(gameDetailsURL(id));
  const screenData = await axios.get(screenShotsURL(id));

  dispatch({
    type: "FETCH_DETAIL",
    value: {
      game: detailData.data,
      screen: screenData.data,
    },
  });
};
export default detailAction;
