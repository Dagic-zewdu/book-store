import categoriesActionType from './categoriesType';

const checkStatus = (category) => ({
  type: categoriesActionType.CHECK_STATUS,
  payload: category,
});

export default checkStatus;
