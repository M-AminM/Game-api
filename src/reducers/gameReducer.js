const initialState = { upcoming: [], popular: [], newGames: [], search: [] };

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        upcoming: action.payload.upcoming,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
      };
    case "SEARCH_GAMES":
      return {
        ...state,
        search: action.payload.search,
      };
    case "CLEAR_SEARCH":
      return {
        ...state,
        search: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default gameReducer;
