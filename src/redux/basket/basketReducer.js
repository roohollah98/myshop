const initialState = {
  basket: [],
  checkOut: false,
  total: 0,
  countItems: 0,
};

const sumItems = (products) => {
  const countItems = products.reduce(
    (countItems, product) => (countItems = countItems + product.quantity),
    0
  );

  let total = products
    .reduce(
      (total, product) => (total = total + product.quantity * product.price),
      0
    )
    .toFixed(2);

  return { total, countItems };
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FIRST_ADD":
      if (!state.basket.find((item) => item.id === action.payload.id)) {
        state.basket.push({ ...action.payload, quantity: 1 });
      }

      return {
        ...state,
        basket: [...state.basket],
        ...sumItems(state.basket),
        checkOut: false,
      };

    case "INCREASE":
      const indexI = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );
      state.basket[indexI].quantity++;

      return { ...state, basket: [...state.basket], ...sumItems(state.basket) };
    case "DECREASE":
      const indexD = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );
      state.basket[indexD].quantity--;

      return { ...state, basket: [...state.basket], ...sumItems(state.basket) };
    case "REMOVE":
      console.log(action.payload)
      const newBasket = state.basket.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, basket: [...newBasket], ...sumItems(newBasket) };
    case "CLEAR":
      return { basket: [], checkOut: false, total: 0, countItems: 0 };
    case "CHECKOUT":
      return { basket: [], checkOut: true, total: 0, countItems: 0 };
    default:
      return state;
  }
};

export default basketReducer;
