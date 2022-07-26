const initialState = {
  game: { platforms: [] },
  screen: { results: [] },
  isLoading: false,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DETAIL":
      return {
        ...state,
        game: action.value.game,
        screen: action.value.screen,
        isLoading: true,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
export default detailReducer;
