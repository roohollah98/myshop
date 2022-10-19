export const fetchRequest = () => {
  return {
    type: "FETCH_REQUEST",
  };
};
export const fetchSuccess = (products) => {
  return {
    type: "FETCH_SUCCESS",
    payload: products,
  };
};

export const fetchFailure = (errorMessage) => {
  return {
    type: "FETCH_FAILURE",
    payload: errorMessage,
  };
};
