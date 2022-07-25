const initialState = { upcoming: [], popular: [], newGames: [] };

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        upcoming: action.payload.upcoming,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
      };
    default:
      return {
        ...state,
      };
  }
};

export default gameReducer;
