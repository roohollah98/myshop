export const addToBasket = (product) => {
  return { type: "FIRST_ADD", payload: product };
};
export const increase = (product) => {
  return { type: "INCREASE", payload: product };
};
export const decrease = (product) => {
  return { type: "DECREASE", payload: product };
};
export const remove = (product) => {
  return { type: "REMOVE", payload: product };
};
export const clear = () => {
  return { type: "CLEAR" };
};
export const checkout = () => {
  return { type: "CHECKOUT" };
};
