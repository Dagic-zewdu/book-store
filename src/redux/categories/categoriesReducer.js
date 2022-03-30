import categoriesActionType from './categoriesType';

const categories = [
  'Action and Adventure',
  'Classics',
  'Comic Book or Graphic Novel',
  'Detective and Mystery',
  'Fantasy',
  'Historical Fiction',
  'Horror',
  'Literary Fiction',
];

const categoriesReducer = (state = categories, action) => {
  switch (action.type) {
    case categoriesActionType.CHECK_STATUS:
      return state; // under construction
    default:
      return state;
  }
};
export default categoriesReducer;
