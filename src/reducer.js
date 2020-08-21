export const initialState = {
  cart: [],
  user: null,
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      // logic for remove item from cart
      let newCart = [...state.cart];
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      if (index >= 0) {
        // item exist in cart remove it
        newCart.splice(index, 1);
      }
      return {
        ...state,
        cart: newCart,
        // another way to remove item from cart
        // cart: state.cart.filter((item) => item.id !== action.payload && item),
      };
  }
};

export default reducer;
