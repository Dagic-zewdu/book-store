import categoriesActionType from './categories.type';

const INITIAL_STATE = {
  categories: [],
};
const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case categoriesActionType.CHECK_STATUS:
      return {
        ...state,
        categories: 'Under construction',
      };
    default:
      return state;
  }
};
export default categoriesReducer;
