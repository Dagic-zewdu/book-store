import categoriesActionType from './categories.type';

const INITIAL_STATE = {
  loading: true,
  categories: [],
  error: false,
};
const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action) {
    case categoriesActionType.FETCH_CATEGORIES_START:
      return {
        ...state,
        loading: true,
      };
    case categoriesActionType.FETCH_CATEGORIES_SUCCESS:
      return {
        categories: action.payload,
        loading: false,
        error: false,
      };
    case categoriesActionType.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default categoriesReducer;
