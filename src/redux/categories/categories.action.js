import categoriesActionType from './categories.type';

const checkStatus = (category) => ({
  type: categoriesActionType.CHECK_STATUS,
  payload: category,
});

export default checkStatus;
