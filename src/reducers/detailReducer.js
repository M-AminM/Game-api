const initialState = { game: { platfroms: [] }, screen: { results: [] } };

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DETAIL":
      return {
        ...state,
        game: action.value.game,
        screen: action.value.screen,
      };
    default:
      return {
        ...state,
      };
  }
};
export default detailReducer;
