export const shorter = (title) => {
  const splitedTitle = title.split(" ");
  const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
  return newTitle;
};

export const isInBasket = (basket, product) => {
  let isExist = basket.filter((item) => item.id === product.id);
  if (isExist.length > 0) {
    return true;
  }
  return false;
};

export const checkQuantity = (basket, product, check) => {
  let res;
  if (check === "checkOne") {
    res = basket.find((item) => item.id === product.id && item.quantity === 1);
    return res;
  }
  res = basket.find((item) => item.id === product.id && item.quantity > 1);
  return res;
};
